import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import {
  changeProfileModalStatus,
  changeSwitchAccModalStatus,
} from "../../features/counter/profileModalSlice";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Search"
>;

export function ProfileHeader() {
  const navigation: HomeScreenNavigationProp = useNavigation();
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
        //   style={styles.headerTextContainer}
        >
          <View style={{ minWidth: 80 }}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(changeSwitchAccModalStatus())}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.inboxText}>HyenaPlays</Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={19}
              color={"black"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => dispatch(changeProfileModalStatus())}
        >
          <Foundation
            name="foot"
            size={18}
            color={"black"}
            style={{ marginHorizontal: 17 }}
          />
          <Ionicons name="ios-menu" size={26} color="black" />
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
    marginHorizontal: 5,
  },
});
