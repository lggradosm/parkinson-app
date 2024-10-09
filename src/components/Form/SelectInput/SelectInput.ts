import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

const selectInputStyles = StyleSheet.create({
  label: {
    color: "#898989",
    fontSize: 16,
  },
  container: {
    gap: 12,
    position: "relative",
    elevation: 30,
    zIndex: 30
  },
  button:{
    backgroundColor: colors.background_2,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
  },
  textButton:{
    color: "#fff"
  },
  options:{
    backgroundColor: colors.background_2,
    position: "absolute",
    width: "100%",
    top: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    marginTop: 4
  },
  optionItem:{
    height: 50,
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center"
  },
  optionItemText:{
    color: "#fff"
  },
  separatorContainer:{
    paddingHorizontal: 8
  },
  separator:{
    height:1,
    width: "100%",
    backgroundColor: "gray",
    paddingHorizontal: 4
  }
});

export default selectInputStyles;
