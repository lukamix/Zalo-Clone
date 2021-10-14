"use strict";
import React, { useState } from "react";
import { TouchableOpacity,FlatList,ScrollView , Text, View, Image, TextInput } from "react-native";

const {URI,MAIN_COLOR,SUB_COLOR,GREY_COLOR} = require("../../../Constants/Constants.js");
const styles = require("../../../assets/styles/messagestyles/messagetabstyles.js");
const subloginstyles = require("../../../assets/styles/subloginstyle.js");

const DATA=[
    {
        content:"Chào em, anh đứng đây từ chiều hôm mưa anh đưa chiếc ô, đã làm trái tim em có cầu vồng",
        userid:1,
        receiverid:2,
        messageid:1,
    },
]

function MessageTab({ route, navigation }) {

    const {username,useravatar,userstatus} = route.params;

    const isMyMessage = (uid) => {
        return uid === 1
    }

    return (
        <View style={subloginstyles.container}>
            <View style={subloginstyles.header}>
                <TouchableOpacity
                style={styles.back_button_image}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("MainPage")}
                >
                <Image
                    source={require("../../../assets/images/common/back-button.png")}
                    style={subloginstyles.back_button_image}
                />
                </TouchableOpacity>
                <Image
                    source={useravatar}
                    style={styles.useravatar}
                />
                <View style={styles.username_and_status}>
                    <Text style={styles.username} ellipsizeMode='tail' numberOfLines={1}>{username}</Text>
                    <Text style={styles.userstatus}>Đang hoạt động</Text>
                </View>
                <View style={styles.message_icon}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/message/phone.png')}
                            style={styles.phone_icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/message/video.png')}
                            style={styles.video_icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/message/info.png')}
                            style={styles.info_icon}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{flex: 1}}>

            <FlatList
                data={DATA}
                keyExtractor={(item, index) => {return item.messageid.toString()} }

                renderItem={({item})=>{
                    return <View style={styles.all_message}>
                        <Text style={[
                            styles.message_box,
                            {
                                backgroundColor: isMyMessage(item.userid) ? SUB_COLOR : 'white',
                                marginLeft: isMyMessage(item.userid) ? 100 : 0,
                                marginRight: isMyMessage(item.userid) ? 0 : 100,
                            }
                        ]
                        }>{item.content}</Text>

                    </View>
                }}
                inverted={true}
            />

            <View style={styles.message_footer}>
                <View style={styles.message_input_container}>
                    <TextInput placeholder="Aa" style={styles.message_input}></TextInput>
                    <View style={styles.message_input_button}>
                        <TouchableOpacity style={styles.smile_button}>
                            <Image source={require("../../../assets/images/message/smile.png")}
                                style={styles.smile_button}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.smile_button}>
                            <Image source={require("../../../assets/images/message/location.png")}
                                style={styles.location_button}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.smile_button}>
                            <Image source={require("../../../assets/images/message/record.png")}
                                style={styles.record_button}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require("../../../assets/images/message/send.png")}
                        style={styles.send_button}/>
                </TouchableOpacity>
            </View>

            </View>

        </View>
        );
    }
    export default MessageTab;