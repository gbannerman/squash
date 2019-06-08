<template>
  <div id="app">
    <Timer id="timer" />
    <div class="scores">
      <Score
        :count="leftScore"
        @increment="leftScore++"
        id="left" />
      <Score
        :count="rightScore"
        @increment="rightScore++"
        id="right" />
    </div>
    <button class="ui-component" id="reset" @click="resetScores">
      <icon-base icon-name="reset"><icon-reset /></icon-base>
    </button>
  </div>
</template>

<script>
import Score from './components/Score.vue';
import Timer from './components/Timer.vue';
import IconBase from './components/icons/IconBase.vue';
import IconReset from './components/icons/IconReset.vue';

export default {
  name: 'app',
  components: {
    Timer,
    Score,
    IconBase,
    IconReset,
  },
  data() {
    return {
      leftScore: 0,
      rightScore: 0,
    };
  },
  methods: {
    resetScores() {
      this.leftScore = 0;
      this.rightScore = 0;
    },
  },
};
</script>

<style lang="scss">
@import './styles/all.scss';

html, body {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  position: relative;

  .scores {
    height: 100%;
  }

  #timer {
    position: absolute;
    top: 20px;
    left: calc(50% - 50px);
    line-height: 40px;
    height: 40px;
    width: 200px;
  }

  #reset {
    position: absolute;
    border-radius: 100%;
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    bottom: 20px;
  }

  #left {
    background-color: #f44336;
  }

  #right {
    background-color: #2196f3;
  }
}
</style>
