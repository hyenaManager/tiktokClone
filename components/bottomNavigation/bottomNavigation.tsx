import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { changeBottomRouteName } from "../../features/counter/bottomNavRoute";

type Navigations = {
  bottomNavRoute: "home" | "friend";
};

export default function BottomNavigation() {
  const bottomRouteName = useAppSelector(
    (state) => state.bottomRouteName.routeName
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => dispatch(changeBottomRouteName("home"))}
        >
          <Entypo
            name="home"
            size={23}
            color={bottomRouteName === "home" ? "white" : "gray"}
          />
          <Text style={styles.contentItem}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* <AntDesign name="search1" size={23} color="gray" /> */}
        <TouchableOpacity
          onPress={() => dispatch(changeBottomRouteName("friend"))}
        >
          <Ionicons
            name="people"
            size={23}
            color={bottomRouteName === "friend" ? "white" : "gray"}
          />
          <Text style={styles.contentItem}>friends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.add}>
        <Ionicons name="ios-add" size={23} color="black" />
      </View>
      <View style={styles.content}>
        <Ionicons name="chatbubble-ellipses-outline" size={23} color="gray" />
        <Text style={styles.contentItem}>Inbox</Text>
      </View>
      <View style={styles.content}>
        <Octicons name="person" size={23} color="gray" />
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
    backgroundColor: "black",
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
    marginTop: 2,
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
