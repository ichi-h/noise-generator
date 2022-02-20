const context = new AudioContext();

const bufferSize = 2 * context.sampleRate;
const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate);
const output = noiseBuffer.getChannelData(0);

for (let i = 0; i < bufferSize; i++) {
  output[i] = Math.random() * 2 - 1;
}

const whiteNoise = context.createBufferSource();
const gainNode = context.createGain();

gainNode.connect(context.destination);
whiteNoise.connect(gainNode);
whiteNoise.buffer = noiseBuffer;
whiteNoise.loop = true;
whiteNoise.start(0);

export default {
  context,
  gainNode,
};
