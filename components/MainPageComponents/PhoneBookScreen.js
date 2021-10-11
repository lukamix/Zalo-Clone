"use strict";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
const styles = require("../../assets/styles/mainpagestyles/phonebookscreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

const {URI} = require("../../Constants/Constants.js");

function PhoneBookScreen({ navigation }) {
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
                    style={styles.Voice_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../assets/images/common/mic.png")}
                        style={styles.Voice_button_image}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Add_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../assets/images/common/add_person.png")}
                        style={styles.Add_button_image}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.friend_request}>
                    <Image source={require('../../assets/images/common/friend_request.png')}
                        style={styles.friend_request_image}/>
                    <Text style={styles.friend_request_text}>Lời mời kết bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.friend_request}>
                    <Image source={require('../../assets/images/common/follower.png')}
                        style={styles.follower_image}/>
                    <Text style={styles.friend_request_text}>Người theo dõi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.friend_request}>
                    <Image source={require('../../assets/images/common/black_list.png')}
                        style={styles.black_list_image}/>
                    <Text style={styles.friend_request_text}>Danh sách chặn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.friend_request}>
                    <Image source={require('../../assets/images/common/favorite_friend.png')}
                        style={styles.favorite_friend_image}/>
                    <Text style={styles.friend_request_text}>Bạn bè yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.friend_request}>
                    <Image source={require('../../assets/images/common/all_friend.png')}
                        style={styles.all_friend_image}/>
                    <Text style={styles.friend_request_text}>Tất cả bạn bè</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.friend_request}>
                    <Image source={require('../../assets/images/common/may_be_you_know.png')}
                        style={styles.may_be_you_know_image}/>
                    <Text style={styles.friend_request_text}>Có thể bạn sẽ biết</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default PhoneBookScreen;