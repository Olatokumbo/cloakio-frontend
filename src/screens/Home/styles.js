import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "../../constants/global";
const styles = StyleSheet.create({
  home: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    padding: 5,
    height: "auto",
  },
  headerContent: {
    margin: 10,
  },
  headerTop: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 50,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  categoryMenu: {
    flexGrow: 0,
    paddingVertical: 5,
  },
  categoryTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginHorizontal: 10,
  },
  explore: {
    height: 170,
    justifyContent: "center",
  },
  exploreText: {
    fontSize: 55,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    zIndex: 3,
    marginLeft: "5%",
  },
  exploreImage: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(55, 65, 81, 0.54)",
    position: "absolute",
    zIndex: 2,
  },
});

export default styles;
