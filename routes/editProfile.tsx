import { View } from "react-native";
import { globalStyle } from "../globalStyle";
import EditFiles from "../components/sources/editProfile/editFiles";
import AboutYou from "../components/sources/editProfile/aboutYou";

export default function EditProfile() {
  return (
    <View
      style={{
        ...globalStyle.column_start,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <EditFiles />
      <AboutYou />
    </View>
  );
}
