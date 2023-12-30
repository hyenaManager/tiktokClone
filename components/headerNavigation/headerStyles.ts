import { StyleSheet } from "react-native";


export const header_styles = StyleSheet.create({
    headerContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      position: "absolute",
      alignItems: "center",
      top: 60,
      right: 0,
      left: 0,
      zIndex: 50,
      minHeight: 40,
    },
    header: {
      fontSize: 24,
      padding: 3,
      paddingHorizontal: 4,
      color: "#fdfcfc",
      marginHorizontal: 20,
    },
    headerTextContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    textStyle: {
      fontSize: 24,
      padding: 3,
      paddingHorizontal: 1,
      color: "#fdfcfc",
      marginHorizontal: 15,
      borderColor: "white",
      textShadowColor: "gray",
      textShadowRadius: 3,
      textShadowOffset: {
        width: 1,
        height: 1,
      },
    },
  });
  