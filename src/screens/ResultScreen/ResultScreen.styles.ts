import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

const resultScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 64
    ,
    backgroundColor: colors.background,
    paddingHorizontal: 32
  },
  text: {
    color:"#fff",
    fontSize: 32
  },
  buttonsContainer:{
    width: "100%",
    flexDirection: "column",
    gap:32
  }
});

export default resultScreenStyles;