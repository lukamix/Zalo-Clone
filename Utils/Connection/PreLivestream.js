"use strict";
import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native';
const styles = require('./PreLiveStyle.js');

export default function PreLiveStream ({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("LiveStream",{
                        role:"host",
                    });
                }}
                style={styles.Host}>
                <Text style={styles.buttonText}> Host A Room</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("LiveStreamRoom",{
                        role:"audience",
                    });
                }}
                style={styles.Audience}>
                <Text style={styles.buttonText}> Join A Room As Audience</Text>
            </TouchableOpacity>
        </View>
    );
}