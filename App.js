"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./components/MainPage.js";
import LoginSubScene from "./components/LoginSubScene.js";
import SignUpSubScene from "./components/SignUpSubScene.js";
import HomeScreen from "./components/HomeScreen.js";
import MessageTab from "./components/MainPageComponents/Message/MessageTab.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainPage"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUpSubScene" component={SignUpSubScene} />
        <Stack.Screen name="LoginSubScene" component={LoginSubScene} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MessageTab" component={MessageTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
