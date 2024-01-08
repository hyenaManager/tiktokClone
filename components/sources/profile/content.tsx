import { Image, ScrollView, View } from "react-native";
import { profileStyle } from "./profieStyles";
import { data } from "../../../dummyData";

export default function Contents() {
  const duplicatedData = [...data, ...data, ...data];
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
        {duplicatedData.map((item, index) => (
          <Image
            style={profileStyle.profileContentVideo}
            key={index}
            source={item.image}
          />
        ))}
      </View>
    </View>
  );
}
