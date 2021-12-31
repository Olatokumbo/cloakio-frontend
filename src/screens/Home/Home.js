import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";
import Logo from "../../assets/logo.png";
import BG from "../../assets/bg.png";
import SearcBar from "../../components/SearchBar";
import { Categories, Colors } from "../../constants/global";
import PosterRow from "../../components/PosterRow";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            {/* <Icon name="menu" size={30} color="white" /> */}
            <Image source={Logo} style={styles.logo} />
            <Avatar.Text size={24} label="XD" style={styles.avatar} />
          </View>
          <SearcBar />
        </View>
        <FlatList
          style={styles.categoryMenu}
          data={Categories}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.categoryTitle}>{item.title}</Text>
          )}
        />
      </View>
      <ScrollView>
        <View style={styles.explore}>
          <Text style={styles.exploreText}>Explore</Text>
          <View style={styles.overlay}></View>
          <Image source={BG} style={styles.exploreImage} />
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
          }}
        >
          <PosterRow navigation={navigation} title="Graphics & Design" />
          <PosterRow navigation={navigation} title="Technology" />
          <PosterRow navigation={navigation} title="Audio & Music" />
          <PosterRow navigation={navigation} title="Business" />
          <PosterRow navigation={navigation} title="Marketing" />
          <PosterRow navigation={navigation} title="Writing & Editing" />
          <PosterRow navigation={navigation} title="Education & Training" />
          <PosterRow navigation={navigation} title="Music & Communication" />
          <PosterRow navigation={navigation} title="Health" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
