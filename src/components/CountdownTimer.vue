<template>
  <div id="countdownTimer">
    {{ currentTime }}
  </div>
</template>

<script>
import Timer from '../timer';

export default {
  name: 'CountdownTimer',
  props: {
    time: Number,
  },
  data() {
    return {
      timer: new Timer(this.time, this.updateTime, () => {}),
      currentTime: `${(this.time / 60).toString().padStart(2, '0')}:00`, // TODO: Generate this from the prop
    };
  },
  methods: {
    start() {
      this.timer.start();
    },
    stop() {
      this.timer.stop();
    },
    updateTime(time) {
      const minutes = time.minutes.toString().padStart(2, '0');
      const seconds = time.seconds.toString().padStart(2, '0');
      this.currentTime = `${minutes}:${seconds}`;
    },
  },
  beforeDestroy() {
    this.timer.stop();
  },
};
</script>

<style lang="scss">

</style>
