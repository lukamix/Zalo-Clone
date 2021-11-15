"use strict";
import React, { useState } from "react";
import { AsyncStorage, Alert } from "react-native";
const { Users,Posts } = require("../Constants/ApiPath.js");
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
      // console.log('res',response)
      if (response[0] == HTTP_STATUS.OK) {
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
  return FetchApi.post(URI + Posts.create, res)
    .then((response) => {
      if (response[0] == HTTP_STATUS.OK) {
        Alert.alert("Thông báo","Đăng bài viết thành công")
        res.navigate.navigate("TimeLine")
        return response[1]
      } else {
        return null
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

module.exports = MainPageController;
