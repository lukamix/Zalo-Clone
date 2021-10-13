"use strict";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
const styles = require("../../assets/styles/mainpagestyles/discoveryscreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

const {URI} = require("../../Constants/Constants.js");

function DiscoveryScreen({ navigation }) {
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
                    placeholder="Tìm kiếm ..."
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
                        source={require("../../assets/images/common/close_white.png")}
                        style={styles.Add_button_image}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.friend_around}>
                    <Text style={styles.friend_around_text}>
                        Bạn bè quanh đây
                    </Text>
                    <TouchableOpacity style ={styles.friend_around_touch}>
                        <Image source={require('../../assets/images/common/friend_around.png')}
                            style={styles.friend_around_image}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.dating_now}>
                    <Text style={styles.dating_now_text}>
                        Hẹn hò ngay
                    </Text>
                    <TouchableOpacity style ={styles.dating_now_touch}>
                        <Image source={require('../../assets/images/common/dating_now.png')}
                            style={styles.dating_now_image}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.service}>
                    <Text>Các dịch vụ phụ trợ sẽ xuất hiện ở đây</Text>
                </View>
            </View>
        </View>
    );
}
export default DiscoveryScreen;