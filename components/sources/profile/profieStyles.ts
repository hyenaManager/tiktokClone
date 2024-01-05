import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
    profileDetailContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"white"
    },
    profileImageContainer:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center"
    },
    profileImage:{
        borderRadius: 50,
        borderWidth: 3,
        marginHorizontal: 4,
        padding: 2,
        borderColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    profileDetails:{
        display:"flex",
        justifyContent:"center",
        flexDirection:'row',
        alignItems:"center",
        marginVertical:4,
    },
    profileDetailsItem:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        marginHorizontal:8,
    },
    profileContentMainContainer:{
        display:"flex",
        flexDirection:"column",
        width:"100%",
    },
    profileContentNav:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:15,
    },
    profileContenNavItem:{
        paddingVertical:8,
        paddingHorizontal:5,
        borderBottomWidth:2,
        borderColor:"white"
    }
    ,
    profileContentVideo:{
        height:190,
        width:125,
        margin:2,
        objectFit:"cover",
    }
    
})