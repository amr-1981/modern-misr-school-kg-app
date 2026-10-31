// Child-Friendly Speech Synthesis Service for Modern Misr School KG1
// Egyptian Colloquial Arabic (بالعامية المصرية المحببة لأطفال الروضة)

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
    this.rate = 0.85; // Slightly slower for clear KG1 phonics
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
      }, 250);
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
          name.includes('arabic') ||
          name.includes('عربي') ||
          name.includes('maged') ||
          name.includes('tarik') ||
          name.includes('naayf') ||
          name.includes('shakir')
        );
      });

      if (this.arabicVoices.length > 0 && !this.selectedVoice) {
        // Prefer Egyptian Arabic or warm clear Arabic voice
        const egVoice = this.arabicVoices.find(v => (v.lang || '').includes('EG'));
        const maleVoice = this.arabicVoices.find(v => {
          const n = (v.name || '').toLowerCase();
          return n.includes('shakir') || n.includes('maged') || n.includes('tarik') || n.includes('naayf') || n.includes('wahab');
        });
        this.selectedVoice = egVoice || maleVoice || this.arabicVoices[0];
      }
      this.notify('voicesUpdated', { arabicVoices: this.arabicVoices, selectedVoice: this.selectedVoice });
    } catch (e) {}
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

  speak(text, onEndCallback = null) {
    if (!text || !text.trim()) return;
    this.stop();
    this.requestWakeLock();

    if (!this.synth) {
      if (onEndCallback) setTimeout(onEndCallback, 1200);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
      utterance.lang = this.selectedVoice.lang || 'ar-EG';
    } else {
      utterance.lang = 'ar-EG';
    }
    utterance.rate = this.rate;
    utterance.pitch = 1.15; // Friendly warm pitch for 4-year-olds

    if (typeof window !== 'undefined') {
      window._kgActiveUtterance = utterance;
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      this.notify('start', { text });
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.releaseWakeLock();
      this.notify('end', { text });
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      this.releaseWakeLock();
      this.notify('end', { text });
    };

    try {
      this.synth.speak(utterance);
    } catch (e) {}
  }

  // Authentic Egyptian Praise Expressions for KG1 Children
  speakEgyptianPraise() {
    sfx.playCorrect();
    const praises = [
      'شاطر أوي يا بطل! برافو عليك، إيه الحلاوة دي!',
      'ممتاز يا قمر! إجابة صح وزي الفل!',
      'برافو يا عبقري روضتنا، تسلم إيدك الشاطرة!',
      'يا سلام على الشطارة! بطل المدرسة المصرية بطرابلس!',
      'الله عليك يا فنان! شاطر جداً جداً وذكي!',
      'أحسنت يا بطل الأبطال! نجمة دهب بتلمع عشانك!'
    ];
    const phrase = praises[Math.floor(Math.random() * praises.length)];
    setTimeout(() => {
      this.speak(phrase);
    }, 250);
  }

  // Authentic Egyptian Encouragement when trying again
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
