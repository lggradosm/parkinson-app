import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

const loadingStyles = StyleSheet.create({
  container:{
    flex:1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 30,
    position: "absolute",
    backgroundColor:"rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignContent: "center"
  },
  loading: {
    backgroundColor: "#fff",
    height: 96,
    margin: 30,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontWeight: "bold",
    fontSize: 24,
  },

});

export default loadingStyles;
