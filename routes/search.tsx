import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function SearchCom({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.searchingContainer}>
        <Text>This is Search page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  searchingContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
