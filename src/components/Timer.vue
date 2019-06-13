<template>
  <div class="timer-container">
    <div class="timer ui-component" @click="startTimer">
      <template v-if="!editing">
        <CountdownTimer ref="timer" :time="startTime * 60" />
      </template>
      <template v-else>
        <form @submit.prevent="handleSubmit">
          <input ref="timeInput" v-model="timeValue" type="number" minlength="1" maxlength="4"/>
        </form>
      </template>
    </div>
    <button id="edit" v-bind:class="{ editing }" class="ui-component" @click="toggleEditing">
      <icon-base height="18" width="18">
        <icon-pencil v-if="!editing"/>
        <icon-tick v-if="editing"/>
      </icon-base>
    </button>
  </div>
</template>

<script>
import CountdownTimer from './CountdownTimer.vue';
import IconBase from './icons/IconBase.vue';
import IconPencil from './icons/IconPencil.vue';
import IconTick from './icons/IconTick.vue';

export default {
  name: 'Timer',
  components: {
    CountdownTimer,
    IconBase,
    IconPencil,
    IconTick,
  },
  data() {
    return {
      startTime: 5,
      counting: false,
      editing: false,
      timeValue: '',
    };
  },
  methods: {
    startTimer() {
      if (this.editing) {
        return;
      }

      if (this.counting) {
        this.$refs.timer.stop();
        this.counting = false;
      } else {
        this.$refs.timer.start();
        this.counting = true;
      }
    },
    toggleEditing() {
      if (this.editing) {
        this.$refs.timer.stop();
        this.counting = false;
        this.handleSubmit();
      } else {
        this.editing = true;
        this.$nextTick(() => {
          this.$refs.timeInput.focus();
        });
      }
    },
    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        const digits = value < 10 ? `0${value}` : value;

        // eslint-disable-next-line
        props[key] = digits;
      });

      return props;
    },
    handleSubmit() {
      const time = this.timeValue;
      if (!time) {
        return;
      }

      if (time.length > 2) {
        // TODO: turn to seconds
      } else {
        this.startTime = parseInt(time, 10);
      }
      this.editing = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/all.scss';

.timer-container {

  #edit {
    margin-left: 10px;
    border-radius: 10px;
    width: 30px;
    height: 30px;

    &.editing {
      border: 1px solid #4caf50;
      background-color: #80e27e;
    }
  }

  .timer {
    border-radius: 5px;
    text-align: center;
    width: 100px;
    display: inline-block;

    input {
      text-align: center;
      width: 40px;
      margin: 0 auto;
    }
  }
}
</style>
