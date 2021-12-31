import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import BG from "../../assets/bg.png";
import { Colors } from "../../constants/global";

const Login = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.bg}>
        <ImageBackground
          source={BG}
          resizeMode="cover"
          style={styles.bgImage}
        />
      </View>
      <View style={styles.overlay}></View>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          label="Email"
          mode="flat"
          style={styles.input}
          underlineColorAndroid="transparent"
        />
        <TextInput
          label="Password"
          style={styles.input}
          underlineColorAndroid="transparent"
        />
        <LinearGradient
          colors={["rgb(281, 193, 45)", "rgb(251, 103, 45)"]}
          // colors={["rgba(45,144,216,1)", "rgba(101,7,221,1)"]}
          start={{ x: 1.0, y: 5.0 }}
          style={styles.btnBg}
        >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.textBtn}>Sign in</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.create}>Create an Account Here</Text>
      </View>
    </View>
  );
};

export default Login;

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
    justifyContent:"center"
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
