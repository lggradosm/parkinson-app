import {
  TextInput as Input,
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  View,
} from "react-native";
import styles from "./TextInput.styles";
import { useState } from "react";
import useBoolean from "../../../hooks/useBoolean";

type Props = {
  text: string;
  type?: "default" | "numeric";
  onChange: (text: string) => void;
  value: string |undefined
};

export default function TextInput({ text, type = "default", onChange,value }: Props) {
  const focus = useBoolean();

  return (
    <View style={styles.container}>
      <Text
        style={
          (styles.text, focus.status ? styles.textActive : styles.textInactive)
        }
      >
        {text}
      </Text>
      <Input
        value={value}
        onChangeText={(text) => onChange(text)}
        style={[
          styles.input,
          focus.status ? styles.inputActive : styles.inputInactive,
        ]}
        keyboardType={type}
        onFocus={focus.activate}
        onBlur={focus.desactivate}
      />
    </View>
  );
}
