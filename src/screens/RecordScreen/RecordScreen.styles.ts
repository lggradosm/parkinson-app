import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

const recordScreenStyles = StyleSheet.create({
  safearea: {
    flex:1,
    height: "100%"
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
    paddingVertical: 96,
    paddingHorizontal: 32,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  justifyCenter: {
    justifyContent: "center",
  },

  fullWidth: {
    width: "100%",
  },
  buttonShadow: {
    backgroundColor: colors.backgroundGrey,
    height: "100%",
    width: "100%",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  button:{
    position: "relative",
    padding: 12,
    height: "auto",
    width: "100%",
    aspectRatio: 1,
    backgroundColor: colors.backgroundShadowGrey,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20
  },
  buttonText:{
    color: "#fff",
    fontSize: 36
    },
  counter:{
    color: "#fff",
    fontSize: 86
    },
  progress: {
    position: "absolute"
  },
  bButtons:{
    width: "100%",
    gap: 32
  },
});

export default recordScreenStyles;
