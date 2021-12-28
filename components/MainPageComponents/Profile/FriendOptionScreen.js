"use strict";
import React, { Component, useState } from "react";
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    FlatList,
  } from "react-native";
const styles = require("../../../assets/styles/profilestyles/friendoptionscreenstyles.js");

class FriendOptionScreen extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                    style={styles.back_button_image}
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate("PhoneBookScreen")}
                    >
                    <Image
                        source={require("../../../assets/images/common/back-button.png")}
                        style={styles.back_button_image}
                    />
                    </TouchableOpacity>
                    <Text style={styles.login_title}>Tùy chọn bạn bè</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.render_item}>
                        <View style={styles.request_friend_head}>
                            <Image source={require("../../../assets/images/TEMP/duc.jpg")}
                            style={styles.request_friend_avatar}/>
                            <View style={styles.info_container}>
                                <Text style={styles.request_friend_name}>Hihi</Text>
                                <Text style={styles.note}>Vừa kết bạn</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.update_button}
                        onPress={()=>{
                            this.props.navigation.navigate("MainPage");
                        }}
                        >
                            <Text style={styles.update_text}>Xong</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default FriendOptionScreen;