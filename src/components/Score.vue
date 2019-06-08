<template>
  <div class="score-box" @click="$emit('increment')">
    <div class="score">
      {{ count }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    count: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.score-box {
  text-align: center;
  width: 50%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
}
</style>
