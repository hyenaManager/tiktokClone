import { View } from "react-native";
import AuthenMainBody from "./authenMainBody";
import AuthenButton from "./authenticateBtn";
import { globalStyle } from "../../../globalStyle";
import { useNavigation } from "@react-navigation/native";
import { RoutingLoginProp } from "../../../types/routeType";

export default function GettingStart() {
  const navigate: RoutingLoginProp = useNavigation();
  return (
    <AuthenMainBody>
      <View
        style={{
          width: 140,
          height: 140,
          borderRadius: 50,
          backgroundColor: "white",
        }}
      ></View>
      <View style={{ ...globalStyle.column_center, gap: 18 }}>
        <AuthenButton
          onClick={() => navigate.push("Login")}
          text="login"
          bgColor="#ff0099"
          textColor="white"
        />
        <AuthenButton
          onClick={() => navigate.push("Register")}
          text="sign up"
          bgColor="#ff0099"
          textColor="white"
        />
      </View>
    </AuthenMainBody>
  );
}
