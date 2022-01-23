import { StyleSheet } from "react-native";
import { Colors } from "../../constants/global";
const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "relative",
  },
  bg: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.10)",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  content: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  headerText: {
    alignSelf: "center",
  },
  headerText1: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors,
  },
  headerText2: {
    fontSize: 50,
    fontWeight: "bold",
    color: Colors.primary,
  },
  subtitle: {
    textAlign: "center",
    color: "grey",
    marginVertical: 10,
  },
  btn: {
    alignSelf: "center",
    padding: 23,
    backgroundColor: Colors.primary,
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
  },
  textBtn: {
    color: "white",
    textAlign: "center",
  },
});

export default styles;
