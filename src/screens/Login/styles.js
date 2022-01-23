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
    flex: 0.7,
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
    backgroundColor: Colors.primary,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 25,
  },
  input: {
    marginVertical: 7,
    padding: 0,
    flex: 1,
    height: 50,
    justifyContent: "center",
  },
  btnBg: {
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 10,
  },
  btn: {
    alignSelf: "center",
    padding: 23,
    width: "100%",
  },
  textBtn: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  create: {
    color: "#E4E4E4",
    alignSelf: "center",
  },
});

export default styles;
