import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import BottomNavigation from "../components/bottomNavigation/bottomNavigation";
import HomeSource from "../components/source/homeSource";
import HeaderNavigation from "../components/headerNavigation/headerNavigate";
import CommentModal from "../components/modals/commentModal";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/counter/commentSlice";

export function HomeScreen({ navigation }: any) {
  // ImmersiveMode.fullLayout(true);
  const show_comment = useAppSelector((state) => state.comment.status);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <HeaderNavigation navigation={navigation} />
      <HomeSource />
      <BottomNavigation />
      {show_comment ? (
        <CommentModal hide={() => dispatch(changeStatus())} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  back: {
    backgroundColor: "red",
    color: "white",
    position: "absolute",
    top: 70,
    right: 0,
    left: 0,
    fontSize: 40,
    zIndex: 60,
    width: 60,
  },
});
