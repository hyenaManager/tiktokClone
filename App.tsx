import "react-native-gesture-handler";
import React from "react";
import { HomeTab } from "./routes/homeStack";
import { DetailScreen } from "./routes/detailScreen";
import { AppRegistry } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
import { SearchCom } from "./routes/search";
import SearchHead from "./components/search/searchHeader";
import NewFollower from "./routes/newFollower";
import Activities from "./routes/Activity";
import SystemNotification from "./routes/systemNotis";
import EditProfile from "./routes/editProfile";
import AddFriend from "./routes/addFriend";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileVideos from "./routes/profileVideos";
import RoutingProfile from "./routes/routingProfile";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2B1A20",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            gestureEnabled: true,
            gestureDirection: "horizontal",
            headerShown: true,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeTab}
            options={{
              title: "Home overview",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchCom}
            options={{
              title: "",
              headerShown: true,
              headerTintColor: "gray",
              headerTitle: () => <SearchHead />,
              headerStyle: {
                backgroundColor: "white",
              },
              animation: "fade",
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: "Detail", headerShown: false }}
          />
          <Stack.Screen
            name="NewFollower"
            component={NewFollower}
            options={{
              title: "New Followers",
              headerShown: true,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "gray",
              headerTitleStyle: {
                fontWeight: "700",
                color: "black",
              },
            }}
          />
          <Stack.Screen
            name="Activity"
            component={Activities}
            options={{
              title: "All activities",
              headerShown: true,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "gray",
              headerTitleStyle: {
                fontWeight: "700",
                color: "black",
              },
            }}
          />
          <Stack.Screen
            name="SystemNotification"
            component={SystemNotification}
            options={{
              title: "System notifications",
              headerShown: true,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "gray",
              headerTitleStyle: {
                fontWeight: "700",
                color: "black",
              },
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: "Edit profile",
              headerTitleAlign: "center",
              headerShown: true,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "900",
                color: "black",
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="ProfileVideos"
            component={ProfileVideos}
            options={{
              title: "ProfileVideos",
              headerTitleAlign: "center",
              headerShown: true,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "900",
                color: "black",
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="RoutingProfile"
            component={RoutingProfile}
            options={{
              title: "Profile",
              headerTitleAlign: "center",
              headerShown: true,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "900",
                color: "black",
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="AddNewFriend"
            component={AddFriend}
            options={{
              title: "Add Friends",
              headerTitleAlign: "center",
              headerShown: true,
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "900",
                color: "black",
                fontSize: 20,
              },
              headerRight(props) {
                return (
                  <MaterialCommunityIcons
                    name="line-scan"
                    size={24}
                    color="black"
                  />
                );
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
AppRegistry.registerComponent("tiktok", () => App);
