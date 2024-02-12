import { StyleSheet, Text, TextInput, View } from "react-native";
import AuthenMainBody from "./authenMainBody";
import AuthenButton from "./authenticateBtn";
import { authenStyles } from "./authenStyle";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const validationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 8 character.",
  }),
});

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(validateMessage);

  const handleCheckError = (error: any) => {
    if (error[0].path[0] === "email") {
      console.log("it reaches email tho error[0]:", error[0].message);

      setValidateMessage({ ...validateMessage, email: error[0].message });
    } else {
      setValidateMessage({ ...validateMessage, email: "" });
    }
    if (error[1].path[0] === "password") {
      console.log("reach pass and index:");

      setValidateMessage({ ...validateMessage, password: error[0].message });
    } else {
      setValidateMessage({ ...validateMessage, password: "" });
    }
  };
  useEffect(() => {
    const checkFormValidate = () => {
      const validation = validationSchema.parse({ email, password });
    };
    try {
      checkFormValidate();
    } catch (error: any) {
      const parsedError = JSON.parse(error.message);
      // console.log("error cathed:", parsedError);
      handleCheckError(parsedError);
    }
  }, [email, password, confirmPassword]);
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
      <View style={{ ...authenStyles.inputContainer, position: "relative" }}>
        <MaterialIcons name="email" size={24} color="white" />
        <TextInput
          placeholder="email"
          placeholderTextColor={"white"}
          style={authenStyles.inputTexts}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Text style={styles.validateMessage}>*{validateMessage.email}</Text>
      </View>
      <View style={{ ...authenStyles.inputContainer, position: "relative" }}>
        <Ionicons name="key" size={24} color="white" />
        <TextInput
          placeholder="password"
          secureTextEntry
          placeholderTextColor={"white"}
          style={authenStyles.inputTexts}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Text style={styles.validateMessage}>*{validateMessage.password}</Text>
      </View>
      <View style={{ ...authenStyles.inputContainer, position: "relative" }}>
        <Ionicons name="key" size={24} color="white" />
        <TextInput
          placeholder="password"
          secureTextEntry
          placeholderTextColor={"white"}
          style={authenStyles.inputTexts}
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <Text style={styles.validateMessage}>
          *{validateMessage.confirmPassword}
        </Text>
      </View>
      <AuthenButton
        onClick={() => console.log("rub")}
        text="register"
        bgColor="#ff0099"
        textColor="white"
      />
    </AuthenMainBody>
  );
}

const styles = StyleSheet.create({
  validateMessage: {
    fontStyle: "italic",
    fontSize: 10,
    color: "yellow",
    position: "absolute",
    bottom: -19,
  },
});
