import { Text, TouchableOpacity } from "react-native";
import { authenStyles } from "./authenStyle";

export default function AuthenButton({
  text,
  bgColor,
  textColor,
  onClick,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  onClick: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onClick}
      style={{ ...authenStyles.athenticateBtn, backgroundColor: bgColor }}
    >
      <Text style={{ fontSize: 20, color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
}
