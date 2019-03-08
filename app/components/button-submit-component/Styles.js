import { StyleSheet } from "react-native";
import GLOBALS from "../../utils/Globals";

export default StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F035E0",
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100
  },
  circle: {
    height: GLOBALS.MAGIN,
    width: GLOBALS.MAGIN,
    marginTop: -GLOBALS.MAGIN,
    borderWidth: 1,
    borderColor: "#F035E0",
    borderRadius: 100,
    alignSelf: "center",
    zIndex: 99,
    backgroundColor: "#F035E0"
  },
  text: {
    color: "white",
    backgroundColor: "transparent"
  },
  image: {
    width: 24,
    height: 24
  }
});
