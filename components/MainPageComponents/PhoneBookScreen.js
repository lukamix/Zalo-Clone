"use strict";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput,ScrollView, FlatList } from "react-native";
const styles = require("../../assets/styles/mainpagestyles/phonebookscreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

const {URI} = require("../../Constants/Constants.js");
const {MAIN_COLOR,SUB_COLOR} = require("../../Constants/Constants.js");

const count_friend_request = 5;

const DATA=[{
    id:1,
    avatar:require('../../assets/images/TEMP/duc.jpg'),
    fullname:'Nguyễn Bá Đức',
    online:true,
    name:"Đức",
},
{
    id:2,
    avatar:require('../../assets/images/TEMP/dung.jpg'),
    fullname:'Nguyễn Dình Dũng',
    online:false,
    name:"Dũng",
},
{
    id:3,
    avatar:require('../../assets/images/TEMP/lntlong.jpg'),
    fullname:'Lại Ngọc Thăng Long',
    online:false,
    name:"Long",
},
{
    id:4,
    avatar:require('../../assets/images/TEMP/duy.jpg'),
    fullname:'Nguyễn Khương Duy',
    online:false,
    name:"Duy",
},
{
    id:5,
    avatar:require('../../assets/images/TEMP/tlong.jpg'),
    fullname:'Nguyễn Thành Long',
    online:false,
    name:"Long",
},
]

function PhoneBookScreen({ navigation }) {
    const [search_input, setSearchInput] = useState("");
    const [friendtab, setFriendtab] = useState(true);
    var friend_tab = function() {
        return{
            flex:1,
            backgroundColor:friendtab?MAIN_COLOR:'#FFFFFF',
            alignItems:'center',
        }
    }
    var friend_text = function(){
        return{
            marginTop:5,
            marginBottom:5,
            color:friendtab?'#FFFFFF':MAIN_COLOR,
            fontWeight:'bold',
            fontSize:15,
        }
    }
    var group_text = function() {
        return{
            marginTop:5,
            marginBottom:5,
            fontWeight:'bold',
            color:friendtab?MAIN_COLOR:'#FFFFFF',
            fontSize:15,
        }
    }
    var group_tab = function() {
        return{
            flex:1,
            backgroundColor:friendtab?'#FFFFFF':MAIN_COLOR,
            alignItems:'center',
        }
    }
    
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
                    placeholder="Tìm bạn bè..."
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(value) => setSearchInput(value)}
                />
                <TouchableOpacity
                    style={styles.Voice_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../assets/images/common/QR_Scan.png")}
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
                <View style={styles.body_tab}>
                    <TouchableOpacity style={friend_tab()}
                    onPress={()=>{
                        setFriendtab(true);
                    }}>
                        <Text style={friend_text()}>Bạn bè</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={group_tab()}
                    onPress={()=>{
                        setFriendtab(false)
                    }}>
                        <Text style={group_text()}>Nhóm</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    { friendtab ? (
                        <FlatList
                            data={DATA}
                            style={styles.flatlist}
                            ListFooterComponent={() =>{
                                //Chỗ này để làm phần đệm cho flatlist
                                return(<View style={styles.footer_phonebook_flatlist}> 
                                </View>)
                            }}
                            ListHeaderComponent={() => {
                                return(<View
                                    style={styles.header_phonebook_flatlist}
                                ><TouchableOpacity style={styles.item}>
                                    <Image source={require('../../assets/images/timeline/friend-request.png')}
                                    style={styles.avatar}
                                    />
                                    {count_friend_request != 0 ? 
                                    (<View style={styles.friend_request_number}>
                                        <Text style={styles.friend_request_number_text}>
                                            {count_friend_request<=99?count_friend_request:"99+"}
                                            </Text>
                                    </View>)
                                    : null
                                    }
                                    <Text style={styles.fullname}>Lời mời kết bạn</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item}>
                                    <Image source={require('../../assets/images/timeline/phone-list.png')}
                                    style={styles.avatar}
                                    />
                                    <Text style={styles.fullname}>Nhập từ liên hệ danh bạ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.item}>
                                    <Image source={require('../../assets/images/timeline/block-user.png')}
                                    style={styles.avatar}
                                    />
                                    <Text style={styles.fullname}>Danh sách chặn</Text>
                                </TouchableOpacity>
                                </View>
                                )
                            }}
                            renderItem={({item})=>{
                                return <TouchableOpacity style={styles.item}>
                                    <Image source={item.avatar}
                                    style={styles.avatar}
                                    />
                                    {item.online ? (<View style={styles.online}></View>)
                                    :
                                    (<View style={styles.offline}></View>)
                                    }
                                    <Text style={styles.fullname}>{item.fullname}</Text>
                                </TouchableOpacity>
                            }}
                            keyExtractor={(item, index) => item.id.toString()}
                        />
                    ):(
                    <Text>Nhóm</Text>
                    )}
                </View>
            </View>
        </View>
    );
}
export default PhoneBookScreen;