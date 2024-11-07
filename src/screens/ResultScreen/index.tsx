import { SafeAreaView, Text, View } from "react-native";
import styles from "./ResultScreen.styles";
import Button from "../../components/Form/Button";
import { useContext } from "react";
import { useMainContext } from "../../context/MainContext";
import ButtonSecondary from "../../components/Form/ButtonSecondary";

type Props = {
  navigation: any;
};

export default function ResultScreen({ navigation }: Props) {
  const { changePaciente, result } = useMainContext();

  const newButtonHandler = () => {
    changePaciente(null);
    navigation.replace("FirstScreen");
  };

  const recordButtonHandler = () => {
    navigation.replace("RecordScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{result}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Nuevo Paciente" onPressHandler={newButtonHandler} />
        <ButtonSecondary
          title="Volver a grabar"
          onPressHandler={recordButtonHandler}
        />
      </View>
    </SafeAreaView>
  );
}
