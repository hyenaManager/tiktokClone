import { Image, Text, View } from "react-native";
import { profileStyle } from "./profieStyles";
import { messageBoxStyle } from "../inbox/messageBoxStyle";
import { neeChan } from "../../../dummyData";
import { Entypo } from "@expo/vector-icons";

export default function ProfileImage() {
  return (
    <View style={profileStyle.profileImageContainer}>
      <View style={profileStyle.profileImage}>
        <Image
          source={neeChan}
          style={{
            width: 95,
            height: 95,
            padding: 3,
            borderRadius: 50,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 1,
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "cyan",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "white",
            }}
          >
            <Entypo name="plus" size={23} color="white" />
          </View>
        </View>
      </View>
      <Text style={{ fontWeight: "400" }}>@hyenanel</Text>
    </View>
  );
}
