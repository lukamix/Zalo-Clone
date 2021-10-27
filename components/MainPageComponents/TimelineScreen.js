"use strict";
import React, { useState } from "react";
import { TouchableOpacity,FlatList, Text, View, Image, TextInput } from "react-native";
const styles = require("../../assets/styles/mainpagestyles/timelinescreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

const {URI} = require("../../Constants/Constants.js");
//Test Post Data
const POST_DATA = [
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        type :'đã cập nhật ảnh đại diện',
        status: 'Vừa xong',
        public: 'public',
        text: 'Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.',
        userid:'1',
        postid:'1',
        title:'1',
        count_like:'1T',
        likers:['Nguyễn Bá Đức'],
        pictures:[require("../../assets/images/timeline/test_image.png"),require("../../assets/images/common/unnamed.png")
            ,require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png"),
            require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")],
         
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        type :'đã cập nhật ảnh đại diện',
        status: 'Vừa xong',
        public: 'public',
        text: 'Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.',
        userid:'1',
        postid:'2',
        title:'1',
        count_like:'1T',
        likers:['Nguyễn Bá Đức'],
        pictures:[require("../../assets/images/timeline/test_image.png"),require("../../assets/images/common/unnamed.png")
            ,require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png"),
            require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")],
         
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        type :'đã cập nhật ảnh đại diện',
        status: 'Vừa xong',
        public: 'public',
        text: 'Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.',
        userid:'1',
        postid:'3',
        title:'1',
        count_like:'1T',
        likers:['Nguyễn Bá Đức'],
        pictures:[require("../../assets/images/timeline/test_image.png"),require("../../assets/images/common/unnamed.png")
            ,require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png"),
            require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")],
         
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        type :'đã cập nhật ảnh đại diện',
        status: 'Vừa xong',
        public: 'public',
        text: 'Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.',
        userid:'1',
        postid:'4',
        title:'1',
        count_like:'1T',
        likers:['Nguyễn Bá Đức'],
        pictures:[require("../../assets/images/timeline/test_image.png"),require("../../assets/images/common/unnamed.png")
            ,require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png"),
            require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")],
         
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        type :'đã cập nhật ảnh đại diện',
        status: 'Vừa xong',
        public: 'public',
        text: 'Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.',
        userid:'1',
        postid:'5',
        title:'1',
        count_like:'1T',
        likers:['Nguyễn Bá Đức'],
        pictures:[require("../../assets/images/timeline/test_image.png"),require("../../assets/images/common/unnamed.png")
            ,require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png"),
            require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")],
         
    },
    {
        avatar:require("../../assets/images/common/unnamed.png"),
        username: 'Nguyễn Bá Đức',
        type :'đã cập nhật ảnh đại diện',
        status: 'Vừa xong',
        public: 'public',
        text: 'Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.',
        userid:'1',
        postid:'6',
        title:'1',
        count_like:'1T',
        likers:['Nguyễn Bá Đức'],
        pictures:[require("../../assets/images/timeline/test_image.png"),require("../../assets/images/common/unnamed.png")
            ,require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png"),
            require("../../assets/images/common/unnamed.png"),require("../../assets/images/common/unnamed.png")],
         
    },
];
//Test Story Data
const STORY_DATA=[
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Long',
        userid:'1',
        storyid:'1',
    },
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Long',
        userid:'2',
        storyid:'2',
    },
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Dũng',
        userid:'3',
        storyid:'3',
    },
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Duy',
        userid:'4',
        storyid:'4',
    },
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Duy',
        userid:'4',
        storyid:'5',
    },
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Duy',
        userid:'4',
        storyid:'6',
    },
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Duy',
        userid:'4',
        storyid:'7',
    },
    {
        last_story_image:require("../../assets/images/common/unnamed.png"),
        username:'Duy',
        userid:'4',
        storyid:'8',
    },
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
            <FlatList
                data={POST_DATA}
                keyExtractor={item => item.postid}
                //Header to show above listview
                ListHeaderComponent={() => {
                    //View to set in Header
                    return (
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
                                <TouchableOpacity style={styles.live_streaming} 
                                    onPress={()=>{
                                        navigation.navigate("PreLiveStream",{
                                            //pass UserID here
                                            userID:'1',
                                            //pass more params here
                                        })
                                    }}
                                >
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
                        <FlatList
                                data={STORY_DATA}
                                horizontal={true}
                                keyExtractor={item => item.storyid}
                                //Header to show above listview
                                ListHeaderComponent={() => {
                                    //View to set in Header
                                    return (
                                        <View style={styles.story_header}>
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
                                        </View>
                                    );
                                  }
                                }
                                renderItem={({item})=>{
                                    return <TouchableOpacity style={styles.friend_story}>
                                                <Image source={item.last_story_image}
                                                    style={styles.friend_story_image}/>
                                                <Text style={styles.friend_story_text}>{item.username}</Text>
                                            </TouchableOpacity>
                                }}
                                />
                           
                        </View>
                        </View>
                    );
                  }}
                ListFooterComponent={()=>{
                    return (
                        <View style={styles.timeline_footer}>
                            <Text style={styles.timeline_footer_text}> Hết rồi :D</Text>
                        </View>
                    );
                }}
                renderItem={({item}) => {
                    return (
                      // Flat List Item
                      <View style={styles.a_post}>
                    <View style={styles.user_post_info}>
                        <TouchableOpacity>
                            <Image source={item.avatar}
                                style={styles.user_post_avatar}/>
                        </TouchableOpacity>
                        <View style={styles.user_post_info_box}>
                            <View style={styles.user_post_status}>
                                <TouchableOpacity>
                                    <Text style={styles.user_post_name}>{item.username}</Text>
                                </TouchableOpacity>
                                <Text style={styles.user_post_type} >
                                    {item.type}
                                </Text>
                            </View>
                            <View style={styles.user_post_date_and_public}>
                                <Text style={styles.user_post_date}>
                                    {item.status}
                                </Text>
                                <Text style={styles.user_post_temp_icon}> · </Text>
                                <TouchableOpacity>
                                    <Image source={require("../../assets/images/timeline/public.png")}
                                        style={styles.user_post_public_image}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.post_text} ellipsizeMode='tail' numberOfLines={2}>
                            {item.text}
                        </Text>
                        <View style={styles.image_view}>
                            <TouchableOpacity style={styles.image_box}>
                                <Image source ={item.pictures[0]} style={styles.post_image}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.count_interact}>
                            <View style={styles.like_count}>
                            <Text style={styles.count_interact_text}>{item.likers[0]}</Text>
                            <Text style={styles.count_interact_text}> và </Text>
                            <Text style={styles.count_interact_text}>{item.count_like}</Text>
                            <Text style={styles.count_interact_last_text} ellipsizeMode='tail' numberOfLines={1}> người khác đã thích</Text>
                            </View>
                        </View>
                        <View style={styles.interact_post_button}>
                            <TouchableOpacity style={styles.like_button_box}>
                                <Image source ={require("../../assets/images/timeline/like.png")}
                                    style= {styles.like_button_image}/>
                                <Text style={styles.like_button_text}>
                                    Thích
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.comment_button_box}>
                                <Image source ={require("../../assets/images/timeline/comment.png")}
                                    style= {styles.comment_button_image}/>
                                <Text style={styles.comment_button_text}>
                                    Bình luận
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.share_button_box}>
                                <Image source ={require("../../assets/images/timeline/share.png")}
                                    style= {styles.share_button_image}/>
                                <Text style={styles.share_button_text}>
                                    Chia sẻ
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.second_post_comment}>
                        <TouchableOpacity>
                            <Image source={require("../../assets/images/common/unnamed.png")}
                                style={styles.second_post_comment_avatar}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.second_post_comment_write}>
                            <Text style={styles.second_post_comment_text}>Viết bình luận...</Text>
                            <TouchableOpacity  style={styles.camera_comment}>
                                <Image source={require("../../assets/images/timeline/camera.png")}
                                    style={styles.camera_comment}/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                    );
                  }}
            />
            </View>
        </View>
    );
}
export default TimelineScreen;