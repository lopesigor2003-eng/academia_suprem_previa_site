/**
 * Ambient Cyberpunk Background Audio Generator (Web Audio API)
 * Plays atmospheric synthesizer pads and pulses at exactly 5% volume
 */

class AmbientMusicEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private intervalId: NodeJS.Timeout | null = null;

  public init(volume: number = 0.05) {
    if (this.ctx) return;
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtxClass) return;

    this.ctx = new AudioCtxClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(volume, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public setVolume(volume: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime);
    }
  }

  public start() {
    if (this.isPlaying) return;
    this.init(0.05);

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.playCyberProgression();
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private playCyberProgression() {
    if (!this.ctx || !this.masterGain) return;

    // Atmospheric neon chord progression frequencies (Deep Synthwave in F minor / C minor)
    const chords = [
      [130.81, 164.81, 196.0, 261.63], // C minor 9
      [116.54, 146.83, 174.61, 233.08], // Bb sus
      [103.83, 130.81, 155.56, 207.65], // Ab maj7
      [116.54, 146.83, 174.61, 220.0],  // Bb add9
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const currentNotes = chords[chordIndex % chords.length];
      chordIndex++;

      // Create polyphonic oscillator voices
      currentNotes.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        // Warm analog synthesizer waveform
        osc.type = idx === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Low-pass filter for smooth cinematic warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(550 + idx * 80, now);
        filter.Q.setValueAtTime(2, now);

        // Slow cinematic envelope (attack -> sustain -> release)
        const duration = 4.0;
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.25, now + 1.2);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + duration);
      });
    };

    playChord();
    this.intervalId = setInterval(() => {
      if (this.isPlaying) playChord();
    }, 3800);
  }
}

export const ambientMusic = new AmbientMusicEngine();
