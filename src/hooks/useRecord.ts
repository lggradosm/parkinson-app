import { Audio } from "expo-av";
import { useState } from "react";
import { Audio as AudioType } from "../model/Audio";
export default function useRecord() {
  const [record, setRecord] = useState<null | Audio.Recording>(null);
  const COUNTER = 10 * 1000; // 10 segundos
  const [timeout, setTimeOut] = useState<NodeJS.Timeout | null>(null);
  const start = async () => {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status !== "granted") return null;
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecord(recording);
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(async () => {
          try {
            const audio = await stop(recording); 
            resolve(audio);
          } catch (error) {
            reject(null); 
          }
        }, COUNTER);
        setTimeOut(timeout);
      });
    } catch (e) {
      console.error(e);
      throw new Error("Error");
    }
  };
  const pause = async (audio: AudioType) => {
    if (timeout) clearTimeout(timeout);
    await audio.sound.pauseAsync();
  };
  const play = async (audio: AudioType) => {
    if (record) {
      await audio.sound.replayAsync();
      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          resolve(true);
        }, COUNTER);
        setTimeOut(timeout);
      });
    }
  };
  const stop = async (recording: Audio.Recording) => {
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    const { sound, status } = await recording.createNewLoadedSoundAsync();

    const audio = {
      sound: sound,
      duration: getDurationFormatted((status as any).durationMillis),
      file: uri,
    };
    return audio;
  };
  const cancel = async () => {
    if (timeout) {
      clearTimeout(timeout);
      if (record) await record.stopAndUnloadAsync();
    }
  };
  const getDurationFormatted = (milliseconds: number) => {
    const seconds = milliseconds / 1000;
    return seconds;
  };
  return { play, start, cancel, pause };
}
