import { ScrollView } from "react-native";
import ProfileDetail from "./profileDetail";
import Contents from "./content";

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
      <Contents />
    </ScrollView>
  );
}
