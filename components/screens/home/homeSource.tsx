import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { myClips, vd1 } from "../../../dummyData";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import AsideReaction from "../../asideBar/asideReaction";
import SourceDetail from "../sourceDetail";
import { HomeHeader } from "../../headerNavigation/headerNavigate";

import ExpoPlayer from "../../myVdPlayer";
export default function HomeSource() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleCurrentIdx = (idx: number) => {
    setCurrentIdx(idx);
  };
  // console.log("currentIdx :", currentIdx.current);

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
      <HomeHeader />
      <Carousel
        ref={carouselRef}
        width={400}
        height={700}
        autoPlay={false}
        data={vd1}
        scrollAnimationDuration={800}
        maxScrollDistancePerSwipe={400}
        onSnapToItem={(index) => {
          handleCurrentIdx(index);
          // dispatch(changeIndex(index));
        }}
        loop={false}
        //defaultScrollOffsetValue={{ value: 800 }}
        vertical={true}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <ExpoPlayer uri={item.uri} id={index} idx={currentIdx} mode="mp4" />
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
  },
});

{
  /* <View
style={{
  width: "100%",
  height: "100%",
  flex: 1,
}}
>
<Image source={item.image} style={styles.backgroundImage} />
<SourceDetail />
<AsideReaction />
</View> */
}
