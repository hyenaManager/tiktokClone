import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeHeaderRouteName } from "../../features/counter/headerNavRoute";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { changeNewChatModalStatus } from "../../features/counter/profileModalSlice";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Search"
>;

export function InboxHeader() {
  const navigation: HomeScreenNavigationProp = useNavigation();
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => dispatch(changeNewChatModalStatus())}>
          <Ionicons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inboxText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
  },
  inboxText: {
    fontWeight: "800",
    fontSize: 20,
    color: "black",
  },
});
