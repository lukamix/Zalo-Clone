"use strict";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
const MainPageController = require("../../Controller/MainPage.js");
const search_items = [
  
  //name key is must.It is to show the text in front
  { id: 1, name: 'angellist',message:'chào' },
  { id: 2, name: 'codepen',message:'hi' },
  { id: 3, name: 'envelope',message:'chào' },
  { id: 4, name: 'etsy',message:'he' },
  { id: 5, name: 'facebook',message:'chào' },
  { id: 6, name: 'foursquare',message:'chào' },
  { id: 7, name: 'github-alt',message:'chào' },
  { id: 8, name: 'github',message:'chào' },
  { id: 9, name: 'gitlab',message:'chào' },
  { id: 10, name: 'instagram',message:'chào' },
];

const {
  URL_BACKEND,
  uri_image,
  process_datetime,
} = require("../../Constants/Constants.js");

const styles = require("../../assets/styles/mainpagestyles/messagescreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");

function MessageScreen({ navigation }) {
  const [search_input, setSearchInput] = useState("");
  const [user, setUser] = useState({});
  const [listChats, setListChats] = useState({});
  const [listMessage, setListMessage] = useState({});
  const readData = async () => {
    try {
      var user_ = await AsyncStorage.getItem("user");
      user_ = JSON.parse(user_);
      if (user_) {
        setUser(user_);
      }
    } catch (e) {
      console.log(e);
      alert("Failed to fetch the data from storage");
    }
  };
  const getListChats = async () => {
    var listChats_ = await MainPageController.getListChats();
    var listMessage_ = {};
    for (let item = 0; item < listChats_?.data.length; item++) {
      var messages = await MainPageController.getListMessages({
        chatID: listChats_.data[item]?._id,
      });
      listMessage_[listChats_.data[item]?._id] = messages;
    }
    setListMessage(listMessage_);
    setListChats(listChats_);
  };
  useEffect(async () => {
    await MainPageController.show();
    await readData();
    await getListChats();
    //   await getListMessage()
    //   console.log(URL_BACKEND + 'files/' + user?.avatar)
  }, []);
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
        <TextInput
          style={styles.search_input}
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
      
      <FlatList
        data={listChats?.data}
        renderItem={({ item }) => {
          const received = item?.member.filter(
            (mem) => mem?._id !== user?.data?._id
          )[0];
          const messages = listMessage[item?._id];
          // console.log(messages)
          return (
            <TouchableOpacity
              style={styles.FlatMessUnit}
              onPress={async () =>
                //fetch
                {
                  //fetch here
                  // const messages = await MainPageController.getListMessages({chatID: item?._id})

                  navigation.navigate("MessageTab", {
                    username: received?.username,
                    useravatar: uri_image(received?.avatar?.fileName),
                    userstatus: "item.status",
                    messages: messages?.data.reverse(),
                    receiverid: received?._id,
                    chatID: item?._id,
                    user_id: user?.data?._id,
                    //pass more params here
                  });
                }
              }
            >
              <Image
                source={{ uri: uri_image(received?.avatar?.fileName) }}
                style={styles.FlatMessUnitImage}
              />
              {"item.online" ? (
                <View style={styles.online}></View>
              ) : (
                <View style={styles.offline}></View>
              )}
              <View style={styles.userproperties}>
                <View style={styles.status}>
                  <Text style={styles.username}>{received?.username}</Text>
                  <Text style={styles.statusText}>
                    {process_datetime(messages?.data[0].createdAt, "listChat")}
                  </Text>
                </View>
                <Text style={styles.message}>{messages?.data[0].content}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => item?._id.toString()}
      />
      {
        search_input!=""?
        <View style={styles.search_dropdown_container}>
          <FlatList
            data={search_items}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.search_result_container}
                //onPress={...}
                >
                  <Image source={require('../../assets/images/TEMP/duc.jpg')}
                  style={styles.search_result_avatar}/>
                  <View>
                    <Text style={styles.search_result_text}>{item.name}</Text>
                    <Text style={styles.search_result_message}>{item.message}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item?.id.toString()}
          />
        </View>:null
      }
    </View>
  );
}
export default MessageScreen;
