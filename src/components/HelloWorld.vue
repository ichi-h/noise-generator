<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";
import { dispatch } from "../service/noise/dispatch";

defineProps<{ msg: string }>();

const vol = ref(0.2);

const onPlayClick = () => {
  dispatch({ type: "ChangeVolume", volume: vol.value });
  dispatch({ type: "Play" });
};
const onStopClick = () => dispatch({ type: "Stop" });
const onVolChange = () => dispatch({ type: "ChangeVolume", volume: vol.value });
</script>

<template>
  <h1>{{ msg }}</h1>

  <button @click="onPlayClick">Play</button>
  <button @click="onStopClick">Stop</button>
  <input
    v-model="vol"
    type="range"
    max="1.0"
    min="0.0"
    step="0.01"
    @input="onVolChange"
  />
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
