import "react-native-gesture-handler";
import React from "react";
import { HomeScreen } from "./routes/homeStack";
import { DetailScreen } from "./routes/detailScreen";
import { AppRegistry } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";

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
            name="Detail"
            component={DetailScreen}
            options={{ title: "Home overview", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
AppRegistry.registerComponent("tiktok", () => App);
