"use strict";
import React, { useState } from "react";
import { TouchableOpacity,FlatList , Text, View, Image, TextInput } from "react-native";

const {URI} = require("../../Constants/Constants.js");
const styles = require("../../assets/styles/mainpagestyles/messagescreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

const DATA = [
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        id:'1',
        title:'1',
        status: '5 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nại Ngọc Thăng Nong',
        id:'2',
        title:'1',
        status: '8 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Đềnh Dũng',
        id:'3',
        title:'1',
        status: '11 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Khươn Dui',
        id:'4',
        title:'1',
        status: '12 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Thành Nong',
        id:'5',
        title:'1',
        status: '13 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Thành Nong',
        id:'6',
        title:'1',
        status: '14 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Thành Nong',
        id:'7',
        title:'1',
        status: '15 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Thành Nong',
        id:'8',
        title:'1',
        status: '16 phút trước',
        message: 'Đi chơi không cu?'
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Thành Nong',
        id:'9',
        title:'1',
        status: '17 phút trước',
        message: 'Đi chơi không cu?'
    },
  ];

function MessageScreen({ navigation }) {
    const [search_input, setSearchInput] = useState("");
    
    return (
        <View style={styles.container}>
            <View style={subloginstyles.header}>
                <TouchableOpacity
                style={styles.search_button}
                activeOpacity={0.5}
                //onPress={() => navigation.navigate("Home")}
                >
                <Image
                    source={require("../../assets/images/common/Search.png")}
                    style={styles.search_button_image}
                />
                </TouchableOpacity>
                <TextInput style={styles.search_input}
                    value={search_input}
                    placeholder="Tìm bạn bè, tin nhắn..."
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(value) => setSearchInput(value)}
                />
                <TouchableOpacity
                    style={styles.QR_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../assets/images/common/QR_Scan.png")}
                        style={styles.QR_button_image}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Add_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../assets/images/common/Add.png")}
                        style={styles.Add_button_image}
                    />
                </TouchableOpacity>
            </View>
                <FlatList
                    data={DATA}
                    renderItem={({item})=>{
                        return <TouchableOpacity style={styles.FlatMessUnit} 
                                    onPress={()=>
                                        //fetch
                                            {
                                                //fetch here
                                                navigation.navigate("MessageTab",{
                                                username:item.username,
                                                useravatar:item.avatar,
                                                userstatus:item.status,
                                                //pass more params here
                                            })
                                        }
                                    }
                                >
                                    <Image
                                        source={item.avatar}
                                        style={styles.FlatMessUnitImage}
                                    />
                                    <View style ={styles.userproperties}>
                                        <View style ={styles.status}>
                                            <Text style={styles.username}>{item.username}</Text>
                                            <Text style={styles.statusText}>
                                            {item.status}
                                            </Text>
                                        </View>
                                        <Text style={styles.message}>{item.message}</Text>
                                    </View>
                                </TouchableOpacity>
                    }}
                    keyExtractor={item => item.id}
                />
        </View>
    );
}
export default MessageScreen;