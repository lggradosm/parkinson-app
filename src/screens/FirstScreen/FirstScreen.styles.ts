import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

const firstScreenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    
    height: "100%",
    backgroundColor: colors.background,
    flexDirection:"column",
    justifyContent: "center",
    gap: 32,
    paddingVertical: 96,

  },
  formContainer: {
   
    flexDirection: "row",
    gap: 32,
  },
  imageContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32
  },
  image:{
    width:300,
    height: 200,
    resizeMode: 'contain'
  }
});

export default firstScreenStyles;
