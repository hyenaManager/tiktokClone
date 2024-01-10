import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../../../globalStyle";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function FindSocialFriend() {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.icon}>
          <MaterialIcons name="contacts" size={37} color="#90EE90" />
        </View>
        <Text style={styles.socialName}>Contacts</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.icon}>
          <MaterialIcons name="facebook" size={37} color="#0496C2" />
        </View>
        <Text style={styles.socialName}>Facebook</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.icon}>
          <Ionicons name="arrow-redo-circle" size={37} color="#04BADE" />
        </View>
        <Text style={styles.socialName}>Invite friends</Text>
        <Text
          style={{
            fontSize: 21,
            color: "black",
            fontWeight: "bold",
            textAlign: "right",
            flex: 2,
          }}
        >
          {">"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyle.column_center,
    width: "100%",
    marginBottom: 10,
  },
  itemContainer: {
    ...globalStyle.row_between,
    padding: 8,
    width: "100%",
    marginVertical: 6,
  },
  icon: {
    ...globalStyle.column_center,
    flex: 1,
  },
  button: {
    ...globalStyle.row_center,
    flex: 2,
    padding: 2,
    paddingVertical: 7,
    borderRadius: 7,
    backgroundColor: "red",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
  },
  socialName: {
    flex: 4,
    fontSize: 20,
    color: "black",
    padding: 2,
  },
});
