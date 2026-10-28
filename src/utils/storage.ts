import { StudentProfile } from '../types';

const STORAGE_KEY = 'cong_dan_so_nhi_profile';
const TEACHER_MODE_KEY = 'cong_dan_so_nhi_teacher_mode';
const SOUND_ENABLED_KEY = 'cong_dan_so_nhi_sound';

export const DEFAULT_STUDENT_PROFILE: StudentProfile = {
  id: 'HS01',
  name: 'Học sinh 01 (Lớp 5/1)',
  avatarIndex: 0,
  completedMissions: [],
  quizScores: {},
  gameHighScores: {
    'speed': 0,
    'true_false': 0,
    'detective': 0,
    'safe_sort': 0,
    'obstacle': 0,
    'rescue_besao': 0
  },
  badgesEarned: [],
  preTestScore: undefined,
  postTestScore: undefined,
  creativePoster: undefined
};

export function loadCurrentStudent(): StudentProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STUDENT_PROFILE;
    return { ...DEFAULT_STUDENT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STUDENT_PROFILE;
  }
}

export function saveCurrentStudent(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save student profile:', err);
  }
}

export function loadTeacherDataSource(): 'demo' | 'real' {
  try {
    const mode = localStorage.getItem(TEACHER_MODE_KEY);
    return mode === 'real' ? 'real' : 'demo';
  } catch {
    return 'demo';
  }
}

export function saveTeacherDataSource(source: 'demo' | 'real'): void {
  try {
    localStorage.setItem(TEACHER_MODE_KEY, source);
  } catch (err) {
    console.error('Failed to save teacher mode:', err);
  }
}

export function loadSoundSetting(): boolean {
  try {
    const val = localStorage.getItem(SOUND_ENABLED_KEY);
    return val === null ? true : val === 'true';
  } catch {
    return true;
  }
}

export function saveSoundSetting(enabled: boolean): void {
  try {
    localStorage.setItem(SOUND_ENABLED_KEY, String(enabled));
  } catch (err) {
    console.error('Failed to save sound setting:', err);
  }
}

// Web Audio API pure synthesizer chime sounds (zero external assets, 100% reliable)
class SoundFx {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playSuccess() {
    if (!loadSoundSetting()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch {
      // Audio not permitted or supported
    }
  }

  playClick() {
    if (!loadSoundSetting()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio not permitted
    }
  }

  playCheer() {
    if (!loadSoundSetting()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const freqs = [440, 554.37, 659.25, 880, 1108.73];
      freqs.forEach((f, idx) => {
        const now = this.ctx!.currentTime + idx * 0.08;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now);
        osc.stop(now + 0.4);
      });
    } catch {
      // audio error
    }
  }

  playWarning() {
    if (!loadSoundSetting()) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.setValueAtTime(220, now + 0.15);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // audio error
    }
  }
}

export const sound = new SoundFx();
