import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CommentModal from "../modals/commentModal";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, showComment } from "../../features/counter/commentSlice";
import { useAppSelector } from "../../hooks";

export default function AsideReaction() {
  const dispatch = useDispatch();
  const show_comment = useAppSelector((state) => state.comment.status);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <Ionicons name="md-person-circle-outline" size={37} color="white" />
      </View>
      <View style={styles.content}>
        <Ionicons name="ios-heart" size={35} color="white" />
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => dispatch(changeStatus())}>
          <FontAwesome name="commenting" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FontAwesome5 name="share" size={35} color="white" />
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
    paddingVertical: 10,
    zIndex: 20,
    paddingBottom: 60,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 16,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
