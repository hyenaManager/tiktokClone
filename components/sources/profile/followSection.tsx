import { StyleSheet, Text, View } from "react-native";
import { profileStyle } from "./profieStyles";

export default function FollowSection() {
  return (
    <View style={profileStyle.profileDetails}>
      <View style={profileStyle.profileDetailsItem}>
        <Text style={styles.fontNumber}>584</Text>
        <Text style={styles.fontText}>Following</Text>
      </View>
      <View style={profileStyle.profileDetailsItem}>
        <Text style={styles.fontNumber}>7</Text>
        <Text style={styles.fontText}>Followers</Text>
      </View>
      <View style={profileStyle.profileDetailsItem}>
        <Text style={styles.fontNumber}>25</Text>
        <Text style={styles.fontText}>Likes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fontNumber: {
    color: "black",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 5,
  },
  fontText: { color: "gray", fontSize: 13, textAlign: "center" },
});
