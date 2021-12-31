import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../constants/global";
const ReviewCard = () => {
  return (
    <View style={styles.reviewCard}>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome name="star" color={Colors.primary} size={20} />
        <FontAwesome name="star" color={Colors.primary} size={20} />
        <FontAwesome name="star" color={Colors.primary} size={20} />
        <FontAwesome name="star" color={Colors.primary} size={20} />
      </View>
      <View style={styles.header}>
        <Text>david0 | </Text>
        <Text style={styles.date}>18 August 2021 </Text>
      </View>
      <Text style={styles.title}>Pretty Great</Text>
      <Text style={styles.body}>
        Currently with about 2 years experience in Graphics Design. I am more
        than able to provide quality graphics design service to you. Check out
        some of my works in the description Also please feel free to contact me
        regarding any concerns or ideas that you have in mind. Thanks
      </Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  reviewCard: {
    marginVertical: 5,
    paddingVertical: 8,
    borderColor: "#F9F9F9",
    // borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    color: "#969BA3",
  },
  body: {
    color: "#4f4f4f",
  },
});
