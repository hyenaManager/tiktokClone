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
            options={{ title: "Home overview", headerShown: false }}
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
AppRegistry.registerComponent("tiktok", () => App);
