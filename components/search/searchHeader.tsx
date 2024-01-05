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
import { useNavigation } from "@react-navigation/native";

export const InputSearch = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.inputContainer}>
      <Octicons
        name="search"
        size={20}
        color="gray"
        style={{ paddingHorizontal: 5 }}
      />
      <TextInput
        onChangeText={setSearchText}
        value={searchText}
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#f2f3f4",
          padding: 5,
          color: "gray",
          minWidth: 250,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default function SearchHead() {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigate.goBack()}>
        <Ionicons
          name="ios-arrow-back-sharp"
          size={24}
          color="black"
          style={{ flex: 1, borderWidth: 1, borderColor: "red" }}
        />
      </TouchableOpacity> */}
      <InputSearch />
      <TouchableOpacity>
        <Text
          style={{
            color: "red",
            fontSize: 14,
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 8,
    backgroundColor: "#f2f3f4",
    alignItems: "center",
    marginHorizontal: 8,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
