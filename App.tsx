"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./components/MainPage.js";
import LoginSubScene from "./components/LoginSubScene.js";
import SignUpSubScene from "./components/SignUpSubScene.js";
import HomeScreen from "./components/HomeScreen.js";
import MessageTab from "./components/MainPageComponents/Message/MessageTab.js";
import PreLiveStream from "./Utils/Connection/PreLivestream";
import LiveStream from "./Utils/Connection/Livestream";
import LiveStreamAudience from "./Utils/Connection/LivestreamAudience";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  SignUpSubScene: undefined;
  LoginSubScene : undefined;
  MainPage: undefined;
  MessageTab:undefined;
  PreLiveStream: undefined;
  LiveStream: undefined;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MainPage"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpSubScene" component={SignUpSubScene} />
        <Stack.Screen name="LoginSubScene" component={LoginSubScene} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MessageTab" component={MessageTab} />
        <Stack.Screen name="PreLiveStream" component={PreLiveStream}/>
        <Stack.Screen name="LiveStream" component={LiveStream}/>
        <Stack.Screen name="LiveStreamAudience" component={LiveStreamAudience}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
