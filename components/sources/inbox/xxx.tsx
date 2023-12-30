import { Text, View } from "react-native";
import { messageBoxStyle } from "./messageBoxStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React, { useEffect } from "react";

export function XXX({ title, message }: { title: string; message: string }) {
  return (
    <View style={messageBoxStyle.messageBox}>
      <View
        style={{
          width: 57,
          height: 57,
          borderRadius: 50,
          backgroundColor: "black",
          display: "flex",
          marginTop: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
      <View style={messageBoxStyle.messageBoxTextContainer}>
        <Text style={messageBoxStyle.messageBoxText}>{title}</Text>
        <Text style={{ fontSize: 20, color: "gray", textAlign: "left" }}>
          {message}
        </Text>
      </View>
      <MaterialCommunityIcons name="camera-outline" color={"gray"} size={24} />
    </View>
  );
}
