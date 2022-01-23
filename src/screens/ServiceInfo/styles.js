import { StyleSheet } from "react-native";
import { Colors } from "../../constants/global";
const styles = StyleSheet.create({
  serviceInfo: {
    flex: 1,
  },
  profileInfo: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.secondary,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  avatar: {
    marginRight: 5,
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  locationText: {
    marginHorizontal: 5,
  },
  carouselView: { height: "35%", backgroundColor: Colors.primary },
  content: {
    backgroundColor: "#f4f4f4",
  },
  main: {
    margin: 0,
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 2,
    color: Colors.primary,
  },
  price: {
    fontSize: 30,
    fontWeight: "600",
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  ratingText: {
    marginHorizontal: 5,
    color: Colors.primary,
  },
  descTitle: {
    color: Colors.primary,
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "#4f4f4f",
  },
  hireMeBtn: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  textBtn: {
    color: "white",
    alignSelf: "center",
  },
  revTitle: {
    color: Colors.primary,
    fontSize: 19,
    fontWeight: "bold",
    // marginVertical: 5,
  },
});

export default styles;
