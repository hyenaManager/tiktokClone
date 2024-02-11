import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { data, neeChan } from "../../dummyData";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RoutingProfileScreenNavigationProp } from "../../types/routeType";
import { useDispatch } from "react-redux";
import { changeCurrentRouteName } from "../../features/counter/currentRoute";
import { useAppSelector } from "../../hooks";

export default function ProfileAdd() {
  const navigation: RoutingProfileScreenNavigationProp = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("RoutingProfile");
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleNavigate}
      style={styles.content}
    >
      <Image source={neeChan} width={50} height={50} style={styles.profile} />
      <View
        style={{
          position: "absolute",
          bottom: -10,
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.profileAdder}>
          <Entypo name="plus" size={27} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    borderRadius: 50,
    width: 57,
    height: 57,
    borderWidth: 2,
    borderColor: "white",
  },
  profileAdder: {
    backgroundColor: "#03C03C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
