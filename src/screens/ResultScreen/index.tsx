import { SafeAreaView, Text, View } from "react-native";
import styles from "./ResultScreen.styles"
import Button from "../../components/Form/Button";
import { useContext } from "react";
import { useMainContext } from "../../context/MainContext";

type Props = {
  navigation: any;
};


export default function ResultScreen({navigation}:Props) {
  const {changePaciente} = useMainContext();

  const newButtonHandler = () => {
    changePaciente(null);
    navigation.replace("FirstScreen")
  }

  const recordButtonHandler = () => {
    navigation.replace("RecordScreen")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>¡Grabacion Guardada!</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Nuevo Paciente" onPressHandler={newButtonHandler} />
        <Button title="Volver a grabar" onPressHandler={recordButtonHandler}/>
      </View>
    </SafeAreaView>
  );
}
