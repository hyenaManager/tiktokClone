import { ScrollView, StyleSheet, View } from "react-native";
import { globalStyle } from "../globalStyle";
import FindSocialFriend from "../components/screens/addFriend/findSocialFriend";
import Suggestion from "../components/screens/inbox/suggestion";
import { InputSearch } from "../components/search/searchHeader";

export default function AddFriend() {
  return (
    <ScrollView
      contentContainerStyle={{
        ...globalStyle.column_start,
        backgroundColor: "white",
        width: "100%",
        overflow: "scroll",
        alignItems: "center",
        paddingTop: 7,
        paddingHorizontal: 3,
      }}
    >
      <InputSearch
        inputPleaceHolder="Search by name"
        inputStyle={styles.inputStyle}
      />
      <FindSocialFriend />
      <Suggestion />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    marginHorizontal: 3,
  },
});
