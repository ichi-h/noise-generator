const context = new AudioContext();

const bufferSize = 2 * context.sampleRate;
const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate);
const output = noiseBuffer.getChannelData(0);

for (let i = 0; i < bufferSize; i++) {
  output[i] = Math.random() * 2 - 1;
}

const gainNode = context.createGain();
gainNode.gain.value = 0.0;

const whiteNoise = context.createBufferSource();
whiteNoise.buffer = noiseBuffer;
whiteNoise.loop = true;
whiteNoise.start(0);

whiteNoise.connect(context.destination);

export default {
  context,
  gainNode,
};
