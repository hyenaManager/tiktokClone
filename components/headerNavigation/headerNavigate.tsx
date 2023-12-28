import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeaderNavigation({ navigation }: any) {
  const route = useRoute();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text
          style={{
            fontSize: 24,
            padding: 3,
            paddingHorizontal: 4,
            color: "#fdfcfc",
            marginHorizontal: 20,
            borderBottomWidth: route.name === "Home" ? 0 : 2,
            borderColor: "white",
          }}
        >
          Following
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            fontSize: 24,
            padding: 3,
            paddingHorizontal: 4,
            color: "#fdfcfc",
            marginHorizontal: 20,
            borderBottomWidth: route.name === "Detail" ? 0 : 2,
            borderColor: "white",
          }}
        >
          For you
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    top: 60,
    right: 0,
    left: 0,
    zIndex: 40,
  },
  header: {
    fontSize: 24,
    padding: 3,
    paddingHorizontal: 4,
    color: "#fdfcfc",
    marginHorizontal: 20,
  },
});
