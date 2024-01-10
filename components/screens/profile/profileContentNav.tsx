import { View } from "react-native";
import { profileStyle } from "./profieStyles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function ProfileContenNav() {
  return (
    <View style={profileStyle.profileContentNav}>
      <Ionicons
        name="reorder-four-outline"
        size={24}
        color="black"
        style={{ ...profileStyle.profileContenNavItem, borderColor: "black" }}
      />
      <MaterialIcons
        name="lock-outline"
        size={24}
        color="black"
        style={profileStyle.profileContenNavItem}
      />
      <Octicons
        name="bookmark"
        size={24}
        color="black"
        style={profileStyle.profileContenNavItem}
      />
      <Ionicons
        name="heart-outline"
        size={24}
        color="black"
        style={profileStyle.profileContenNavItem}
      />
    </View>
  );
}
