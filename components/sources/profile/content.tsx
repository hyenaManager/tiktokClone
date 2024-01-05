import { FlatList, Image, ScrollView, View } from "react-native";
import { profileStyle } from "./profieStyles";
import { data } from "../../../dummyData";
import ProfileContenNav from "./profileContentNav";

export default function Contents() {
  return (
    <View style={profileStyle.profileContentMainContainer}>
      <ProfileContenNav />
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        {data.map((item, index) => (
          <Image
            style={profileStyle.profileContentVideo}
            key={index}
            source={item.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}
