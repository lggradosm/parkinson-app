import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";


const buttonStyles = StyleSheet.create({
  button:{
    position:"relative",
    height:64,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16
  },
  enabled:{
    backgroundColor: colors.accend,
    color: "#ffff",
  },
  disabled: {
    backgroundColor: "#818181",
    color: "#CCCCC"
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

export default buttonStyles;