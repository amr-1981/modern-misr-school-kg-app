// Child-Friendly Speech Synthesis Service for Modern Misr School KG1
// Default rate set to 0.85x for clear Arabic phonics & harakat pronunciation, preferring male voices

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.isPlaying = false;
    this.rate = 0.85;
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
        // Prioritize clear Male Arabic voices (Shakir, Maged, Tarik, Naayf)
        const maleVoice = this.arabicVoices.find(v => {
          const n = (v.name || '').toLowerCase();
          return n.includes('shakir') || n.includes('maged') || n.includes('tarik') || n.includes('naayf') || n.includes('wahab');
        });
        this.selectedVoice = maleVoice || this.arabicVoices[0];
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
    utterance.pitch = 1.0;

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
