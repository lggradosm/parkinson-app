import { Image, SafeAreaView, View } from "react-native";
import TextInput from "../../components/Form/TextInput";
import styles from "./FirstScreen.styles";
import SelectInput from "../../components/Form/SelectInput";
import { useEffect, useState } from "react";
import { Paciente } from "../../model/Paciente";
import Button from "../../components/Form/Button";
import useBoolean from "../../hooks/useBoolean";
import { useMainContext } from "../../context/MainContext";

type Props = {
  navigation: any;
};

export default function FirstScreen({ navigation }: Props) {
  const disabledButton = useBoolean(true);
  const { changePaciente } = useMainContext();
  const [paciente, setPaciente] = useState<Paciente>({
    edad: 0,
    nombre: "",
    genero: null,
  });

  const onNombreChange = (text: string) => {
    const filteredText = text.replace(/[^a-zA-Z\s]/g, "");
    setPaciente((prev) => ({ ...prev, nombre: filteredText }));
  };

  const onEdadChange = (text: string) => {
    const filteredText = text.replace(/[^0-9]/g, ""); // Solo permite números
    const value = Number(filteredText);
    if (!isNaN(value)) setPaciente((prev) => ({ ...prev, edad: value }));
  };

  const verifyForm = (): boolean => {
    return (
      paciente.edad > 0 &&
      paciente.edad < 100 &&
      paciente.nombre !== "" &&
      paciente.genero !== null
    );
  };

  const changeGenderSelection = (text: string) => {
    if (text === "Masculino" || text === "Femenino")
      setPaciente((prev) => ({ ...prev, genero: text }));
    else setPaciente((prev) => ({ ...prev, genero: null }));
  };

  const onSubmit = () => {
    changePaciente(paciente);
    if (verifyForm()) navigation.navigate("RecordScreen");
  };

  useEffect(() => {
    if (verifyForm()) disabledButton.desactivate();
    else disabledButton.activate();
  }, [paciente]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.image}
        />
      </View>

      <View>
        <TextInput
          value={paciente.nombre}
          text="Nombre"
          onChange={onNombreChange}
        />
        <View style={styles.formContainer}>
          <View style={{ flex: 1 }}>
            <TextInput
              value={paciente.edad > 0 ? paciente.edad.toString() : ""}
              text="Edad"
              type="numeric"
              onChange={onEdadChange}
            />
          </View>
          <View style={{ width: "60%" }}>
            <SelectInput
              value={paciente.genero}
              onChange={changeGenderSelection}
              text="Sexo"
              list={["Masculino", "Femenino"]}
            />
          </View>
        </View>
        <Button
          title="Siguiente"
          disabled={disabledButton.status}
          onPressHandler={onSubmit}
        />
      </View>
    </SafeAreaView>
  );
}
