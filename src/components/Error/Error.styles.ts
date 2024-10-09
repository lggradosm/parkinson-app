import { StyleSheet } from "react-native";

const errorStyles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1, 
    top: 0,
    bottom:0,
    left: 0,
    right:0 ,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  textContainer: {
    backgroundColor: "#fff",
    width: 300,
    height: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 16,
    gap: 4
  },
  text: {
    color: "#FF4C4C",
    fontSize: 36,
    fontWeight: "bold"
  },
  p:{
    fontSize: 20,
    textAlign: "center"
  }
});

export default errorStyles;
