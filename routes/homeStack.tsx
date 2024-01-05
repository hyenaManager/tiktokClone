import React from "react";
import { HomeBottomTab } from "../components/bottomNavigation/bottomNavigation";
import HomeSource from "../components/sources/home/homeSource";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FriendSource from "../components/sources/friend/friendSource";
import InboxSource from "../components/sources/inbox/mainMessageBox";
import { InboxHeader } from "../components/headerNavigation/inboxHeader";
import Profile from "../components/sources/profile/mainProfile";
import { ProfileHeader } from "../components/headerNavigation/profileHeader";
import CommentModal from "../components/modals/commentModal";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/counter/commentSlice";
import ProfileModal from "../components/modals/profileModal";
import {
  changeNewChatModalStatus,
  changeProfileModalStatus,
  changeSwitchAccModalStatus,
} from "../features/counter/profileModalSlice";
import InboxNewChatModal from "../components/modals/inboxNewChat";
import SwitchAccountModal from "../components/modals/switchAccountModal";

const Tab = createBottomTabNavigator();

export function HomeTab() {
  const showComment = useAppSelector((state) => state.comment.status);
  const dispatch = useDispatch();
  const showProfileModal = useAppSelector(
    (state) => state.profileModal.status.profile
  );
  const showNewChartModal = useAppSelector(
    (state) => state.profileModal.status.newChat
  );
  const showSwitchAccModal = useAppSelector(
    (state) => state.profileModal.status.switchAccount
  );
  return (
    <>
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
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headerTitle: () => <ProfileHeader />,
            headerStyle: {
              backgroundColor: "white",
            },
            headerShown: true,
          }}
        />
      </Tab.Navigator>
      {showComment ? (
        <CommentModal hide={() => dispatch(changeStatus())} />
      ) : null}
      {showProfileModal ? (
        <ProfileModal hide={() => dispatch(changeProfileModalStatus())} />
      ) : null}
      {showNewChartModal ? (
        <InboxNewChatModal hide={() => dispatch(changeNewChatModalStatus())} />
      ) : null}
      {showSwitchAccModal ? (
        <SwitchAccountModal
          hide={() => dispatch(changeSwitchAccModalStatus())}
        />
      ) : null}
    </>
  );
}
