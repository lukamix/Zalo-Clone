import React, { Component } from "react";
import { View, Text,Image } from "react-native";
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
      <Tab.Screen name="Message"
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('../assets/images/common/Message.png')}
              style={{width: 26, height: 26, tintColor: tintColor}}
            />
          )
        }}
        component={MessageScreen} />
      <Tab.Screen name="Phonebook"
      options={{
        tabBarLabel: 'Phonebook',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/images/common/PhoneBook.png')}
            style={{width: 26, height: 26, tintColor: tintColor}}
          />
        )
      }}
       component={PhoneBookScreen} />
      <Tab.Screen name="Discovery"
       options={{
        tabBarLabel: 'Discovery',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/images/common/Discovery.png')}
            style={{width: 26, height: 26, tintColor: tintColor}}
          />
        )
      }}
       component={DiscoveryScreen} />
      <Tab.Screen name="Timeline"
       options={{
        tabBarLabel: 'Timeline',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/images/common/Timeline.png')}
            style={{width: 26, height: 26, tintColor: tintColor}}
          />
        )
      }}
       component={TimelineScreen} />
      <Tab.Screen name="Personal"
       options={{
        tabBarLabel: 'Personal',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/images/common/Person.png')}
            style={{width: 26, height: 26, tintColor: tintColor}}
          />
        )
      }}
       component={PersonalScreen} />
    </Tab.Navigator>
  );
}
