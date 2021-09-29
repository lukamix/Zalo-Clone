import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>
        Zalo-Clone
        </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:30,
  },
  title: {
    fontWeight: "bold",
    marginVertical: 4
  },
  logo:{
    fontWeight: "bold",
    fontSize:32,
    fontFamily: "Cochin",
    color:'royalblue'
  }
});
