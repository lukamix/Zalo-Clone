"use strict";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";

const {URI} = require("../../Constants/Constants.js");
const styles = require("../../assets/styles/mainpagestyles/messagescreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

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
            <View>

            </View>
        </View>
    );
}
export default MessageScreen;