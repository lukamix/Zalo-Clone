"use strict";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TouchableOpacity,FlatList , Text, View, Image, TextInput } from "react-native";
const MainPageController = require("../../Controller/MainPage.js");

const { URL_BACKEND, uri_image } = require("../../Constants/Constants.js");

const styles = require("../../assets/styles/mainpagestyles/messagescreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");


function MessageScreen({ navigation }) {
    const [search_input, setSearchInput] = useState("");
    const [user, setUser] = useState({});
    const [listChats, setListChats] = useState({});
    const readData = async () => {
      try {
        var user_ = await AsyncStorage.getItem("user");
        user_ = JSON.parse(user_);
        if (user_) {
          setUser(user_);
        }
      } catch (e) {
        console.log(e);
        alert("Failed to fetch the data from storage");
      }
    };
    const getListChats = async() =>{
        var listChats_ = await MainPageController.getListChats()
        // listChats_ = JSON.parse(listChats_)
        setListChats(listChats_)
    }
    useEffect(async () => {
    await MainPageController.show()
      await readData();
      await getListChats()
      //   console.log(URL_BACKEND + 'files/' + user?.avatar)
    }, []);
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
                    data={listChats?.data}
                    renderItem={({item})=>{
                        const received = item?.member.filter((mem) => mem?._id !== user?.data?._id)[0]
                        return <TouchableOpacity style={styles.FlatMessUnit} 
                                    onPress={async()=>
                                        //fetch
                                            {
                                                //fetch here
                                                const messages = await MainPageController.getListMessages({chatID: item?._id})
                                                console.log(messages)
                                                navigation.navigate("MessageTab",{
                                                username:received?.username,
                                                useravatar: uri_image(received?.avatar?.fileName),
                                                userstatus: "item.status",
                                                messages: messages?.data,
                                                receiverid: received?._id,
                                                chatID: item?._id,
                                                user_id: user?.data?._id
                                                //pass more params here
                                            })
                                        }
                                    }
                                >
                                    <Image
                                        source={{uri:uri_image(received?.avatar?.fileName)}}
                                        style={styles.FlatMessUnitImage}
                                    />
                                    {"item.online" ? (<View style={styles.online}></View>)
                                    :
                                    (<View style={styles.offline}></View>)
                                    }
                                    <View style ={styles.userproperties}>
                                        <View style ={styles.status}>
                                            <Text style={styles.username}>{received?.username}</Text>
                                            <Text style={styles.statusText}>
                                            item.status
                                            </Text>
                                        </View>
                                        <Text style={styles.message}>item.message</Text>
                                    </View>
                                </TouchableOpacity>
                    }}
                    keyExtractor={(item, index) => item?._id.toString() }
                />
        </View>
    );
}
export default MessageScreen;