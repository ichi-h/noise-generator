import noise from "./context";
import { NoiseMsg } from "./msg";
import { VolStorage } from "../../storage";

export const dispatch = (msg: NoiseMsg): void => {
  switch (msg.type) {
    case "Play":
      noise.context.resume();
      break;

    case "Stop":
      noise.context.suspend();
      break;

    case "ChangeVolume":
      noise.gainNode.gain.value = msg.volume;
      VolStorage.save(msg.volume);
      break;
  }
};
