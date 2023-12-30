import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";

// const defaultImg =
//   "https://firebasestorage.googleapis.com/v0/b/tsnproject-4c406.appspot.com/o/images%2F%F0%9D%90%8E%F0%9D%90%9F%F0%9D%90%9F%F0%9D%90%A2%F0%9D%90%9C%F0%9D%90%A2%F0%9D%90%9A%F0%9D%90%A5%20%F0%9D%90%80%F0%9D%90%AB%F0%9D%90%AD%20-%20%F0%9D%90%89%F0%9D%90%AE%F0%9D%90%A3%F0%9D%90%AE%F0%9D%90%AD%F0%9D%90%AC%F0%9D%90%AE%20%F0%9D%90%8A%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%9E%F0%9D%90%A7.jpg?alt=media&token=8aaf47dd-a1e9-4de4-bebb-a6864bb37e13";
import { data } from "../../../dummyData";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import AsideReaction from "../../asideBar/asideReaction";
import SourceDetail from "../sourceDetail";
import { FriendHeader } from "../../headerNavigation/headerNavigate";
export default function FriendSource() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const itemViewport = useRef("");

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <FriendHeader />
      <Carousel
        ref={carouselRef}
        loop
        width={400}
        height={700}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={800}
        maxScrollDistancePerSwipe={400}
        vertical={true}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
            }}
          >
            <Image source={item.image} style={styles.backgroundImage} />
            <SourceDetail />
            <AsideReaction />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
