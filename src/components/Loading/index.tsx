import { Text, View } from "react-native";
import styles from "./Loading.styles";

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Guardando...</Text>
      </View>
    </View>
  );
}
