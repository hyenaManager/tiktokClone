import { StyleSheet } from "react-native";

export const authenStyles = StyleSheet.create({
    athenticateBtn:{
        padding:4,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"25px",
        borderRadius:10,
        width:120,
        height:50,
    },
    mainBody:{
        backgroundColor:"black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
    },
    tiktokText:{
        fontSize:90,
        color:"white",
    },
    contentBody:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"column",
        gap:72
    },
    inputContainer:{
        position:"relative",
        display:'flex',
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        padding:2,
        borderBottomWidth:4,
        borderColor:"white",
        gap:7,
        width:300,
    },
    inputTexts:{
        color: "white",
        minWidth: 250,
        fontSize: 22,
        height:50
      }
})