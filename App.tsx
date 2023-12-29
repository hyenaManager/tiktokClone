import "react-native-gesture-handler";
import React from "react";
import { HomeScreen } from "./routes/homeStack";
import { DetailScreen } from "./routes/detailScreen";
import { AppRegistry } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
import { SearchCom } from "./routes/search";
import SearchHead from "./components/search/searchHeader";

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
            animation: "fade",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
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
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: "Detail", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
AppRegistry.registerComponent("tiktok", () => App);
