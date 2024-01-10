import { Text, View } from "react-native";
import { profileStyle } from "./profieStyles";
import ProfileImage from "./profileImage";
import FollowSection from "./followSection";
import ProfileEditSection from "./editSection";
import ProfileFooter from "./profileDetailFooter";

export default function ProfileDetail() {
  return (
    <View style={profileStyle.profileDetailContainer}>
      <ProfileImage />
      <FollowSection />
      <ProfileEditSection />
      <ProfileFooter />
    </View>
  );
}
