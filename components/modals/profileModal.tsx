import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { Easing, Keyframe } from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileModal({ hide }: { hide: () => void }) {
  const enteringAnimation = new Keyframe({
    from: {
      // originY: 0,
      transform: [{ translateY: 200 }],
    },
    to: {
      // originY: 300,
      transform: [{ translateY: 0 }],
      // easing: Easing.quad,
    },
  }).duration(400);

  const exitingAnimation = new Keyframe({
    from: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
    to: {
      opacity: 1,
      transform: [{ translateY: 200 }],
      // easing: Easing.exp,
    },
  }).duration(400);
  return (
    <TouchableOpacity onPress={hide} style={styles.mainContainer}>
      <Animated.View
        style={styles.contentContainer}
        entering={enteringAnimation}
        exiting={exitingAnimation}
      >
        <TouchableOpacity
          style={styles.content}
          onPress={(e) => {
            e.stopPropagation();
            hide();
          }}
        >
          <Entypo name="tools" size={21} color="black" />
          <Text style={styles.contentText}> Creator tools</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={(e) => {
            e.stopPropagation();
            hide();
          }}
        >
          <Ionicons name="wallet-outline" size={21} color="black" />
          <Text style={styles.contentText}>Balance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={(e) => {
            e.stopPropagation();
            hide();
          }}
        >
          <Ionicons name="qr-code-outline" size={21} color="black" />
          <Text style={styles.contentText}>My Qr code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={(e) => {
            e.stopPropagation();
            hide();
          }}
        >
          <Ionicons name="settings-outline" size={21} color="black" />
          <Text style={styles.contentText}>Settings and privacy</Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    zIndex: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    flexDirection: "column",
    padding: 12,
    paddingVertical: 17,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginVertical: 6,
  },
  contentText: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 21,
    color: "black",
  },
});
