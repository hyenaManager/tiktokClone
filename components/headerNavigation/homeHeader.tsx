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
