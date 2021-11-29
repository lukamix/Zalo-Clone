"use strict";
import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { Users,Posts, Chats } = require("../Constants/ApiPath.js");
const { URI } = require("../Constants/Constants.js");
const FetchApi = require("../Services/FetchApi");
const { HTTP_STATUS } = require("../Constants/Constants.js");

const MainPageController = {};

MainPageController.logout = async (res) => {
  AsyncStorage.removeItem("id_token");
  res.navigation.navigate("HomeScreen");
  Alert.alert("Thông báo","Đăng xuất thành công")
};

MainPageController.show = async () => {
  return FetchApi.get(URI + Users.show)
    .then((response) => {
      if (response[0] == HTTP_STATUS.OK) {
        AsyncStorage.setItem("user", JSON.stringify(response[1]))
        return response[1]
      } else {
        return null
      }
    })
    .catch((error) => {
      console.error('ERROR',error);
    });
};

MainPageController.postTimeline = async (res) => {
  // console.log
  return FetchApi.post(URI + Posts.create, res)
    .then((response) => {
      console.log(response)
      try{
        if (response[0] == HTTP_STATUS.OK) {
          Alert.alert("Thông báo","Đăng bài viết thành công")
          res.navigation.navigate("Timeline")
          return response[1]
        } else {
          return null
        }
      }
      catch(e){
        Alert.alert("Thông báo",String(e))
      }
    })
    .catch((error) => {
      console.error('ERROR',error);
    });
};

MainPageController.deleteTimeline = async (res) => {
  console.log(URI + Posts.delete + '?id=' + res.id)
  return FetchApi.get(URI + Posts.delete + '/' + res.id)
    .then((response) => {
      try{
        if (response[0] == HTTP_STATUS.OK) {
          Alert.alert("Thông báo","Xoá bài viết thành công")
          res.navigation.navigate("Timeline")
          return response[1]
        } else {
          return null
        }
      }
      catch(e){
        Alert.alert("Thông báo",String(e))
      }
    })
    .catch((error) => {
      console.error('ERROR',error);
    });
};

MainPageController.getTimeline = async () => {
  return FetchApi.get(URI + Posts.list)
    .then((response) => {
      if (response[0] == HTTP_STATUS.OK) {
        // Alert.alert("Thông báo","Đăng bài viết thành công")
        // res.navigate.navigate("TimeLine")
        return response[1]
      } else {
        return null
      }
    })
    .catch((error) => {
      console.error('ERROR',error);
    });
};

MainPageController.getListChats = async () => {
  return FetchApi.get(URI + Chats.listChats)
    .then((response) => {
      if (response[0] == HTTP_STATUS.OK) {
        // Alert.alert("Thông báo","Đăng bài viết thành công")
        // res.navigate.navigate("TimeLine")
        return response[1]
      } else {
        return null
      }
    })
    .catch((error) => {
      console.error('ERROR',error);
    });
};

MainPageController.getListMessages = async (res) => {
  return FetchApi.get(URI + Chats.messages + '/' + res.chatID)
    .then((response) => {
      if (response[0] == HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        // Alert.alert("Thông báo","Đăng bài viết thành công")
        // res.navigate.navigate("TimeLine")
        return response[1]
      } else {
        return null
      }
    })
    .catch((error) => {
      console.error('ERROR',error);
    });
};

MainPageController.sendMessage = async (res) => {
  return FetchApi.post(URI + Chats.send, res)
    .then((response) => {
      if (response[0] == HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        // Alert.alert("Thông báo","Đăng bài viết thành công")
        // res.navigate.navigate("TimeLine")
        return response[1]
      } else {
        return null
      }
    })
    .catch((error) => {
      console.error('ERROR',error);
    });
};

module.exports = MainPageController;
