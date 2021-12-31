import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../constants/global";
import PosterCard from "./PosterCard";

const PosterRow = ({ title, navigation }) => {
  return (
    <View style={styles.posterRow}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={{
          padding: 5,
        }}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item}
        renderItem={(index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("Service Info")
            }
          >
            <PosterCard />
          </TouchableOpacity>
        )}
        horizontal={true}
      />
    </View>
  );
};

export default PosterRow;

const styles = StyleSheet.create({
  posterRow: {
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginLeft: 7,
  },
});
