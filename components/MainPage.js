import React, { Component } from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Message() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Message!</Text>
    </View>
  );
}

function Phonebook() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Phonebook!</Text>
    </View>
  );
}

function Discovery() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Discovery!</Text>
    </View>
  );
}

function Timeline() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Timeline!</Text>
    </View>
  );
}

function Personal() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Personal!</Text>
    </View>
  );
}

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
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Phonebook" component={Phonebook} />
      <Tab.Screen name="Discovery" component={Discovery} />
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Personal" component={Personal} />
    </Tab.Navigator>
  );
}
