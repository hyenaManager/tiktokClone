import { StyleSheet, Text, View } from "react-native";

export default function SourceDetail() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.texts}>@Username .1h ago</Text>
      <Text style={styles.texts}>blah blah.. blah blah</Text>
      <Text style={styles.texts}>@Music</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  texts: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "gray",
    textShadowRadius: 3,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
