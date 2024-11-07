import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

const buttonSecondaryStyles = StyleSheet.create({
  button:{
    height:64,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: colors.background_2
  },
  enabled:{
  },
  disabled: {
    backgroundColor: "#818181",
  },
  textDisabled: {
    color: "#4a4a4a"
  },
  textEnabled: {
    color: "#fff"
  },
  textButton:{
    fontSize: 16
  }
});

export default buttonSecondaryStyles;