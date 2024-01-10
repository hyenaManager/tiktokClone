import { Image, ImageSourcePropType, Text, View } from "react-native";
import { messageBoxStyle } from "../inbox/messageBoxStyle";

export default function NewFollowers({
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
      <Image
        source={image}
        style={{
          width: 57,
          height: 57,
          borderRadius: 50,
        }}
      />
      <View style={messageBoxStyle.suggestionBoxTexContainer}>
        <Text style={messageBoxStyle.messageBoxText}>{title}</Text>
        <Text style={{ fontSize: 17, color: "gray", textAlign: "left" }}>
          {message}
        </Text>
      </View>
      <View style={messageBoxStyle.suggestionFollow}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Follow back</Text>
      </View>
    </View>
  );
}
