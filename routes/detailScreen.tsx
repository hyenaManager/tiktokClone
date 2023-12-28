import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderNavigation from "../components/headerNavigation/headerNavigate";

export function DetailScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <HeaderNavigation navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B1A20",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});
