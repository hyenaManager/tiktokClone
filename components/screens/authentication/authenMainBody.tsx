import React from "react";
import { Text, View } from "react-native";
import { authenStyles } from "./authenStyle";

export default function AuthenMainBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={authenStyles.mainBody}>
      <Text style={authenStyles.tiktokText}>Tiktok</Text>
      <View style={authenStyles.contentBody}>{children}</View>
    </View>
  );
}
