import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyle } from "../../../globalStyle";
import { Ionicons } from "@expo/vector-icons";

export default function SystemIcon({ type }: { type: string }) {
  if (type === "tiktok")
    return (
      <View
        style={{
          ...globalStyle.row_start,
        }}
      >
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
            marginRight: 9,
          }}
        >
          <FontAwesome5 name="tiktok" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 20 }}>TikTok</Text>
      </View>
    );
  if (type === "account update")
    return (
      <View
        style={{
          ...globalStyle.row_start,
        }}
      >
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
            marginRight: 9,
          }}
        >
          <Ionicons name="arrow-up-circle-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 20 }}>Account update</Text>
      </View>
    );
  if (type === "series")
    return (
      <View
        style={{
          ...globalStyle.row_start,
        }}
      >
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
            marginRight: 9,
          }}
        >
          <Ionicons name="md-logo-stackoverflow" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 20 }}>Series</Text>
      </View>
    );
  if (type === "mlbb")
    return (
      <View
        style={{
          ...globalStyle.row_start,
        }}
      >
        <TouchableOpacity
          style={{
            ...globalStyle.column_center,
            width: 40,
            height: 40,
            backgroundColor: "#dadada",
            borderRadius: 50,
            marginRight: 9,
          }}
        >
          <Ionicons name="md-game-controller-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 20 }}>MLBB </Text>
      </View>
    );
}
