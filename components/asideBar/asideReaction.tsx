import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../features/counter/commentSlice";
import { useAppSelector } from "../../hooks";
import { data } from "../../dummyData";
import ProfileAdd from "./profile";

export default function AsideReaction() {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <ProfileAdd />
      <View style={styles.content}>
        <Ionicons name="ios-heart" size={35} color="white" />
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => dispatch(changeStatus())}>
          <FontAwesome name="commenting" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Ionicons name="arrow-redo-sharp" size={35} color="white" />
      </View>
      <View style={styles.content}>
        <Feather name="circle" size={35} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 0,
    top: 0,
    right: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
    zIndex: 20,
    paddingBottom: 10,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
