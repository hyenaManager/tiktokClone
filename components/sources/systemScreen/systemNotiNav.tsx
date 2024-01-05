import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyle } from "../../../globalStyle";
import { Ionicons } from "@expo/vector-icons";

export default function SystemNotiNav() {
  return (
    <View
      style={{
        ...globalStyle.row_between,
        width: "100%",
        paddingHorizontal: 14,
        padding: 10,
      }}
    >
      <View style={{ ...globalStyle.column_center }}>
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
          }}
        >
          <FontAwesome5 name="tiktok" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "gray" }}>TikTok</Text>
      </View>
      <View style={{ ...globalStyle.column_center }}>
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
          }}
        >
          <Ionicons name="arrow-up-circle-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "gray" }}>Account update</Text>
      </View>
      <View style={{ ...globalStyle.column_center }}>
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
          }}
        >
          <Ionicons name="md-logo-stackoverflow" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "gray" }}>Series</Text>
      </View>
      <View style={{ ...globalStyle.column_center }}>
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
          }}
        >
          <Ionicons name="md-game-controller-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "gray" }}>MLBB </Text>
      </View>
    </View>
  );
}
