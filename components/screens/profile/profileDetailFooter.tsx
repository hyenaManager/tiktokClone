import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { profileStyle } from "./profieStyles";

export default function ProfileFooter() {
  return (
    <>
      <Text>Take risks every day</Text>
      <View style={profileStyle.profileDetails}>
        <AntDesign
          name="plussquareo"
          size={19}
          color="red"
          style={{ marginHorizontal: 4 }}
        />
        <Text>Add yours</Text>
      </View>
    </>
  );
}
