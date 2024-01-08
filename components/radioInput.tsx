import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const RadioInput = ({
  onAdd,
  onRemove,
  isChecked,
}: {
  onAdd: () => void;
  onRemove: () => void;
  isChecked: boolean;
}) => {
  if (isChecked)
    return (
      <TouchableOpacity
        onPress={() => {
          onRemove();
        }}
      >
        <FontAwesome name="check-circle" size={20} color="red" />
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity
      onPress={() => {
        onAdd();
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "black",
        }}
      ></View>
    </TouchableOpacity>
  );
};
