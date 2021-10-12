"use strict";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
const styles = require("../../assets/styles/mainpagestyles/timelinescreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

const {URI} = require("../../Constants/Constants.js");

const DATA = [
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        id:'1',
        title:'1',
        type :'cập nhật ảnh đại diện',
        status: '5 phút trước',
        text: 'Hôm nay ra đường gặp toán chó ?',
        pictures:[require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")
            ,require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png"),
            require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")],
         
    }
]; 

function TimelineScreen({ navigation }) {
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
                <View style = {styles.flatlist_header}>
                    <View style={styles.what_you_think_place}>
                        <TouchableOpacity>
                            <Image source={require("../../assets/images/common/unnamed.png")}
                                style={styles.what_you_think_avatar}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.what_you_think}>
                            <Text style={styles.what_you_think_text}>Bạn đang nghĩ gì?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.what_you_can_do}>
                        <View style={styles.live_streaming_place}>
                            <TouchableOpacity style={styles.live_streaming}>
                                <Image source ={require("../../assets/images/timeline/live.png")}
                                    style={styles.live_stream_image}/>
                                <Text style={styles.live_stream_text}>
                                    Phát trực tiếp
                                </Text>   
                            </TouchableOpacity>
                        </View>
                        <View style={styles.image_place}>
                            <TouchableOpacity style={styles.image}>
                                <Image source ={require("../../assets/images/timeline/photo.png")}
                                    style={styles.image_image}/>
                                <Text style={styles.image_text}>
                                    Ảnh
                                </Text>   
                            </TouchableOpacity>
                        </View>
                        <View style={styles.video_place}>
                            <TouchableOpacity style={styles.video}>
                                <Image source ={require("../../assets/images/timeline/video.png")}
                                    style={styles.video_image}/>
                                <Text style={styles.video_text}>
                                    Video
                                </Text>   
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.story_place}>
                        <TouchableOpacity style={styles.create_story}>
                            <Image source={require("../../assets/images/common/unnamed.png")}
                                style={styles.create_story_avatar_image}/>
                            <Image source= {require("../../assets/images/timeline/add.png")}
                                    style= {styles.add_story_button}/>
                            <Text style={styles.create_story_text}>Tạo tin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.your_story}>
                            <Image source={require("../../assets/images/common/unnamed.png")}
                                style={styles.your_story_image}/>
                            <Text style={styles.your_story_text}>Tin cuả bạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.friend_story}>
                            <Image source={require("../../assets/images/common/unnamed.png")}
                                style={styles.friend_story_image}/>
                            <Text style={styles.friend_story_text}>Long</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.friend_story}>
                            <Image source={require("../../assets/images/common/unnamed.png")}
                                style={styles.friend_story_image}/>
                            <Text style={styles.friend_story_text}>Long</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.friend_story}>
                            <Image source={require("../../assets/images/common/unnamed.png")}
                                style={styles.friend_story_image}/>
                            <Text style={styles.friend_story_text}>Long</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.a_post}>
                    
                </View>
            </View>
        </View>
    );
}
export default TimelineScreen;