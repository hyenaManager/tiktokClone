import { Image, ScrollView, View } from "react-native";
import { ResizeMode } from "expo-av";
import { profileStyle } from "./profieStyles";
import { clips, data } from "../../../dummyData";
import VideoPlayer from "expo-video-player";

export default function Contents() {
  const duplicatedData = [...data, ...data, ...data];
  const duplicatedClip = [...clips, ...clips];
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
        {duplicatedClip.map((item, index) => (
          //   <Image
          //   style={profileStyle.profileContentVideo}
          //   key={index}
          //   source={item.image}
          // />
          <View key={index} style={{ margin: 2 }}>
            <VideoPlayer
              videoProps={{
                shouldPlay: false,
                resizeMode: ResizeMode.COVER,
                source: {
                  uri: item.uri,
                },
              }}
              slider={{
                visible: false,
              }}
              fullscreen={{
                visible: false,
              }}
              style={{ height: 190, width: 124 }}
            />
          </View>
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
