import { Pressable, SafeAreaView, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/global";
import Poster from "../assets/poster.jpg";

const CarouselItem = ({ item, index }) => {
  return (
    <Pressable
      style={styles.main}
      onPress={() => alert("Image description:" + item.description)}
    >
      {/* <SafeAreaView> */}
        <Image source={Poster} style={styles.image} />
      {/* </SafeAreaView> */}
    </Pressable>
  );
};
export default CarouselItem;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
