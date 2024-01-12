import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { globalStyle } from "../../../globalStyle";

type InputTypeSearch = {
  inputPleaceHolder?: string;
  inputStyle?: {};
};

export const SearchVideo = ({
  inputPleaceHolder,
  inputStyle,
}: InputTypeSearch) => {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={{ ...styles.mainContainer, ...inputStyle }}>
      <Octicons
        name="search"
        size={20}
        color="white"
        style={{ paddingHorizontal: 5 }}
      />
      <TextInput
        onChangeText={setSearchText}
        placeholder={inputPleaceHolder ? inputPleaceHolder : "search"}
        placeholderTextColor={"white"}
        value={searchText}
        style={{
          borderWidth: 0,
          padding: 5,
          minWidth: 250,
          borderRadius: 10,
          backgroundColor: "transparent",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...globalStyle.row_between,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#dadada",
    padding: 3,
    backgroundColor: "transparent",
  },
  contentItem: {
    margin: 2,
  },
  contentText: {
    color: "white",
    fontSize: 20,
  },
});
