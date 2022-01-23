import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Avatar } from "react-native-paper";
import CarouselItem from "../../components/CarouselItem";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/global";
import PosterRow from "../../components/PosterRow";
import ReviewCard from "../../components/ReviewCard";
import styles from "./styles";

const ServiceInfo = () => {
  const windowWidth = Dimensions.get("window").width;
  const data = [1, 2, 3, 4];
  return (
    <View style={styles.serviceInfo}>
      <View style={styles.carouselView}>
        <Carousel
          data={data}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={CarouselItem}
          activeAnimationType="decay"
          style={{ backgroundColor: Colors.primary }}
        />
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.ratings}>
          <FontAwesome name="star" color={Colors.primary} size={25} />
          <Text style={styles.ratingText}>3.5</Text>
        </View>
        <View style={styles.profile}>
          <Avatar.Text
            size={30}
            color={Colors.primary}
            style={{ color: "red" }}
            label="XD"
            style={styles.avatar}
          />
          <Text style={styles.profileText}>faithodesola</Text>
        </View>
        <View style={styles.location}>
          <FontAwesome name="map-marker" color={Colors.primary} size={25} />
          <Text style={styles.locationText}>Lagos</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.main}>
          <Text style={styles.title}>
            The Best Professional Graphics Designer in the World
          </Text>
          <Text style={styles.price}>₦50000*</Text>
          <View>
            <Text style={styles.descTitle}>Description</Text>
            <Text style={styles.subtitle}>
              Currently with about 2 years experience in Graphics Design. I am
              more than able to provide quality graphics design service to you.
              Check out some of my works in the description Also please feel
              free to contact me regarding any concerns or ideas that you have
              in mind. Thanks
            </Text>
          </View>
          <TouchableOpacity style={styles.hireMeBtn}>
            <Text style={styles.textBtn}>Hire Me</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.revTitle}>Reviews</Text>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </View>
        </View>
        <PosterRow title="Recommendation" />
      </ScrollView>
    </View>
  );
};

export default ServiceInfo;
