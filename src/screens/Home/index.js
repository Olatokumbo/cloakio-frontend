import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";
import Logo from "../../assets/logo.png";
import BG from "../../assets/bg.png";
import SearcBar from "../../components/SearchBar";
import { Categories } from "../../constants/global";
import PosterRow from "../../components/PosterRow";
import styles from "./styles";

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


