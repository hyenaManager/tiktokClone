import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    row_between:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    row_center:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    row_evenly:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    row_start:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    row_end:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
    },
    column_between:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
    },
    column_center:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    column_evenly:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    column_start:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    column_end:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"flex-end",
    },

})