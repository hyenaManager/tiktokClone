import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { Easing, Keyframe } from "react-native-reanimated";

export default function CommentModal({ hide }: { hide: () => void }) {
  const enteringAnimation = new Keyframe({
    from: {
      // originY: 0,
      transform: [{ translateY: 200 }],
    },
    to: {
      // originY: 300,
      transform: [{ translateY: 0 }],
      easing: Easing.quad,
    },
  }).duration(400);

  const exitingAnimation = new Keyframe({
    from: {
      //opacity: 1,
      transform: [{ translateY: 0 }],
    },
    to: {
      //opacity: 0.5,
      transform: [{ translateY: 200 }],
      easing: Easing.exp,
    },
  }).duration(500);
  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={styles.contenContainer}
        entering={enteringAnimation}
        exiting={exitingAnimation}
      >
        <TouchableOpacity onPress={hide}>
          <Text style={{ color: "black", width: "100%" }}>Back</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
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
  },
  contenContainer: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
});
