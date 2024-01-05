import React from "react";
import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { Easing, Keyframe } from "react-native-reanimated";
import { globalStyle } from "../../globalStyle";

type ModalProps = {
  hide: () => void;
  height?: null | DimensionValue;
  children: React.ReactNode;
  headerTitle?: string | null;
};

export default function MyModal({
  hide,
  children,
  height,
  headerTitle,
}: ModalProps) {
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
      //opacity: 1,
      transform: [{ translateY: 0 }],
    },
    to: {
      //opacity: 0.5,
      transform: [{ translateY: 400 }],
      // easing: Easing.exp,
    },
  }).duration(400);
  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={{
          ...styles.contenContainer,
          height: height || "auto",
          maxHeight: "90%",
        }}
        entering={enteringAnimation}
        exiting={exitingAnimation}
      >
        <View
          style={{
            ...globalStyle.row_between,
            padding: 15,
            width: "100%",
          }}
        >
          <View></View>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{headerTitle}</Text>
          <TouchableOpacity onPress={hide}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>X</Text>
          </TouchableOpacity>
        </View>
        {children}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contenContainer: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
});
