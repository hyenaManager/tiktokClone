import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { changeCurrentRouteName } from "../../features/counter/currentRoute";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { changeTheme } from "../../features/counter/theme";

type Navigations = {
  bottomNavRoute: "home" | "friend";
};

export function HomeBottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const themToogle = (routeName: string) => {
    if (routeName === "inbox" || routeName === "profile") {
      dispatch(changeTheme("white"));
    } else {
      dispatch(changeTheme("black"));
    }
  };

  return (
    <View style={{ ...bottomTab.mainContainer, backgroundColor: theme }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = (currentRoute: string) => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            themToogle(currentRoute);
            dispatch(changeCurrentRouteName(label as any));
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const Icon = () => {
          if (label === "home") {
            return (
              <>
                <Entypo
                  name="home"
                  size={23}
                  color={isFocused ? "white" : "gray"}
                />
                <Text
                  style={{
                    ...bottomTab.contentItem,
                    color: theme === "black" ? "white" : "black",
                  }}
                >
                  {label}
                </Text>
              </>
            );
          }
          if (label === "friend") {
            return (
              <>
                {isFocused ? (
                  <Ionicons
                    name="people"
                    size={23}
                    color={theme === "white" ? "black" : "white"}
                  />
                ) : (
                  <Ionicons name="people-outline" size={23} color={"gray"} />
                )}
                <Text
                  style={{
                    ...bottomTab.contentItem,
                    color: theme === "black" ? "white" : "black",
                  }}
                >
                  {label}
                </Text>
              </>
            );
          }
          if (label === "inbox") {
            return (
              <>
                {isFocused ? (
                  <Ionicons
                    name="chatbubble-ellipses"
                    size={23}
                    color={theme === "white" ? "black" : "white"}
                  />
                ) : (
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={23}
                    color={"gray"}
                  />
                )}
                <Text
                  style={{
                    ...bottomTab.contentItem,
                    color: theme === "black" ? "white" : "black",
                  }}
                >
                  {label}
                </Text>
              </>
            );
          }
          if (label === "profile") {
            return (
              <>
                {isFocused ? (
                  <Octicons
                    name="person-fill"
                    size={23}
                    color={theme === "white" ? "black" : "white"}
                  />
                ) : (
                  <Octicons name="person" size={23} color={"gray"} />
                )}
                <Text
                  style={{
                    ...bottomTab.contentItem,
                    color: theme === "black" ? "white" : "black",
                  }}
                >
                  {label}
                </Text>
              </>
            );
          }
        };

        return (
          <React.Fragment key={route.key}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onPress(route.name)}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <View style={bottomTab.content}>{Icon()}</View>
            </TouchableOpacity>
            {index === 1 ? (
              <View
                style={{
                  ...bottomTab.add,
                  shadowColor: "black",
                  shadowOffset: { width: 5, height: 5 },
                  shadowRadius: 5,
                  elevation: 10,
                }}
              >
                <Ionicons name="ios-add" size={23} color="black" />
              </View>
            ) : null}
          </React.Fragment>
        );
      })}
    </View>
  );
}

export const bottomTab = StyleSheet.create({
  mainContainer: {
    width: "100%",
    zIndex: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingBottom: 3,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  contentItem: {
    marginTop: 2,
    fontSize: 10,
    color: "white",
  },
  add: {
    display: "flex",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
});
