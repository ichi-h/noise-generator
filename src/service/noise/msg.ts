interface Msg {
  type: string;
}

interface Stop extends Msg {
  type: "Stop";
}

interface Play extends Msg {
  type: "Play";
}

interface ChangeVolume extends Msg {
  type: "ChangeVolume";
  volume: number;
}

export type NoiseMsg = Stop | Play | ChangeVolume;
