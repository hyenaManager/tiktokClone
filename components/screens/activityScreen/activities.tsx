import { Image, ImageSourcePropType, Text, View } from "react-native";
import { messageBoxStyle } from "../inbox/messageBoxStyle";
import ImageCard from "../../cards/profileCards";
import { neeChan } from "../../../dummyData";
import { Ionicons } from "@expo/vector-icons";

export default function Activity({
  title,
  message,
  image,
}: {
  title: string;
  message: string;
  image: ImageSourcePropType;
}) {
  return (
    <View style={messageBoxStyle.messageBox}>
      <ImageCard imgSource={image}>
        <Ionicons name="heart-circle-sharp" size={23} color="red" />
      </ImageCard>
      <View
        style={{ ...messageBoxStyle.suggestionBoxTexContainer, minWidth: 200 }}
      >
        <Text style={messageBoxStyle.messageBoxText}>{title}</Text>
        <Text style={{ fontSize: 17, color: "gray", textAlign: "left" }}>
          {message}
        </Text>
      </View>
      <Image
        source={neeChan}
        style={{ borderRadius: 7, width: 57, height: 57 }}
      />
    </View>
  );
}
