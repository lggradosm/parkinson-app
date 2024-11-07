import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import useBoolean from "../../hooks/useBoolean";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useMainContext } from "../../context/MainContext";
import styles from "./RecordScreen.styles";
import ButtonSecondary from "../../components/Form/ButtonSecondary";
import RecordingIndicator from "./RecordIndicator";
import Button from "../../components/Form/Button";
import { colors } from "../../styles/globalStyles";
import useRecord from "../../hooks/useRecord";
import CircularProgress from "./CircularProgress";
import DetectorService from "../../services/DetectorService";
import Error from "../../components/Error";
import Instructions from "./Instructions";

type Props = {
  navigation: any;
};

export default function RecordScreen({ navigation }: Props) {
  const COUNTER = 10; // 10 segundos
  const error = useBoolean();
  const isRecording = useBoolean();
  const isPlaying = useBoolean();
  const audioRecord = useRecord();
  const { loading, changeResult } = useMainContext();
  const [counter, setCounter] = useState(COUNTER);
  const [audio, setAudio] = useState<any>(null);
  const [timeout, setTimeOut] = useState<NodeJS.Timeout | null>(null);
  const detectorService = DetectorService();
  const { paciente } = useMainContext();

  const resetCounter = () => {
    setCounter(COUNTER);
  };

  const startHandler = async () => {
    isRecording.activate();
    const audio = await audioRecord.start();
    if (audio) setAudio(audio);
    isRecording.desactivate();
    resetCounter();
  };

  const playHandler = async () => {
    isPlaying.activate();
    await audioRecord.play(audio);
    isPlaying.desactivate();
    resetCounter();
  };

  const pauseHandler = async () => {
    await audioRecord.pause(audio);
    isPlaying.desactivate();
    clearTimeOut();
  };

  const cancelHandler = async () => {
    setAudio(null);
    audioRecord.cancel();
    isRecording.desactivate();
    clearTimeOut();
  };

  const clearTimeOut = () => {
    if (timeout) clearTimeout(timeout);
    resetCounter();
  };

  const detectHandler = async () => {
    if (audio) pauseHandler();
    loading.activate();
    const response = await detectorService.detect(audio.file, paciente);
    changeResult(response?.data.messaged);
    loading.desactivate();
    if (response && response.status) navigation.replace("ResultScreen");
    else error.activate();
  };

  const retryHandler = () => {
    if (isPlaying.status) pauseHandler();
    setAudio(null);
  };

  const indicatorText = () => {
    if (isPlaying.status) return "Reproduciendo";
    if (isRecording.status) return "Grabando";
    return "";
  };

  const isRecordActive = () => {
    return isPlaying.status || isRecording.status;
  };

  const activateCounter = () => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev === 1) {
          clearInterval(timer);
        }
        return prev - 1;
      });
    }, 1000);
    setTimeOut(timer);
    return () => {
      clearInterval(timer);
    };
  };

  useEffect(() => {
    if (isRecordActive()) activateCounter();
  }, [isPlaying.status, isRecording.status]);

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={[styles.container]}>
        {isPlaying.status && (
          <View style={{ flex: 1, height: 64, width: "100%" }}>
            {isPlaying.status && (
              <ButtonSecondary
                title={"Detener reproducción"}
                onPressHandler={pauseHandler}
              />
            )}
          </View>
        )}
        <View style={{ paddingHorizontal: 32 }}>
          <View style={{ minHeight: 32, marginBottom: 54 }}>
            {isRecordActive() && <RecordingIndicator text={indicatorText()} />}
          </View>
          <TouchableOpacity
            disabled={isRecordActive()}
            onPress={audio ? playHandler : startHandler}
            activeOpacity={0.6}
            style={styles.button}
          >
            <View style={styles.buttonShadow}>
              {isRecordActive() ? (
                <Text style={styles.counter}>{counter}</Text>
              ) : (
                <Text style={styles.buttonText}>
                  {audio ? "Reproducir" : "Iniciar"}
                </Text>
              )}
            </View>
            {isRecordActive() && (
              <View style={styles.progress}>
                <CircularProgress
                  active={isRecordActive()}
                  size={320}
                  strokeWidth={14}
                  color={colors.accend}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
        {!isPlaying.status && (
          <View style={{ width: "100%" }}>
            {isRecording.status && (
              <View style={[styles.fullWidth]}>
                <ButtonSecondary
                  onPressHandler={cancelHandler}
                  title="Detener grabación"
                />
              </View>
            )}
            {audio && (
              <View style={styles.bButtons}>
                <Button
                  disabled={loading.status}
                  title="Realizar prueba"
                  onPressHandler={detectHandler}
                />
                <ButtonSecondary
                  title="Volver a grabar"
                  onPressHandler={retryHandler}
                />
              </View>
            )}
          </View>
        )}
      </View>

      <Instructions />
      {loading.status && <Loading />}
      {error.status && (
        <Error
          visible={error.status}
          desactive={error.desactivate}
          message="Problemas con el servidor"
        />
      )}
    </SafeAreaView>
  );
}
