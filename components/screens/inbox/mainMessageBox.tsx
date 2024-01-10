import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { changeTheme } from "../../../features/counter/theme";
import { Ionicons } from "@expo/vector-icons";
import { data, neeChan } from "../../../dummyData";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FollowerBox from "./followerBox";
import { ActivitiesBox } from "./activitiesBox";
import { SystemBox } from "./systemBox";
import { XXX } from "./xxx";
import { messageBoxStyle } from "./messageBoxStyle";
import { useRoute } from "@react-navigation/native";
import Suggestion from "./suggestion";

export default function InboxSource() {
  const route = useRoute();
  console.log("current route path: ", route.path, " name: ", route.name);

  return (
    <ScrollView contentContainerStyle={messageBoxStyle.mainContainer}>
      <FlatList
        data={data}
        horizontal
        overScrollMode="auto"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <React.Fragment key={index}>
            {index === 0 && (
              <View style={messageBoxStyle.storyProfileContainer}>
                <Image
                  source={neeChan}
                  style={{
                    width: 67,
                    height: 67,
                    padding: 3,
                    borderRadius: 50,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: -1,
                    right: 1,
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "cyan",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: "white",
                    }}
                  >
                    <Entypo name="plus" size={23} color="white" />
                  </View>
                </View>
              </View>
            )}
            <View style={messageBoxStyle.storyContent}>
              <Image
                source={item.image}
                style={{
                  width: 67,
                  height: 67,
                  borderRadius: 50,
                }}
              />
            </View>
          </React.Fragment>
        )}
      />
      <View style={messageBoxStyle.messageContainer}>
        <FollowerBox
          title="New Followers"
          message="user start following you.."
        />
        <ActivitiesBox title="Activities" message="user liked your comment.." />
        <SystemBox
          title="System notifications"
          message="Tiktok: story view..."
        />
        <XXX title="XX" message="You shared a video" />
      </View>
      <Suggestion />
    </ScrollView>
  );
}
