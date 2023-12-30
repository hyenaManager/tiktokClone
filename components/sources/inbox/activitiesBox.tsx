import { Text, View } from "react-native";
// import { messageBoxStyle } from "./messageBoxStyle";
import { MaterialIcons } from "@expo/vector-icons";

import React, { useEffect } from "react";

import { Ionicons } from "@expo/vector-icons";
import { messageBoxStyle } from "./messageBoxStyle";

export function ActivitiesBox({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <View style={messageBoxStyle.messageBox}>
      <View
        style={{
          width: 57,
          height: 57,
          borderRadius: 50,
          backgroundColor: "#FE036A",
          display: "flex",
          marginTop: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="notifications" size={30} color={"white"} />
      </View>
      <View style={messageBoxStyle.messageBoxTextContainer}>
        <Text style={messageBoxStyle.messageBoxText}>{title}</Text>
        <Text style={{ fontSize: 20, color: "gray", textAlign: "left" }}>
          {message}
        </Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" color={"black"} size={24} />
    </View>
  );
}
