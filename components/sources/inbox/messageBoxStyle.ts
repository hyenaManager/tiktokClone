import { StyleSheet } from "react-native";

export const messageBoxStyle = StyleSheet.create({
    mainContainer: {
      display: "flex",
      backgroundColor: "white",
      justifyContent: "flex-start",
      overflow:"scroll"
    },
    storyProfileContainer: {
      width: 78,
      height: 78,
      borderRadius: 50,
      borderWidth: 3,
      marginHorizontal: 4,
      padding: 2,
      borderColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    storyContent: {
      width: 78,
      height: 78,
      borderRadius: 50,
      borderWidth: 3,
      marginHorizontal: 4,
      padding: 2,
      borderColor: "cyan",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    messageBox: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      marginHorizontal: 7,
      marginVertical: 7,
      alignItems: "center",
    },
    messageContainer: {
      width: "100%",
      padding: 7,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    suggestionFollow:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:12,
        padding:8,
        borderRadius:7,
        backgroundColor:"#f01e2c"
    }
    ,
    messageBoxText: {
      fontWeight: "bold",
      fontSize: 21,
      color: "black",
      textAlign: "left",
    },
    messageBoxTextContainer: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      minWidth: 250,
    },
    suggestionBoxTexContainer: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        minWidth: 100,
      },
    suggestionHeader:{
        display:"flex",
        justifyContent:"flex-start",
        flexDirection:"row",
        paddingVertical:10,
        alignItems:"center"
    },
    suggestionsContainer: { borderWidth: 2, borderColor: "red", width: "100%" },
  });
  