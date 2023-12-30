import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeBottomTab } from "../components/bottomNavigation/bottomNavigation";
import HomeSource from "../components/sources/home/homeSource";
//import HeaderNavigation from "../components/headerNavigation/headerNavigate";
import CommentModal from "../components/modals/commentModal";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/counter/commentSlice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FriendSource from "../components/sources/friend/friendSource";
import InboxSource from "../components/sources/inbox/mainMessageBox";
import { InboxHeader } from "../components/headerNavigation/inboxHeader";

const Tab = createBottomTabNavigator();

export function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <HomeBottomTab {...props} />}
    >
      <Tab.Screen name="home" component={HomeSource} />
      <Tab.Screen name="friend" component={FriendSource} />
      <Tab.Screen
        name="inbox"
        component={InboxSource}
        options={{
          headerTitle: () => <InboxHeader />,
          headerStyle: {
            backgroundColor: "white",
          },
          headerShown: true,
        }}
      />
      <Tab.Screen name="profile" component={HomeSource} />
    </Tab.Navigator>
  );
}
