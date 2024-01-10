import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { profileStyle } from "./profieStyles";
import { Octicons } from "@expo/vector-icons";
import {
  AddNewFriendScreenNavigationProp,
  EditProfileScreenNavigationProp,
} from "../../../types/routeType";
import { useNavigation } from "@react-navigation/native";

export default function ProfileEditSection() {
  const navigation: EditProfileScreenNavigationProp &
    AddNewFriendScreenNavigationProp = useNavigation();
  return (
    <View style={profileStyle.profileDetails}>
      <TouchableOpacity
        onPress={() => navigation.navigate("EditProfile")}
        style={styles.editItem}
      >
        <Text style={styles.editItemText}>Edit profile</Text>
      </TouchableOpacity>
      <View style={styles.editItem}>
        <Text style={styles.editItemText}>Share profile</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddNewFriend")}
        style={styles.editItem}
      >
        <Octicons name="person-add" size={20} color={"black"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  editItemText: {
    fontWeight: "500",
    fontSize: 19,
    textAlign: "center",
    marginVertical: 6,
  },
  editItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 9,
    height: 40,
    marginHorizontal: 5,
    color: "black",
    borderRadius: 7,
    backgroundColor: "#f2f3f4",
  },
});
