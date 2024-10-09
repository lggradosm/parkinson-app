import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";


const recordingIndicatorStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4
  },
  text: {
    color:"#fff",
    fontSize: 24
  },
  redCircle: {
    backgroundColor: "#A41414",
    padding:4,
    height: "60%",
    width: "60%",
    borderRadius: 100
  },
  shadowCircle: {
    backgroundColor: colors.backgroundShadowGrey,
    borderRadius: 100,
    width: 32,
    height:32,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default recordingIndicatorStyles;