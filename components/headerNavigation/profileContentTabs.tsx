import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { View, TouchableOpacity } from "react-native";
import { profileStyle } from "../screens/profile/profieStyles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { globalStyle } from "../../globalStyle";

export default function ProfileContentTabs({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) {
  console.log(state.routes[0].path, " is path");

  return (
    <View
      style={{
        ...globalStyle.row_between,
        width: "82%",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        const icons = () => {
          if (label === "all") {
            return (
              <Ionicons
                name="reorder-four-outline"
                size={24}
                color={isFocused ? "black" : "gray"}
                style={{
                  ...profileStyle.profileContenNavItem,
                }}
              />
            );
          }

          if (label === "private") {
            return (
              <MaterialIcons
                name="lock-outline"
                size={24}
                color={isFocused ? "black" : "gray"}
                style={{
                  ...profileStyle.profileContenNavItem,
                }}
              />
            );
          }

          if (label === "saved") {
            return (
              <Octicons
                name="bookmark"
                size={24}
                color={isFocused ? "black" : "gray"}
                style={{
                  ...profileStyle.profileContenNavItem,
                }}
              />
            );
          }

          if (label === "favourite") {
            return (
              <Ionicons
                name="heart-outline"
                size={24}
                color={isFocused ? "black" : "gray"}
                style={{
                  ...profileStyle.profileContenNavItem,
                }}
              />
            );
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...globalStyle.row_center,
            }}
          >
            {icons()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
