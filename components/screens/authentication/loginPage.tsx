import { TextInput, View } from "react-native";
import AuthenMainBody from "./authenMainBody";
import AuthenButton from "./authenticateBtn";
import { authenStyles } from "./authenStyle";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function LoginPage() {
  return (
    <AuthenMainBody>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "white",
        }}
      ></View>
      <View style={authenStyles.inputContainer}>
        <FontAwesome name="user-circle" size={24} color="white" />
        <TextInput
          placeholder="username"
          placeholderTextColor={"white"}
          style={authenStyles.inputTexts}
        />
        <Ionicons name="key" size={24} color="black" />
      </View>
      <View style={authenStyles.inputContainer}>
        <Ionicons name="key" size={24} color="white" />
        <TextInput
          placeholder="password"
          secureTextEntry
          placeholderTextColor={"white"}
          style={authenStyles.inputTexts}
        />
      </View>
      <AuthenButton
        onClick={() => console.log("rub")}
        text="login"
        bgColor="#ff0099"
        textColor="white"
      />
    </AuthenMainBody>
  );
}
