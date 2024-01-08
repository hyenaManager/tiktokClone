import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyModal from "./modal";
import { globalStyle } from "../../globalStyle";
import { InputSearch } from "../search/searchHeader";
import ImageCard from "../cards/profileCards";
import { data, neeChan } from "../../dummyData";
import { RadioInput } from "../radioInput";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

type userType = {
  image: any;
  id: number;
};

export default function InboxNewChatModal({ hide }: { hide: () => void }) {
  const [selectedUsers, setSelectedUsers] = useState<userType[] | []>([]);

  const handleAddNewUser = (newUser: userType) => {
    setSelectedUsers([...selectedUsers, newUser]);
  };

  const handleRemoveUser = (id: number) => {
    setSelectedUsers((users) => users.filter((user) => user.id != id));
  };

  const userNotExist = (id: number) => {
    const obj = selectedUsers.find((user) => user.id === id);
    return !obj; //return boolean , that if obj exist return false ,if not exist true
  };

  return (
    <>
      <MyModal hide={hide} headerTitle={"Create new chat"}>
        <ScrollView
          contentContainerStyle={{
            ...globalStyle.column_start,
            overflow: "scroll",
            paddingHorizontal: 5,
            maxWidth: "98%",
            paddingBottom: selectedUsers.length > 0 ? 140 : 10,
          }}
        >
          <InputSearch inputStyle={styles.searchStyle} />
          <View
            style={{
              ...globalStyle.row_between,
              width: "100%",
              paddingHorizontal: 12,
              padding: 10,
            }}
          >
            <Text>Select a group chat{selectedUsers.length}</Text>
            <Text>{">"}</Text>
          </View>

          {data.map((item, index) => (
            <View
              key={index}
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
                <ImageCard imgSource={item.image} imageWH={40} />
                <View style={{ ...globalStyle.column_start, minWidth: 170 }}>
                  <Text>Title</Text>
                  <Text>@usertuDis1322</Text>
                </View>
                <RadioInput
                  onAdd={() => handleAddNewUser(item)}
                  onRemove={() => handleRemoveUser(item.id)}
                  isChecked={!userNotExist(item.id)}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </MyModal>
      {selectedUsers.length > 0 && (
        <SelectedUser data={selectedUsers} removeUser={handleRemoveUser} />
      )}
    </>
  );
}

const SelectedUser = ({
  data,
  removeUser,
}: {
  data: userType[];
  removeUser: (userId: number) => void;
}) => {
  return (
    <View style={styles.selectedContainer}>
      <ScrollView
        horizontal
        contentContainerStyle={{ ...globalStyle.row_start, overflow: "scroll" }}
      >
        {data.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => removeUser(item.id)}>
            <ImageCard imgSource={item.image} imageWH={60}>
              <MaterialIcons name="cancel" size={20} color="gray" />
            </ImageCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          ...globalStyle.column_center,
          backgroundColor: "red",
          width: "100%",
          paddingVertical: 13,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchStyle: {
    width: "100%",
  },
  selectedContainer: {
    ...globalStyle.column_start,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 8,
    paddingTop: 12,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopWidth: 0.7,
    borderTopColor: "gray",
    zIndex: 80,
  },
});
