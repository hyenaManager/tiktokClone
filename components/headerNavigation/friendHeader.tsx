import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
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
