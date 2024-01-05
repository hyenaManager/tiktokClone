import { Text, TouchableOpacity, View } from "react-native";
import MyModal from "./modal";
import { globalStyle } from "../../globalStyle";
import { InputSearch } from "../search/searchHeader";
import ImageCard from "../cards/profileCards";
import { neeChan } from "../../dummyData";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function InboxNewChatModal({ hide }: { hide: () => void }) {
  const PopupButton = () => {
    return <ImageCard imgSource={neeChan} imageWH={40} />;
  };
  return (
    <>
      <MyModal hide={hide} headerTitle={"Create new chat"}>
        <View style={globalStyle.row_start}>
          <InputSearch />
        </View>
        <View
          style={{
            ...globalStyle.row_between,
            width: "100%",
            paddingHorizontal: 12,
            padding: 10,
          }}
        >
          <Text>Select a group chat</Text>
          <Text>{">"}</Text>
        </View>

        <View
          style={{
            ...globalStyle.column_start,
            width: "100%",
            alignItems: "flex-start",
            paddingHorizontal: 15,
          }}
        >
          <Text>A</Text>
          <View
            style={{
              ...globalStyle.row_between,
              width: "100%",
              marginVertical: 13,
            }}
          >
            <ImageCard imgSource={neeChan} imageWH={40} />
            <View style={{ ...globalStyle.column_start, minWidth: 170 }}>
              <Text>Title</Text>
              <Text>@usertuDis1322</Text>
            </View>
            <RadioInput />
          </View>
        </View>

        <View
          style={{
            ...globalStyle.column_start,
            width: "100%",
            alignItems: "flex-start",
            paddingHorizontal: 15,
          }}
        >
          <Text>B</Text>
          <View
            style={{
              ...globalStyle.row_between,
              width: "100%",
              marginVertical: 13,
            }}
          >
            <ImageCard imgSource={neeChan} imageWH={40} />
            <View style={{ ...globalStyle.column_start, minWidth: 170 }}>
              <Text>Title</Text>
              <Text>@usertuDis1322</Text>
            </View>
            <RadioInput />
          </View>
        </View>

        <View
          style={{
            ...globalStyle.column_start,
            width: "100%",
            alignItems: "flex-start",
            paddingHorizontal: 15,
          }}
        >
          <Text>C</Text>
          <View
            style={{
              ...globalStyle.row_between,
              width: "100%",
              marginVertical: 13,
            }}
          >
            <ImageCard imgSource={neeChan} imageWH={40} />
            <View style={{ ...globalStyle.column_start, minWidth: 170 }}>
              <Text>Title</Text>
              <Text>@usertuDis1322</Text>
            </View>
            <RadioInput />
          </View>
        </View>
      </MyModal>
      <View
        style={{
          ...globalStyle.column_start,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <View style={globalStyle.row_start}>
          <ImageCard imgSource={neeChan} imageWH={40}>
            <MaterialIcons name="cancel" size={16} color="gray" />
          </ImageCard>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: "red", width: "100%", paddingVertical: 13 }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export const RadioInput = () => {
  const [isChecked, setIsChecked] = useState(false);
  if (isChecked)
    return (
      <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
        <FontAwesome name="check-circle" size={20} color="red" />
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "black",
        }}
      ></View>
    </TouchableOpacity>
  );
};
