import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import BG from "../../assets/bg.png";

import { useSelector, useDispatch } from "react-redux";
import { startSignin } from "../../redux/actions/auth";
import styles from "./styles";

const Login = ({ navigation }) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    try {
      await dispatch(startSignin({ email, password }));
      navigation.navigate("Home");
    } catch (error) {
      alert(error);
    }

    // try {
    //   const data = await
    //   dispatch({ type: actionTypes.SIGNIN_SUCCESS }, ...data);
    // } catch (error) {
    //   dispatch({ type: actionTypes.SIGNIN_FAILED, error });
    //   console.log(state);
    //   alert(error);
    // }
    // try {
    //   const data = await auth.signInWithEmailAndPassword(email, password);
    //   dispatch({ type: actionTypes.SIGNIN_SUCCESS, ...data });
    //   // navigation.navigate("Home");
    //   console.log(state);
    // } catch (err) {
    //   alert(err);

    //   dispatch({ type: actionTypes.SIGNIN_FAILED, err });
    //   console.log(state);
    // }
  };
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
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
        <TextInput
          label="Password"
          mode="flat"
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
        <LinearGradient
          colors={["rgb(281, 193, 45)", "rgb(251, 103, 45)"]}
          // colors={["rgba(45,144,216,1)", "rgba(101,7,221,1)"]}
          start={{ x: 1.0, y: 5.0 }}
          style={styles.btnBg}
        >
          <TouchableOpacity style={styles.btn} onPress={signin}>
            <Text style={styles.textBtn}>Sign in</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.create}>Create an Account Here</Text>
      </View>
    </View>
  );
};

export default Login;
