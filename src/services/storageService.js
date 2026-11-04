const KEYS = {
  CHILD_NAME: 'mms_kg1_child_name',
  STARS: 'mms_kg1_stars',
  MASTERED_LETTERS: 'mms_kg1_mastered_letters',
  COMPLETED_STORIES: 'mms_kg1_completed_stories',
  GAME_SCORES: 'mms_kg1_game_scores',
  MISSED_ITEMS: 'mms_kg1_missed_items',
  VOICE_MUTED: 'mms_kg1_voice_muted'
};

export const storageService = {
  getVoiceMuted() {
    return localStorage.getItem(KEYS.VOICE_MUTED) === 'true';
  },
  setVoiceMuted(muted) {
    localStorage.setItem(KEYS.VOICE_MUTED, muted ? 'true' : 'false');
  },
  getChildName() {
    return localStorage.getItem(KEYS.CHILD_NAME) || '';
  },
  setChildName(name) {
    if (name && name.trim()) {
      localStorage.setItem(KEYS.CHILD_NAME, name.trim());
    } else {
      localStorage.removeItem(KEYS.CHILD_NAME);
    }
  },
  getStars() {
    return parseInt(localStorage.getItem(KEYS.STARS) || '0', 10) || 0;
  },
  addStars(amount = 1) {
    const updated = this.getStars() + amount;
    localStorage.setItem(KEYS.STARS, updated.toString());
    return updated;
  },
  getMasteredLetters() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.MASTERED_LETTERS) || '[]');
    } catch {
      return [];
    }
  },
  markLetterMastered(letterId) {
    const list = this.getMasteredLetters();
    if (!list.includes(letterId)) {
      list.push(letterId);
      localStorage.setItem(KEYS.MASTERED_LETTERS, JSON.stringify(list));
      this.addStars(3);
    }
    return list;
  },
  getCompletedStories() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.COMPLETED_STORIES) || '[]');
    } catch {
      return [];
    }
  },
  markStoryCompleted(storyId) {
    const list = this.getCompletedStories();
    if (!list.includes(storyId)) {
      list.push(storyId);
      localStorage.setItem(KEYS.COMPLETED_STORIES, JSON.stringify(list));
      this.addStars(5);
    }
    return list;
  },
  getGameScores() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.GAME_SCORES) || '[]');
    } catch {
      return [];
    }
  },
  recordGameScore(record) {
    const list = this.getGameScores();
    list.push({
      ...record,
      date: new Date().toLocaleDateString('ar-EG')
    });
    localStorage.setItem(KEYS.GAME_SCORES, JSON.stringify(list));
    this.addStars(record.starsEarned || 2);
    return list;
  },
  clearAllData() {
    Object.values(KEYS).forEach(k => localStorage.removeItem(k));
  }
};
