import { ScrollView } from "react-native";
import ProfileDetail from "./profileDetail";
import ContentTab from "./contentStack";

export default function Profile() {
  return (
    <ScrollView
      contentContainerStyle={{
        width: "100%",
        backgroundColor: "white",
        overflow: "visible",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ProfileDetail />
      <ContentTab />
    </ScrollView>
  );
}
