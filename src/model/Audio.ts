import {Audio as AudioAv} from "expo-av"
export type Audio = {
  sound: AudioAv.Sound;
  duration: string;
  file: string | null;
}