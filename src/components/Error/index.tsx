import { useEffect } from "react";
import useBoolean from "../../hooks/useBoolean";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./Error.styles";
type Props = {
  message: string;
  visible: boolean;
  desactive: () => void;
};

export default function Error({ message, visible, desactive }: Props) {
  const TIMEOUT_SECONDS = 5;
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        desactive();
      }, TIMEOUT_SECONDS * 1000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>¡Error!</Text>
        <Text style={styles.p}>{message}</Text>
      </View>
    </View>
  );
}
