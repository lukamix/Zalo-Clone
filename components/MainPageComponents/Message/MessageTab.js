"use strict";
import React, { Component, useState } from "react";
import { TouchableOpacity,FlatList,ScrollView ,Button, Text, View, Image, TextInput } from "react-native";
import { EMOJI } from "../../../assets/emoji/emoji.js";
const MainPageController = require("../../../Controller/MainPage.js");
import AsyncStorage from "@react-native-async-storage/async-storage";

const {URI,MAIN_COLOR,SUB_COLOR,GREY_COLOR} = require("../../../Constants/Constants.js");
const styles = require("../../../assets/styles/messagestyles/messagetabstyles.js");
const subloginstyles = require("../../../assets/styles/subloginstyle.js");


var DATA=[
    {
        content:"😋😀😞",
        userid:1,
        receiverid:2,
        messageid:10,
        datetime:'30/10/2021',
        hour:'15:39',
    },
    {
        content:"Em ăn 2 mình",
        userid:2,
        receiverid:1,
        messageid:9,
        datetime:'30/10/2021',
        hour:'15:39',
    },
    {
        content:"Em ăn một mình hay ăn với ai ?",
        userid:1,
        receiverid:2,
        messageid:8,
        datetime:'27/10/2021',
        hour:'15:29',
    },
    {
        content:"Dạ không, em ăn chay",
        userid:2,
        receiverid:1,
        messageid:7,
        datetime:'27/10/2021',
        hour:'15:29',
    },
    {
        content:"Có ăn cơm với thịt không ?",
        userid:1,
        receiverid:2,
        messageid:6,
        datetime:'23/10/2021',
        hour:'15:20',
    },
    {
        content:"Em ăn cơm với gì thế ?",
        userid:1,
        receiverid:2,
        messageid:5,
        datetime:'23/10/2021',
        hour:'15:20',
    },
    {
        content:"Em ăn rồi anh",
        userid:2,
        receiverid:1,
        messageid:4,
        datetime:'23/10/2021',
        hour:'15:20',
    },
    {
        content:"Em ăn cơm chưa ?",
        userid:1,
        receiverid:2,
        messageid:3,
        datetime:'15/10/2021',
        hour:'15:10',
    },
    {
        content:"Em chào anh ạ !",
        userid:2,
        receiverid:1,
        messageid:2,
        datetime:'15/10/2021',
        hour:'15:10',
    },
    {
        content:"Chào em, anh đứng đây từ chiều hôm mưa anh đưa chiếc ô, đã làm trái tim em có cầu vồng",
        userid:1,
        receiverid:2,
        messageid:1,
        datetime:'10/10/2021',
        hour:'15:00',
    },
]



