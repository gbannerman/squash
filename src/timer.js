export default class Timer {
  constructor(duration, callback, onError) {
    this.callback = callback;
    this.onError = onError;
    this.timeLeft = duration * 1000;
  }

  start() {
    this.targetTime = Date.now() + this.timeLeft;

    const interval = 200;
    let expected = Date.now() + interval;

    const step = () => {
      const dt = Date.now() - expected; // the drift (positive for overshooting)
      if (dt > interval) {
        this.error();
      }

      this.timeLeft = this.targetTime - Date.now();

      const minutes = (Math.floor(this.timeLeft / 1000) / 60);
      const seconds = ((this.timeLeft / 1000) % 60);

      const time = {
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds),
      };
      this.callback(time);

      if (time.minutes <= 0 && time.seconds <= 0) {
        this.stop();
        return;
      }

      expected += interval;
      this.timeoutRef = setTimeout(step, Math.max(0, interval - dt)); // take into account drift
    };
    this.timeoutRef = setTimeout(step, interval);
  }

  stop() {
    clearTimeout(this.timeoutRef);
  }

  setTime(duration) {
    this.timeLeft = duration * 1000;
  }
}
