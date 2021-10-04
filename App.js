"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen.js";
import LoginSubScene from "./components/LoginSubScene.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginSubScene" component={LoginSubScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
