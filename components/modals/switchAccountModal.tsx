import { Text, View } from "react-native";
import MyModal from "./modal";
import { globalStyle } from "../../globalStyle";
import ImageCard from "../cards/profileCards";
import { neeChan } from "../../dummyData";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function SwitchAccountModal({ hide }: { hide: () => void }) {
  return (
    <MyModal hide={hide} headerTitle={"Switch account"}>
      <View style={{ ...globalStyle.row_between, width: "100%" }}>
        <View style={{ ...globalStyle.row_start, alignItems: "center" }}>
          <ImageCard imgSource={neeChan} />
          <Text style={{ marginLeft: 8 }}>userchannel</Text>
        </View>
        <AntDesign name="check" size={24} color="red" />
      </View>

      <View style={{ ...globalStyle.row_between, width: "100%" }}>
        <View style={{ ...globalStyle.row_start, alignItems: "center" }}>
          <ImageCard imgSource={neeChan} />
          <Text style={{ marginLeft: 8 }}>kikerchannel</Text>
        </View>
      </View>

      <View style={{ ...globalStyle.row_between, width: "100%" }}>
        <View style={{ ...globalStyle.row_start, alignItems: "center" }}>
          <View
            style={{
              ...globalStyle.column_center,
              backgroundColor: "#dadada",
              borderRadius: 50,
              width: 57,
              height: 57,
            }}
          >
            <Ionicons name="add" size={24} color="black" />
          </View>
          <Text style={{ marginLeft: 8 }}>onechannel</Text>
        </View>
      </View>
    </MyModal>
  );
}
