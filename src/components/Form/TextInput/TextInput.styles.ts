import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

const textInputScreen = StyleSheet.create({
  container: {
    width:"100%",
    gap: 12,
  },
  text: {
    fontSize: 16,
  },
  textActive: {
    color: "#fff",
  },
  textInactive: {
    color: "#717171",
  },
  input: {
    height: 50,
    width: "100%",

    borderWidth: 1,
    marginBottom: 40,
    paddingHorizontal: 16,
    color: "#fff",
    borderRadius: 8,

    borderColor: "gray",
  },
  inputActive: {
    backgroundColor: colors.background_2,
  },
  inputInactive: {
    backgroundColor: colors.background,
  },
});

export default textInputScreen;
