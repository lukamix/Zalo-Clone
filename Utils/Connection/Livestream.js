"use strict";
import React, { useState } from "react";
import { TouchableOpacity,FlatList,ScrollView , Text, View, Image, TextInput } from "react-native";
import {  NodePlayerView } from 'react-native-nodemediaclient';

function LivestreamTab({route,navigation}){
    return(
        <View>
            <NodePlayerView 
                style={{ height: 200 }}
                ref={(vp) => { this.vp = vp }}
                inputUrl={"rtmp://192.168.0.10/live/stream"}
                scaleMode={"ScaleAspectFit"}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
            />
        </View>
    );
}