class MessageTab extends Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.blurTextInput =this.blurTextInput.bind(this);
        this.onPressSendButton = this.onPressSendButton.bind(this);
        this.getLastMessageID =this.getLastMessageID.bind(this);
        this.isMyMessage = this.isMyMessage.bind(this);
        this.isToday =this.isToday.bind(this);
        this.addElement = this.addElement.bind(this);
        this.state = {
            MessageSend:"",
            isTexting:false,
            daterender:"",
            isRendered:false,
            isrenderEmoji:false,
            EmojiChoosingtab:1,
            //DATA message
            DATA:DATA,
            //user in message tab is online or not 
            online : true,
            //user using this app id
            userid : 1,
            //current Date now;
            currentDate : this.getCurrentDate(),
        }
        this.readData()
      }
    async onPressSendButton(chatId){
        if(this.state.MessageSend != ""){
            var res = {
                type: "PRIVATE_CHAT",
                content: this.state.MessageSend,
                chatId: chatId
            }
            await MainPageController.sendMessage(res)
            this.addElement(this.state.MessageSend,this.state.userid);
        }
    }
    readData = async () => {
        try {
          var user_ = await AsyncStorage.getItem("user");
          user_ = JSON.parse(user_);
          if (user_) {
            this.setState({ userid: user_?.data?._id });
          }
        } catch (e) {
          console.log(e);
          alert("Failed to fetch the data from storage");
        }
      };
    getLastMessageID(){
        return this.state.DATA[0].messageid;
    }
    getCurrentDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }
    getCurrentTime(){
        var today = new Date();
        var hh = String(today.getHours()).padStart(2, '0');
        var mm = String(today.getMinutes()).padStart(2, '0');
        return hh + ":" + mm;
    }
    isMyMessage = (uid) => {
        return uid === this.state.userid
    }
    isToday = (date)=>{
        return date === this.state.currentDate
    }
    addElement = (content,userid) => {
        var newArray = [{
            content:content,
            userid:userid,
            receiverid:2,
            messageid:this.getLastMessageID()+1,
            datetime:this.getCurrentDate(),
            hour:this.getCurrentTime(),
            },
            ...this.state.DATA 
        ];
        this.setState({
            MessageSend:"",
            isTexting:false,
            DATA:newArray,
        })
    }
    focusTextInput() {
        this.textInput.current.focus();
    }
    blurTextInput(){
        this.textInput.current.blur();
    }
    setRenderEmoji = ()=>{
        this.setState({
            isrenderEmoji: !this.state.isrenderEmoji
        })
    }
    onPressSmileButton =()=>{
        this.blurTextInput();
        this.setRenderEmoji();
    }
    onPressSmileyTab = ()=>{
        this.setState({
            EmojiChoosingtab:1
        })        
    }
    onPressPeopleTab = ()=>{
        this.setState({
            EmojiChoosingtab:2
        })        
    }
    onPressAnimalsTab = ()=>{
        this.setState({
            EmojiChoosingtab:3
        })        
    }
    onPressFoodsTab = ()=>{
        this.setState({
            EmojiChoosingtab:4
        })        
    }
    onPressActivitiesTab = ()=>{
        this.setState({
            EmojiChoosingtab:5
        })        
    }
    onPressTravelsTab = ()=>{
        this.setState({
            EmojiChoosingtab:6
        })        
    }
    onPressObjectsTab = ()=>{
        this.setState({
            EmojiChoosingtab:7
        })        
    }
    onPressSymbolsTab = ()=>{
        this.setState({
            EmojiChoosingtab:8
        })        
    }
    _renderIcon = ({item,index})=>{
        return <TouchableOpacity style={styles.emoji_container}
        onPress={()=>{
            this.setState({
                isTexting: true,
                MessageSend: this.state.MessageSend+item.toString()
            })
        }   
        }>
            <Text style={styles.emoji}>{item}</Text>
        </TouchableOpacity>
    }
    render(){
        const {username,useravatar,userstatus, messages,receiverid, chatID, user_id } = this.props.route.params;
    return (
        <View style={subloginstyles.container}>
            <View style={subloginstyles.header}>
                <TouchableOpacity
                style={styles.back_button_image}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("MainPage")}
                >
                <Image
                    source={require("../../../assets/images/common/back-button.png")}
                    style={subloginstyles.back_button_image}
                />
                </TouchableOpacity>
                <Image
                    source={{uri: useravatar}}
                    style={styles.useravatar}
                />
                {this.state.online ? (<View style={styles.online}></View>)
                :
                (<View style={styles.offline}></View>)
                }
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
                    <TouchableOpacity style={styles.info_container}>
                        <Image source={require('../../../assets/images/message/info.png')}
                            style={styles.info_icon}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{flex: 1}}>
            <FlatList
                data={messages}
                extraData={useState}
                keyExtractor={(item, index) => {return item._id.toString()} }
                renderItem={({item,index})=>{
                    var isRendered;
                    index<=messages.length-2? (isRendered = (
                         ( messages[(index+1)].createdAt===item.createdAt) ? true:false)) : isRendered=false;
                    var isRenderedHour;
                    index>=1? (isRenderedHour = ((messages[(index-1)]?.user._id === receiverid ? true:false)))
                    : isRenderedHour=false;
                    var isNextSameSender;
                    index>=1? (isNextSameSender = (messages[index-1]?.user._id === receiverid ?true:false)):
                    isNextSameSender =false;
                    return <View style={styles.message_container}>
                        {
                            isRendered ? null:
                            <View style = {styles.date_time_container}>
                                <Text style = {
                                    this.isToday(item.createdAt) ?
                                    styles.message_hour_time_full : styles.message_hour_time}> {item.createdAt+" "}
                                </Text>
                                {
                                    this.isToday(item.createdAt)? null : (
                                        <Text style={styles.message_date_time}>, {item.createdAt} </Text>)
                                }
                            </View>
                        }
                        <View style={[styles.all_message,{
                            marginBottom: isNextSameSender ? 0:10,
                        }]}>
                            {
                                this.isMyMessage(item.user._id) ?null: <Image style={styles.user_send_image} source={{uri: useravatar}}/>
                            }
                            <View style={[
                                styles.message_box,
                                {
                                    
                                    backgroundColor: this.isMyMessage(item.user._id) ? SUB_COLOR : 'white',
                                    marginLeft: this.isMyMessage(item.user._id) ? 100 : 30,
                                    marginRight: this.isMyMessage(item.user._id) ? 0 : 100,
                                    alignSelf: this.isMyMessage(item.user._id) ? 'flex-end':'flex-start',
                                }
                            ]
                            }>
                            <Text style={styles.message}>{item.content}</Text>
                            {isRenderedHour?null:<Text style={styles.message_hour}>{item.hour}</Text>}
                            </View>
                        </View>
                    </View>
                }}
                inverted={true}
                extraData={this.state}
            />

            <View style={styles.message_footer}>
                <View style={styles.message_input_container}>
                    <TextInput placeholder="Aa" 
                    style={styles.message_input}
                    value={this.state.MessageSend}
                    ref={this.textInput}
                    onFocus ={()=> {
                        this.setState({
                            isrenderEmoji:false,
                        });
                        console.log('focus');
                      }
                    }
                    onChangeText={(value) => {
                        this.setState({
                            MessageSend: value
                        })
                        if(value.length>0){
                            this.setState({
                                isTexting: true
                            })
                        }
                        else {
                            this.setState({
                                isTexting: false
                            })
                        }
                    }}
                    ></TextInput>
                        {
                            this.state.isTexting?
                            null:
                        (<View style={styles.message_input_button}>
                        <TouchableOpacity style={styles.smile_button}
                        onPress={
                            this.onPressSmileButton
                        }>
                            <Image source={require("../../../assets/images/message/smile.png")}
                                style={styles.smile_button}/>
                        </TouchableOpacity>
                        
                        {/* Mở ra khi nào làm được sau
                        <TouchableOpacity style={styles.smile_button}>
                            <Image source={require("../../../assets/images/message/location.png")}
                                style={styles.location_button}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.smile_button}>
                            <Image source={require("../../../assets/images/message/record.png")}
                                style={styles.record_button}/>
                        </TouchableOpacity>
                        */}
                        </View>)
                        }
                </View>
                <TouchableOpacity 
                onPress={async () =>
                    this.onPressSendButton(chatID)
                }>
                    <Image source={require("../../../assets/images/message/send.png")}
                        style={styles.send_button}/>
                </TouchableOpacity>
            </View>
            {
                this.state.isrenderEmoji ? 
            <View>
                <FlatList style={styles.emoji_flatlist}
                data={
                    this.state.EmojiChoosingtab==1 ? EMOJI[0]["smiley"] :
                    this.state.EmojiChoosingtab==2 ? EMOJI[0]["people"] :
                    this.state.EmojiChoosingtab==3 ? EMOJI[0]["animals"] :
                    this.state.EmojiChoosingtab==4 ? EMOJI[0]["foods"] :
                    this.state.EmojiChoosingtab==5 ? EMOJI[0]["activities"] :
                    this.state.EmojiChoosingtab==6 ? EMOJI[0]["travels"] :
                    this.state.EmojiChoosingtab==7 ? EMOJI[0]["objects"] :
                    EMOJI[0]["Symbols"]
                }
                extraData={this.state}
                keyExtractor={(item, index) => {return index.toString()} }
                renderItem={
                    this._renderIcon
                }
                numColumns={7}
                />
                <View style={styles.emoji_footer}>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 1 ? 2:0,
                    }]}
                    onPress={
                        this.onPressSmileyTab
                    }>
                        <Text style={styles.emoji_tab_text}>😀</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 2 ? 2:0,
                    }]}
                    onPress={
                        this.onPressPeopleTab
                    }>
                        <Text style={styles.emoji_tab_text}>👨‍💻</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 3 ? 2:0,
                    }]}
                    onPress={
                        this.onPressAnimalsTab
                    }>
                        <Text style={styles.emoji_tab_text}>🐻</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 4 ? 2:0,
                    }]}
                    onPress={
                        this.onPressFoodsTab
                    }>
                        <Text style={styles.emoji_tab_text}>🥗</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 5 ? 2:0,
                    }]}
                    onPress={
                        this.onPressActivitiesTab
                    }>
                        <Text style={styles.emoji_tab_text}>🎮</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 6 ? 2:0,
                    }]}
                    onPress={
                        this.onPressTravelsTab
                    }>
                        <Text style={styles.emoji_tab_text}>✈️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 7 ? 2:0,
                    }]}
                    onPress={
                        this.onPressObjectsTab
                    }>
                        <Text style={styles.emoji_tab_text}>🎉</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emoji_tab,{
                        borderTopWidth: this.state.EmojiChoosingtab == 8 ? 2:0,
                    }]}
                    onPress={
                        this.onPressSymbolsTab
                    }>
                        <Text style={styles.emoji_tab_text}>❤️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emoji_tab}
                    onPress={
                        ()=>{
                            if(this.state.MessageSend.length >=4 ){
                                this.setState({
                                    isTexting:true,
                                    MessageSend: this.state.MessageSend.substr(0,this.state.MessageSend.length-2),
                                })
                            }
                            else {this.setState({
                                isTexting:false,
                                MessageSend:"",
                            })
                        }

                        }
                    }>
                        <Image source={require("../../../assets/images/message/delete.png")}
                        style={styles.delete_emoji_button}/>
                    </TouchableOpacity>
                </View>
            </View>
 : null
} 
            </View>
           
        </View>
        );
    }
}

export default MessageTab;