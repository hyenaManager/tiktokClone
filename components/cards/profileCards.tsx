import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { profileStyle } from "../sources/profile/profieStyles";
import { neeChan } from "../../dummyData";
import React from "react";

type ProfileImgCard = {
  iconPositionR?: number | null;
  iconPositionB?: number | null;
  iconWH?: number | null;
  imageWH?: number | null;
  children?: React.ReactNode | null;
  imgSource: ImageSourcePropType;
};

const ImageCard: React.FC<ProfileImgCard> = ({
  iconPositionR,
  iconPositionB,
  imgSource,
  imageWH,
  children,
}: ProfileImgCard) => {
  return (
    <View style={profileStyle.profileImageContainer}>
      <View style={{ ...profileStyle.profileImage, borderWidth: 0 }}>
        <Image
          source={imgSource}
          style={{
            width: imageWH ? imageWH : 57,
            height: imageWH ? imageWH : 57,
            padding: 3,
            borderRadius: 50,
          }}
        />
        {children && (
          <View
            style={{
              position: "absolute",
              bottom: iconPositionB ? iconPositionB : 0,
              right: iconPositionR ? iconPositionR : 1,
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "white",
              }}
            >
              {children}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 95,
    height: 95,
    padding: 3,
    borderRadius: 50,
  },
});
export default ImageCard;
