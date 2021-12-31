import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const SearcBar = () => {
  return (
    <View style={styles.search}>
      <Button
        mode="contained"
        style={styles.searchBtn}
        onPress={() => console.log("Pressed")}
      >
        <Icon name="magnify" size={35} color="#323232" />
      </Button>
      <TextInput placeholder="Search Services" style={styles.searchInput} />
    </View>
  );
};

export default SearcBar;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
  },
  searchInput: {
    flex: 1,
    height: 50,
    justifyContent: "center",
  },
  searchBtn: {
    // height: "100%",
    justifyContent: "center",
    backgroundColor: "#FBC12D",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});
