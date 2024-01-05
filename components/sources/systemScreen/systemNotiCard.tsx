import { Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../../../globalStyle";
import { Ionicons } from "@expo/vector-icons";
import SystemIcon from "./systemIcons";

type SystemNotiCardProps = {
  systemTitle: string;
  notiHeader: string;
  message: string;
  notiType: "tiktok" | "account update" | "series" | "mlbb";
};

export default function SystemNotiCard({
  systemTitle,
  notiHeader,
  message,
  notiType,
}: SystemNotiCardProps) {
  return (
    <View
      style={{
        ...globalStyle.column_center,
        padding: 13,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 9,
        backgroundColor: "white",
        width: "100%",
        marginBottom: 7,
      }}
    >
      <SystemIcon type={notiType} />

      <View style={{ ...globalStyle.column_start, alignItems: "flex-start" }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            marginBottom: 8,
            width: "100%",
          }}
        >
          {notiHeader}
        </Text>
        <Text style={{ fontSize: 19 }}>{message}</Text>
      </View>
    </View>
  );
}
