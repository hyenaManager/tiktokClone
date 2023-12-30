import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { changeHeaderRouteName } from "../../features/counter/headerNavRoute";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { header_styles } from "./headerStyles";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Search"
>;
// type SearchScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Search"
// >;

// export default function HeaderNavigation({ navigation }: any) {
//   const headerRouteName = useAppSelector(
//     (state) => state.headerRouteName.routeName
//   );
//   const bottomRouteName = useAppSelector(
//     (state) => state.bottomRouteName.routeName
//   );
//   const dispatch = useDispatch();
//   return (
//     <View style={styles.headerContainer}>
//       {/* friend adding button */}
//       {bottomRouteName === "friend" && (
//         <TouchableOpacity style={{ position: "absolute", left: 9, bottom: 2 }}>
//           <Octicons name="person-add" size={30} color="#dadada" />
//         </TouchableOpacity>
//       )}
//       {/* friend header */}
//       {bottomRouteName === "friend" && (
//         <TouchableOpacity
//           style={styles.headerTextContainer}
//           // onPress={() => dispatch(changeHeaderRouteName("following"))}
//         >
//           <Text style={styles.textStyle}>Friend</Text>
//         </TouchableOpacity>
//       )}
//       {/* home headers */}
//       {bottomRouteName === "home" && (
//         <>
//           <TouchableOpacity
//             style={styles.headerTextContainer}
//             onPress={() => dispatch(changeHeaderRouteName("following"))}
//           >
//             <Text style={styles.textStyle}>Following</Text>
//             {headerRouteName === "following" ? (
//               <View
//                 style={{
//                   height: 3,
//                   width: 40,
//                   backgroundColor: "#dadada",
//                   borderRadius: 10,
//                 }}
//               ></View>
//             ) : null}
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.headerTextContainer}
//             onPress={() => dispatch(changeHeaderRouteName("forYou"))}
//           >
//             <Text style={styles.textStyle}>For you</Text>
//             {headerRouteName === "forYou" ? (
//               <View
//                 style={{
//                   height: 4,
//                   width: 60,
//                   backgroundColor: "#dadada",
//                   borderRadius: 10,
//                 }}
//               ></View>
//             ) : null}
//           </TouchableOpacity>
//         </>
//       )}
//       {/* search navigator absolute mode */}
//       <TouchableOpacity
//         onPress={() => navigation.navigate("Search")}
//         style={{ position: "absolute", right: 9, bottom: 2 }}
//       >
//         <AntDesign name="search1" size={30} color="#dadada" />
//       </TouchableOpacity>
//     </View>
//   );
// }
export function HomeHeader() {
  const headerRouteName = useAppSelector(
    (state) => state.headerRouteName.routeName
  );
  const bottomRouteName = useAppSelector(
    (state) => state.bottomRouteName.routeName
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <>
      <View style={header_styles.headerContainer}>
        <TouchableOpacity
          style={header_styles.headerTextContainer}
          onPress={() => dispatch(changeHeaderRouteName("following"))}
        >
          <Text style={header_styles.textStyle}>Following</Text>
          {headerRouteName === "following" ? (
            <View
              style={{
                height: 3,
                width: 40,
                backgroundColor: "#dadada",
                borderRadius: 10,
              }}
            ></View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={header_styles.headerTextContainer}
          onPress={() => dispatch(changeHeaderRouteName("forYou"))}
        >
          <Text style={header_styles.textStyle}>For you</Text>
          {headerRouteName === "forYou" ? (
            <View
              style={{
                height: 4,
                width: 60,
                backgroundColor: "#dadada",
                borderRadius: 10,
              }}
            ></View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={{ position: "absolute", right: 9, bottom: 2 }}
        >
          <AntDesign name="search1" size={30} color="#dadada" />
        </TouchableOpacity>
      </View>
    </>
  );
}
export function FriendHeader() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <>
      <View style={header_styles.headerContainer}>
        <TouchableOpacity style={{ position: "absolute", left: 9, bottom: 2 }}>
          <Octicons name="person-add" size={30} color="#dadada" />
        </TouchableOpacity>
        <TouchableOpacity
          style={header_styles.headerTextContainer}
          // onPress={() => dispatch(changeHeaderRouteName("following"))}
        >
          <Text style={header_styles.textStyle}>Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={{ position: "absolute", right: 9, bottom: 2 }}
        >
          <AntDesign name="search1" size={30} color="#dadada" />
        </TouchableOpacity>
      </View>
    </>
  );
}
