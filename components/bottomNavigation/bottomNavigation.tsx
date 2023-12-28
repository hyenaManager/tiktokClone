import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function BottomNavigation() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <Entypo name="home" size={21} color={"white"} />
        <Text style={styles.contentItem}>Home</Text>
      </View>
      <View style={styles.content}>
        {/* <AntDesign name="search1" size={21} color="white" /> */}
        <Ionicons name="people" size={21} color="white" />
        <Text style={styles.contentItem}>friends</Text>
      </View>
      <View style={styles.add}>
        <Ionicons name="ios-add" size={21} color="black" />
      </View>
      <View style={styles.content}>
        <Ionicons name="chatbubble-ellipses-outline" size={21} color="white" />
        <Text style={styles.contentItem}>Inbox</Text>
      </View>
      <View style={styles.content}>
        <Octicons name="person" size={21} color="white" />
        <Text style={styles.contentItem}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    zIndex: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
    backgroundColor: "#2B1A20",
    paddingBottom: 3,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  contentItem: {
    marginTop: 5,
    fontSize: 10,
    color: "white",
  },
  add: {
    display: "flex",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
});
