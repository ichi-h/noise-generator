<script setup lang="ts">
import { ref } from "vue";
import { dispatch } from "../service/noise/dispatch";
import { VolStorage } from "../storage";

const vol = ref(VolStorage.load());
const isPlaying = ref(false);

const onPlayClick = () => {
  dispatch({ type: "ChangeVolume", volume: vol.value });
  dispatch({ type: "Play" });
  isPlaying.value = true;
};
const onStopClick = () => {
  dispatch({ type: "Stop" });
  isPlaying.value = false;
};
const onVolChange = () => dispatch({ type: "ChangeVolume", volume: vol.value });
</script>

<template>
  <section class="l-sugoi">
    <h1 class="title">
      <span>なんか</span><br />
      <span>すごい</span><br />
      <span>ノイズ</span>
    </h1>

    <section class="l-noise">
      <label class="label range" for="vol">音量</label>
      <input
        v-model="vol"
        class="range"
        name="vol"
        type="range"
        max="1.0"
        min="0.0"
        step="0.01"
        @input="onVolChange"
      />
      <button v-if="!isPlaying" class="button play" @click="onPlayClick">
        Play
      </button>
      <button v-else class="button stop" @click="onStopClick">Stop</button>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.l-sugoi {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5em;
}

.l-noise {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3em;
}
.title {
  font-size: 5em;
  width: 7em;
  padding: 20px;
  border: 10px solid #2c3e50;
  letter-spacing: 1em;
  user-select: none;
  box-shadow: 20px 20px 20px black;

  span {
    margin-right: -1em;
  }
}

.button {
  outline: 0;
  background: none;
  border: 10px solid;
  font-size: 3em;
  width: 10em;
  cursor: pointer;
  user-select: none;

  &.play {
    color: greenyellow;
    border-color: greenyellow;

    &:hover {
      color: white;
      background-color: greenyellow;
    }
  }

  &.stop {
    color: pink;
    border-color: pink;

    &:hover {
      color: white;
      background-color: pink;
    }
  }
}

.label {
  font-weight: bold;
  user-select: none;
  font-size: 3rem;
}

.range {
  width: 20vw;
}
</style>
