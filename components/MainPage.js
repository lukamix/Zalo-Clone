import React, { Component } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MessageScreen from "./MainPageComponents/MessageScreen.js";
import PhoneBookScreen from "./MainPageComponents/PhoneBookScreen.js";
import DiscoveryScreen from "./MainPageComponents/DiscoveryScreen.js";
import TimelineScreen from "./MainPageComponents/TimelineScreen.js";
import PersonalScreen from "./MainPageComponents/PersonalScreen.js";

const Tab = createBottomTabNavigator();

export default function MainPage({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarOptions: {
          showLabel: false,
        },
      }}
    >
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Phonebook" component={PhoneBookScreen} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Timeline" component={TimelineScreen} />
      <Tab.Screen name="Personal" component={PersonalScreen} />
    </Tab.Navigator>
  );
}
