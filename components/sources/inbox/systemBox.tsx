import { Text, TouchableOpacity, View } from "react-native";
import { messageBoxStyle } from "./messageBoxStyle";
import { MaterialIcons } from "@expo/vector-icons";

import React, { useEffect } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SystemNotificationScreenNavigationProp } from "../../../types/routeType";

export function SystemBox({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  const navigation: SystemNotificationScreenNavigationProp = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SystemNotification")}
      style={messageBoxStyle.messageBox}
    >
      <View
        style={{
          width: 57,
          height: 57,
          borderRadius: 50,
          backgroundColor: "#000435",
          display: "flex",
          marginTop: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="inbox" size={30} color="white" />
      </View>
      <View style={messageBoxStyle.messageBoxTextContainer}>
        <Text style={messageBoxStyle.messageBoxText}>{title}</Text>
        <Text style={{ fontSize: 20, color: "gray", textAlign: "left" }}>
          {message}
        </Text>
      </View>
      <View
        style={{
          width: 7,
          height: 7,
          backgroundColor: "red",
          borderRadius: 50,
        }}
      ></View>
    </TouchableOpacity>
  );
}
