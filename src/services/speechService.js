// Child-Friendly Speech Synthesis & Rich Sound Effects for Modern Misr School KG1
// Realistic Web Audio Applause, Cheerful Fanfares, and Egyptian Dialect

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

  // Cute bubble pop
  playPop() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {}
  }

  // Sparkling magic star chime
  playMagicChime() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const freqs = [1046.5, 1318.5, 1567.98, 2093.0]; // High sparkling notes
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.35);
      });
    } catch (e) {}
  }

  // Upbeat Gamified Correct Jingle
  playCorrect() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
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

  // Realistic Crowd / Children Applause (تصفيق حقيقي مبهج)
  playApplause(durationSec = 2.2) {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const clapsCount = Math.floor(durationSec * 24);

      for (let i = 0; i < clapsCount; i++) {
        const clapTime = now + (i / 24) + (Math.random() * 0.035 - 0.015);
        if (clapTime < now) continue;

        // Generate rapid micro noise burst for each clap hand impact
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.045);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const channel = buffer.getChannelData(0);
        for (let j = 0; j < bufferSize; j++) {
          channel[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.22));
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        // Bandpass filter centered at 1000 - 1500 Hz for warm natural palms clapping
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1050 + (Math.random() * 350 - 175);
        filter.Q.value = 1.9;

        const gain = this.ctx.createGain();
        // Dynamic envelope so applause builds up and fades smoothly
        const progress = i / clapsCount;
        const volumeFactor = Math.sin(progress * Math.PI) * 0.38 + 0.12;
        gain.gain.setValueAtTime(volumeFactor, clapTime);
        gain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.045);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start(clapTime);
        noise.stop(clapTime + 0.045);
      }
    } catch (e) {}
  }

  // Triumphant Fanfare with Chimes (احتفال الفوز)
  playCelebrationFanfare() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const fanfare = [
        { f: 523.25, d: 0.12 },
        { f: 659.25, d: 0.12 },
        { f: 783.99, d: 0.14 },
        { f: 1046.50, d: 0.35 }
      ];
      let t = this.ctx.currentTime;
      fanfare.forEach((n) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.f, t);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + n.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + n.d);
        t += n.d * 0.85;
      });
    } catch (e) {}
  }

  // Full Rich Celebration: Applause + Fanfare + Magic Chimes!
  playFullCelebration() {
    this.playCelebrationFanfare();
    this.playApplause(2.4);
    setTimeout(() => this.playMagicChime(), 350);
  }

  // Friendly Try Again boop
  playTryAgain() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(220, this.ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) {}
  }
}

export const sfx = new SoundEffects();

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.isPlaying = false;
    this.rate = 0.88;
    this.pitch = 1.15;
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

        // Priority 2: Natural / Neural voices
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

  enhanceEgyptianPhonetics(text) {
    if (!text) return '';
    return text
      .replace(/اضغط على/g, 'دوس على')
      .replace(/اضغطي على/g, 'دوسي على')
      .replace(/اختر/g, 'اختار')
      .replace(/هيا بنا/g, 'يلا بينا')
      .replace(/هيا/g, 'يلا');
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

  // Pure Sound Effects for Rewards (No synthesized voice overlay)
  playRewardCelebration() {
    this.stop();
    sfx.playFullCelebration();
  }

  // Pure Sound Effect for Try Again
  playTryAgain() {
    this.stop();
    sfx.playTryAgain();
  }

  speakEgyptianPraise() {
    this.playRewardCelebration();
  }

  speakEgyptianTryAgain() {
    this.playTryAgain();
  }

  isSpeaking() {
    return Boolean(this.isPlaying || (this.synth && this.synth.speaking));
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
