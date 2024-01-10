import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageCard from "../../cards/profileCards";
import { neeChan } from "../../../dummyData";
import { globalStyle } from "../../../globalStyle";
export default function EditFiles() {
  return (
    <View style={{ ...globalStyle.row_evenly, width: "100%" }}>
      <View style={{ ...globalStyle.column_center, marginVertical: 20 }}>
        <ImageCard
          iconBg={"rgba(0,0,0,0.5)"}
          imgSource={neeChan}
          iconPositionB={32}
          imageWH={90}
          iconPositionR={32}
        >
          <Ionicons name="camera-outline" size={29} color="white" />
        </ImageCard>
        <Text style={{ marginVertical: 10, color: "gray", fontSize: 18 }}>
          Change photo
        </Text>
      </View>
      <View style={{ ...globalStyle.column_center, marginVertical: 20 }}>
        <ImageCard
          iconBg={"rgba(0,0,0,0.5)"}
          imgSource={neeChan}
          iconPositionB={32}
          imageWH={90}
          iconPositionR={32}
        >
          <Ionicons name="videocam-outline" size={29} color="white" />
        </ImageCard>
        <Text style={{ marginVertical: 10, color: "gray", fontSize: 18 }}>
          Change video
        </Text>
      </View>
    </View>
  );
}
