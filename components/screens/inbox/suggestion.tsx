import { Text, View } from "react-native";
import React from "react";
import { messageBoxStyle } from "./messageBoxStyle";
import { data } from "../../../dummyData";
import SuggestionProfile from "./suggestionCard";
import { Ionicons } from "@expo/vector-icons";

export default function Suggestion() {
  return (
    <View style={messageBoxStyle.messageContainer}>
      <View style={messageBoxStyle.suggestionHeader}>
        <Text style={{ fontWeight: "500", color: "black", fontSize: 21 }}>
          Suggested accounts
        </Text>
        <Ionicons
          name="alert-circle-outline"
          size={13}
          style={{ marginHorizontal: 7 }}
          color="black"
        />
      </View>
      {data.map((item, index) => (
        <SuggestionProfile
          image={item.image}
          title="User"
          message="People you may know"
          key={index}
        />
      ))}
    </View>
  );
}
