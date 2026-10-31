// Child-Friendly Speech Synthesis Service for Modern Misr School KG1
// Prioritizes Authentic Egyptian Voices: Microsoft Hoda (ar-EG), Salma Neural, Google ar-EG

class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playCorrect() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.08);
        osc.stop(this.ctx.currentTime + i * 0.08 + 0.3);
      });
    } catch (e) {}
  }

  playTryAgain() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(220, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }
}

export const sfx = new SoundEffects();

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.isPlaying = false;
    this.rate = 0.88; // Ideal kindergarten tempo
    this.pitch = 1.15; // Cheerful warm Egyptian teacher pitch
    this.voices = [];
    this.arabicVoices = [];
    this.selectedVoice = null;
    this.listeners = new Set();
    this.wakeLock = null;

    if (this.synth) {
      this.initVoices();
    }
  }

  async requestWakeLock() {
    if (typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
      try {
        this.wakeLock = await navigator.wakeLock.request('screen');
      } catch (e) {}
    }
  }

  async releaseWakeLock() {
    if (this.wakeLock) {
      try {
        await this.wakeLock.release();
        this.wakeLock = null;
      } catch (e) {}
    }
  }

  initVoices() {
    this.loadVoices();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (this.voices.length > 0 || attempts > 10) clearInterval(interval);
        else this.loadVoices();
      }, 200);
    }
  }

  loadVoices() {
    if (!this.synth) return;
    try {
      this.voices = this.synth.getVoices() || [];
      this.arabicVoices = this.voices.filter(v => {
        const lang = (v.lang || '').toLowerCase();
        const name = (v.name || '').toLowerCase();
        return (
          lang.startsWith('ar') ||
          lang.includes('ar-') ||
          lang.includes('ar_') ||
          name.includes('arabic') ||
          name.includes('عربي') ||
          name.includes('hoda') ||
          name.includes('salma') ||
          name.includes('maged') ||
          name.includes('shakir') ||
          name.includes('naayf')
        );
      });

      if (this.arabicVoices.length > 0) {
        // Priority 1: Egyptian Voices (Microsoft Salma Natural, Microsoft Hoda ar-EG, Google ar-EG)
        const egyptianVoice = this.arabicVoices.find(v => {
          const n = (v.name || '').toLowerCase();
          const l = (v.lang || '').toLowerCase();
          return (
            n.includes('salma') ||
            n.includes('hoda') ||
            l.includes('eg') ||
            l === 'ar-eg' ||
            n.includes('egypt') ||
            n.includes('مصر')
          );
        });

        // Priority 2: High quality Natural / Neural voices
        const naturalVoice = this.arabicVoices.find(v => {
          const n = (v.name || '').toLowerCase();
          return n.includes('natural') || n.includes('online') || n.includes('neural');
        });

        this.selectedVoice = egyptianVoice || naturalVoice || this.arabicVoices[0];
      }
      this.notify('voicesUpdated', { 
        arabicVoices: this.arabicVoices, 
        selectedVoice: this.selectedVoice,
        selectedVoiceName: this.selectedVoice ? this.selectedVoice.name : 'صوت المتصفح التلقائي'
      });
    } catch (e) {}
  }

  setVoice(voiceName) {
    const found = this.arabicVoices.find(v => v.name === voiceName);
    if (found) {
      this.selectedVoice = found;
      this.notify('voiceChanged', { selectedVoice: this.selectedVoice });
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(event, data) {
    this.listeners.forEach(fn => {
      try { fn(event, data); } catch (e) {}
    });
  }

  setRate(newRate) {
    this.rate = Math.max(0.65, Math.min(1.5, newRate));
    this.notify('rateChange', { rate: this.rate });
  }

  setPitch(newPitch) {
    this.pitch = Math.max(0.8, Math.min(1.6, newPitch));
    this.notify('pitchChange', { pitch: this.pitch });
  }

  // Egyptian dialect phonetic enhancer for clear kindergarten articulation
  enhanceEgyptianPhonetics(text) {
    if (!text) return '';
    return text
      // Common dialect substitutions for natural speech
      .replace(/اضغط على/g, 'دوس على')
      .replace(/اضغطي على/g, 'دوسي على')
      .replace(/اختر/g, 'اختار')
      .replace(/هيا بنا/g, 'يلا بينا')
      .replace(/هيا/g, 'يلا')
      .replace(/ممتاز/g, 'شاطر أوي!')
      .replace(/رائع/g, 'برافو عليك!')
      .replace(/أحسنت/g, 'تسلم إيدك يا بطل!')
      .replace(/حاول مرة أخرى/g, 'معلش فكّر تاني وجرّب كمان مرة');
  }

  speak(text, onEndCallback = null) {
    if (!text || !text.trim()) return;
    this.stop();
    this.requestWakeLock();

    if (!this.synth) {
      if (onEndCallback) setTimeout(onEndCallback, 1200);
      return;
    }

    const enhancedText = this.enhanceEgyptianPhonetics(text);
    const utterance = new SpeechSynthesisUtterance(enhancedText);

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
      utterance.lang = this.selectedVoice.lang || 'ar-EG';
    } else {
      utterance.lang = 'ar-EG';
    }

    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    if (typeof window !== 'undefined') {
      window._kgActiveUtterance = utterance;
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      this.notify('start', { text: enhancedText });
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.releaseWakeLock();
      this.notify('end', { text: enhancedText });
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      this.releaseWakeLock();
      this.notify('end', { text: enhancedText });
    };

    try {
      this.synth.speak(utterance);
    } catch (e) {}
  }

  // Authentic Egyptian Praise Expressions
  speakEgyptianPraise() {
    sfx.playCorrect();
    const praises = [
      'شاطر أوي يا بطل! برافو عليك، إيه الحلاوة دي!',
      'ممتاز يا قمر! إجابة صح وزي الفل!',
      'برافو يا عبقري روضتنا، تسلم إيدك الشاطرة!',
      'يا سلام على الشطارة! بطل المدرسة المصرية بطرابلس!',
      'الله عليك يا فنان! شاطر جداً جداً وذكي!',
      'أحسنت يا سكر! نجمة دهب بتلمع عشانك يا بطل!'
    ];
    const phrase = praises[Math.floor(Math.random() * praises.length)];
    setTimeout(() => {
      this.speak(phrase);
    }, 250);
  }

  // Authentic Egyptian Encouragement
  speakEgyptianTryAgain() {
    sfx.playTryAgain();
    const tryAgains = [
      'معلش يا بطل، فكّر تاني وجرّب كمان مرة، أنت شاطر وهتعرفها!',
      'قرّبت أهو! ركّز في صوت الحرف وجرّب تاني يا سكر!',
      'لا يا حبيبي، بص على الصورة كويس وفكّر في أول صوت بتسمعه!',
      'فكّر كمان شوية يا عسل، يلا نجرّب تاني سوا!'
    ];
    const phrase = tryAgains[Math.floor(Math.random() * tryAgains.length)];
    setTimeout(() => {
      this.speak(phrase);
    }, 200);
  }

  stop() {
    this.releaseWakeLock();
    if (this.synth) {
      try { this.synth.cancel(); } catch (e) {}
    }
    this.isPlaying = false;
    this.notify('stop', {});
  }
}

export const speech = new SpeechService();
