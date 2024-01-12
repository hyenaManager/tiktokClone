import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { profileStyle } from "./profieStyles";
import { clips, data, myClips, vd2 } from "../../../dummyData";
import { ProfileVideosScreenNavigationProp } from "../../../types/routeType";
import { useNavigation } from "@react-navigation/native";
//import VideoPlayer from "expo-video-player";

export default function Contents() {
  const navigation: ProfileVideosScreenNavigationProp = useNavigation();
  return (
    <View style={profileStyle.profileContentMainContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        {vd2.map((item, index) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate("ProfileVideos")}
            key={index}
            style={{ margin: 2 }}
          >
            <Video
              source={item.uri}
              resizeMode={ResizeMode.CONTAIN}
              useNativeControls={false}
              style={{ height: 190, width: 124, backgroundColor: "black" }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// {
//    <Image
//             style={profileStyle.profileContentVideo}
//             key={index}
//             source={item.image}
//           />
// }
