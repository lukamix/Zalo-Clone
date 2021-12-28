"use strict";
import React, { Component, useState } from "react";
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
  } from "react-native";
const styles = require("../../../assets/styles/profilestyles/friendrequestscreenstyles.js");

const items=[
    {
        id:1,
        name:"Đức Hi hi",
    },
    {
        id:2,
        name:"Dũng Hí hí",
    },
]
class FriendRequestScreen extends Component {
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
                <Text style={styles.login_title}>Lời mời kết bạn</Text>
                <TouchableOpacity style={styles.setting_button_container}>
                    <Image source={require("../../../assets/images/common/setting.png")}
                    style={styles.setting_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item?.id}
                    renderItem={({ item, index }) => {
                        return (
                        <View style={styles.render_item}>
                            <View style={styles.request_friend_head}>
                                <Image source={require("../../../assets/images/TEMP/duc.jpg")}
                                style={styles.request_friend_avatar}/>
                                <View style={styles.info_container}>
                                    <Text style={styles.request_friend_name}>{item.name}</Text>
                                    <Text style={styles.note}>Từ số điện thoại</Text>
                                </View>
                                <View style={styles.button_container}>
                                    <TouchableOpacity style={styles.accept_button}>
                                        <Text style={styles.accept_button_text}>Đồng ý</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.decline_button}>
                                        <Text style={styles.decline_button_text}>x</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.request_friend_tail}>
                                <Text style={styles.request_message}>"Xin chào, Tôi tên là Đức Hi hi"</Text>
                            </View>
                        </View>
                        )
                    }}
                >

                </FlatList>
            </View>
        </View>
        )
    }
}
export default FriendRequestScreen;