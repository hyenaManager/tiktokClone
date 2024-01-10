import { ScrollView } from "react-native";
import ProfileDetail from "./profileDetail";
import ContentTab from "./contentStack";
//import Carousel from "react-native-reanimated-carousel";
import { data } from "../../../dummyData";
import Contents from "./content";

export default function Profile() {
  return (
    <ScrollView
      contentContainerStyle={{
        width: "100%",
        backgroundColor: "white",
        overflow: "visible",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ProfileDetail />
      <ContentTab />
      {/* <Carousel
        loop
        width={400}
        height={700}
        autoPlay={false}
        data={[...data, ...data, ...data, ...data]}
        scrollAnimationDuration={800}
        vertical={false}
        maxScrollDistancePerSwipe={400}
        renderItem={({ item, index }) => <Contents key={index} />}
        style={{ width: "100%" }}
      /> */}
    </ScrollView>
  );
}
