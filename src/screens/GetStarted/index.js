import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import BG from "../../assets/bg.png";
import styles from "./styles";
const GetStarted = ({ navigation }) => {
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
        <View style={styles.headerText}>
          <Text style={styles.headerText1}>Hire us</Text>
          <Text style={styles.headerText2}>&lt;Freelancers/&gt;</Text>
        </View>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textBtn}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;
