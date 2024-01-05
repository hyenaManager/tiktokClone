import { StyleSheet, Text, View } from "react-native";
import { profileStyle } from "./profieStyles";
import { Octicons } from "@expo/vector-icons";

export default function ProfileEditSection() {
  return (
    <View style={profileStyle.profileDetails}>
      <View style={styles.editItem}>
        <Text style={styles.editItemText}>Edit profile</Text>
      </View>
      <View style={styles.editItem}>
        <Text style={styles.editItemText}>Share profile</Text>
      </View>
      <View style={styles.editItem}>
        <Octicons name="person-add" size={20} color={"black"} />
      </View>
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
