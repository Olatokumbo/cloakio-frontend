import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Poster from "../assets/poster.jpg";
import { Colors } from "../constants/global";
const DeviceWidth = Dimensions.get("window").width;

const PosterCard = () => {
  return (
    <View style={styles.posterCard}>
      <View style={styles.bg}>
        <Image source={Poster} style={styles.poster} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Professional Graphics Designer</Text>
        <Text style={styles.subtitle}>
          Currently with about 2 years experience in Graphics Design. I am more
          than able to provide quality g...
        </Text>
        <View style={styles.profileInfo}>
          <View style={styles.profile}>
            <Avatar.Text size={30} label="XD" style={styles.avatar} />
            <Text>faithodesola</Text>
          </View>
          <View style={styles.location}>
            <Icon name="map-marker" size={20} color={Colors.primary} />
            <Text style={styles.locationText}>Lagos</Text>
          </View>
        </View>

        <View style={styles.posterInfo}>
          <View style={styles.ratings}>
            <Icon name="star" size={20} color={Colors.secondary} />
            <Text style={styles.ratingText}>3.5</Text>
          </View>
          <View style={styles.posterPrice}>
            <Text style={styles.priceStart}>Starts at</Text>
            <Text style={styles.price}>₦50000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PosterCard;

const styles = StyleSheet.create({
  posterCard: {
    width: DeviceWidth * 0.45,
    height: 330,
    margin: 3,
    flexBasis: '48.5%'
  },
  bg: {
    flex: 1,
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    padding: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    // lineHeight: 20
  },
  subtitle: {
    color: "#969BA3",
    fontSize: 13,
  },
  profileInfo: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 5,
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  locationText: {
    color: Colors.primary,
    fontWeight: "200",
    fontSize: 14,
  },
  posterInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginHorizontal: 3,
    fontWeight: "bold",
    fontSize: 15,
    color: Colors.secondary,
  },
  posterPrice: {
    flexDirection: "row",
  },
  priceStart: {
    marginHorizontal: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
