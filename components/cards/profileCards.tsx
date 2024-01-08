import { Image, ImageSourcePropType, View } from "react-native";
import { profileStyle } from "../sources/profile/profieStyles";
import React from "react";

type ProfileImgCard = {
  iconPositionR?: number | null;
  iconPositionB?: number | null;
  iconWH?: number | null;
  imageWH?: number | null;
  children?: React.ReactNode | null;
  imgSource: ImageSourcePropType;
  iconBg?: string | null;
};

const ImageCard: React.FC<ProfileImgCard> = ({
  iconPositionR,
  iconPositionB,
  imgSource,
  imageWH,
  children,
  iconBg,
}: ProfileImgCard) => {
  return (
    <View style={profileStyle.profileImageContainer}>
      <View style={{ ...profileStyle.profileImage }}>
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
                backgroundColor: iconBg ? iconBg : "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                borderWidth: 2,
                borderColor: iconBg ? iconBg : "white",
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

export default ImageCard;
