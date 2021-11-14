"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./components/MainPage.js";
import LoginSubScreen from "./components/LoginSubScreen.js";
import SignUpSubScene from "./components/SignUpSubScene.js";
import HomeScreen from "./components/HomeScreen.js";
import MessageTab from "./components/MainPageComponents/Message/MessageTab.js";
import PostStatusScreen from "./components/MainPageComponents/PostStatus/PostStatusScreen.js";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer 
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainPage"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpSubScene" component={SignUpSubScene} />
        <Stack.Screen name="LoginSubScreen" component={LoginSubScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MessageTab" component={MessageTab} />
        <Stack.Screen name="PostStatusScreen" component={PostStatusScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
