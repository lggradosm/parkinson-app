import { Text, View } from "react-native";
import { colors } from "../../../styles/globalStyles";

export default function Instructions() {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: colors.background,
        padding: 16,
      }}
    >
      <View
        style={{
          backgroundColor: colors.background_2,
          padding: 16,
          borderWidth: 1,
          borderColor: "#fb995f",
          borderStyle: "dashed",
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "#efefef", fontSize: 18 }}>INSTRUCCIONES:</Text>
        <Text style={{ color: "#c9c9c9" }}>
          Pulsa el botón Iniciar y pronuncia la vocal "A" hasta que el contador
          llegue a 0.
        </Text>
      </View>
    </View>
  );
}
