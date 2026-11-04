// Child-Friendly Speech Synthesis & Vibrant Natural Sound Effects for Modern Misr School KG1
// Realistic Acoustic Crowd Applause, Triumphant Brass Fanfare, Stardust Chimes, and Egyptian Dialect
import { storageService } from './storageService';

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

  // Soft Organic Marimba / Wooden Bubble Pop (فرقعة خشبية لطيفة)
  playPop() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Rounded fundamental
      osc.type = 'sine';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.08);

      // Warm wooden overtone
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(760, now);
      osc2.frequency.exponentialRampToValueAtTime(1480, now + 0.06);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.frequency.exponentialRampToValueAtTime(500, now + 0.1);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 0.1);
      osc2.stop(now + 0.1);
    } catch (e) {}
  }

  // Sparkling Crystal Stardust Chimes (رنين النجوم الكريستالي الهادئ والمتناسق)
  playMagicChime() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 5 Celestial bells at moderate, graceful pacing (90ms interval)
      const chimeNotes = [659.25, 880.00, 1108.73, 1318.51, 1760.00]; // E5, A5, C#6, E6, A6

      chimeNotes.forEach((freq, idx) => {
        const noteTime = now + idx * 0.09;

        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(freq, noteTime);

        // Metallic shimmer harmonic
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2.76, noteTime);

        noteGain.gain.setValueAtTime(0.18, noteTime);
        noteGain.gain.exponentialRampToValueAtTime(0.0005, noteTime + 0.75);

        osc1.connect(noteGain);
        osc2.connect(noteGain);
        noteGain.connect(this.ctx.destination);

        osc1.start(noteTime);
        osc2.start(noteTime);
        osc1.stop(noteTime + 0.75);
        osc2.stop(noteTime + 0.75);
      });
    } catch (e) {}
  }

  // Warm Gamified Triad Chime
  playCorrect() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Stately, cheerful chord progression: C5 -> E5 -> G5 -> C6 at 95ms
      const notes = [523.25, 659.25, 783.99, 1046.50];

      notes.forEach((freq, i) => {
        const t = now + i * 0.095;
        const osc = this.ctx.createOscillator();
        const oscH = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);

        oscH.type = 'sine';
        oscH.frequency.setValueAtTime(freq * 2, t);

        gain.gain.setValueAtTime(0.24, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.42);

        osc.connect(gain);
        oscH.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        oscH.start(t);
        osc.stop(t + 0.42);
        oscH.stop(t + 0.42);
      });
    } catch (e) {}
  }

  // Realistic Human Crowd / Children Applause (تصفيق جماعي واقعي ودافئ للأطفال)
  playApplause(durationSec = 2.8) {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Multiple virtual children clapping at natural human tempos (~4 to 5 claps/sec per pair of hands)
      // With realistic acoustic body: low palm thump + bandpass hollow crack
      const clappers = [
        { rate: 4.2, offset: 0.00, volume: 0.28 },
        { rate: 4.8, offset: 0.05, volume: 0.32 },
        { rate: 3.9, offset: 0.11, volume: 0.26 },
        { rate: 4.5, offset: 0.16, volume: 0.30 },
        { rate: 5.1, offset: 0.08, volume: 0.25 }
      ];

      clappers.forEach((clapper) => {
        const clapsCount = Math.floor(durationSec * clapper.rate);
        const interval = 1 / clapper.rate;

        for (let i = 0; i < clapsCount; i++) {
          const clapTime = now + clapper.offset + i * interval + (Math.random() * 0.04 - 0.02);
          if (clapTime < now || clapTime > now + durationSec) continue;

          // Noise impact burst
          const bufferSize = Math.floor(this.ctx.sampleRate * 0.042);
          const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const channel = buffer.getChannelData(0);
          for (let j = 0; j < bufferSize; j++) {
            channel[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.2));
          }

          const noise = this.ctx.createBufferSource();
          noise.buffer = buffer;

          // Acoustic Hand Resonance (Dual filtered: low thump + crisp hollow palm snap)
          const filterSnap = this.ctx.createBiquadFilter();
          filterSnap.type = 'bandpass';
          filterSnap.frequency.value = 1250 + (Math.random() * 300 - 150);
          filterSnap.Q.value = 2.1;

          const gain = this.ctx.createGain();
          const progress = (clapTime - now) / durationSec;
          const swell = Math.sin(Math.min(1, Math.max(0, progress)) * Math.PI);
          const vol = clapper.volume * (0.35 + 0.65 * swell);

          gain.gain.setValueAtTime(vol, clapTime);
          gain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.042);

          noise.connect(filterSnap);
          filterSnap.connect(gain);
          gain.connect(this.ctx.destination);

          noise.start(clapTime);
          noise.stop(clapTime + 0.042);
        }
      });
    } catch (e) {}
  }

  // Vibrant Brass / Horn Fanfare with Triumphant Harmonics (بوق ونفير فوز احتفالي ذهبي مبهج)
  playCelebrationFanfare() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Stately, moderate celebratory melody at ~115 BPM:
      const brassPhrases = [
        { t: 0.00, main: 392.00, harm: 261.63, d: 0.20 },
        { t: 0.22, main: 523.25, harm: 329.63, d: 0.20 },
        { t: 0.44, main: 659.25, harm: 392.00, d: 0.24 },
        { t: 0.70, main: 783.99, harm: 523.25, alt: 1046.50, d: 1.20 }
      ];

      brassPhrases.forEach((p) => {
        const start = now + p.t;

        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const oscHarm = this.ctx.createOscillator();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(p.main, start);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(p.main, start);

        oscHarm.type = 'triangle';
        oscHarm.frequency.setValueAtTime(p.harm, start);

        // Brass dynamic filter envelope (lip attack swell)
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, start);
        filter.frequency.exponentialRampToValueAtTime(2400, start + 0.05);
        filter.frequency.exponentialRampToValueAtTime(1100, start + p.d);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.001, start);
        gain.gain.linearRampToValueAtTime(0.32, start + 0.04);
        gain.gain.setValueAtTime(0.28, start + p.d * 0.6);
        gain.gain.exponentialRampToValueAtTime(0.001, start + p.d);

        osc1.connect(filter);
        osc2.connect(filter);
        oscHarm.connect(filter);

        if (p.alt) {
          const oscAlt = this.ctx.createOscillator();
          oscAlt.type = 'sine';
          oscAlt.frequency.setValueAtTime(p.alt, start);
          oscAlt.connect(filter);
          oscAlt.start(start);
          oscAlt.stop(start + p.d);
        }

        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start(start);
        osc2.start(start);
        oscHarm.start(start);
        osc1.stop(start + p.d);
        osc2.stop(start + p.d);
        oscHarm.stop(start + p.d);
      });
    } catch (e) {}
  }

  // Full Rich Celebration: Orchestral Fanfare + Warm Crowd Applause + Stardust Chimes
  playFullCelebration() {
    this.playCelebrationFanfare();
    // Applause joins naturally as the grand chord rings out (t + 0.55s)
    setTimeout(() => {
      this.playApplause(3.0);
    }, 550);
    // Crystal chimes sprinkle through the applause (t + 0.9s)
    setTimeout(() => {
      this.playMagicChime();
    }, 900);
  }

  // Gentle, Encouraging Musical Try-Again Tone
  playTryAgain() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const notes = [
        { f: 392.00, t: 0.00, d: 0.20 }, // G4
        { f: 329.63, t: 0.16, d: 0.32 }  // E4
      ];

      notes.forEach((n) => {
        const start = now + n.t;
        const osc = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, start);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(n.f * 2, start);

        gain.gain.setValueAtTime(0.20, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + n.d);

        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc2.start(start);
        osc.stop(start + n.d);
        osc2.stop(start + n.d);
      });
    } catch (e) {}
  }
}

export const sfx = new SoundEffects();

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.isPlaying = false;
    this.isMuted = typeof window !== 'undefined' ? storageService.getVoiceMuted() : false;
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

  toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  setMuted(muted) {
    this.isMuted = Boolean(muted);
    if (typeof window !== 'undefined') {
      storageService.setVoiceMuted(this.isMuted);
    }
    if (this.isMuted) {
      this.stop();
    }
    this.notify('muteChanged', { isMuted: this.isMuted });
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

    // If voice explanation is muted by user toggle, suppress voice speech!
    if (this.isMuted) {
      if (onEndCallback) setTimeout(onEndCallback, 300);
      return;
    }

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
