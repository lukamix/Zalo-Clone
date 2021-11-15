"use strict";
import React, { useState } from "react";
import { AsyncStorage, Alert } from "react-native";
const { Users } = require("../Constants/ApiPath.js");
const { URI } = require("../Constants/Constants.js");
const FetchApi = require("../Services/FetchApi");
const { HTTP_STATUS } = require("../Constants/Constants.js");

const LoginController = {};

LoginController.login = async (res) => {
  //Call API Login Here
  return FetchApi.post(URI + Users.login, res)
    .then((response) => {
      if (response[0] == HTTP_STATUS.OK) {
        AsyncStorage.setItem("id_token", response[1].token);
        // AsyncStorage.setItem("username", response[1].username);
        // AsyncStorage.setItem("id", response[1].id);
        res.navigation.navigate("MainPage");
        return "";
      } else {
        Alert.alert("Thông báo", "Tài khoản hoặc mật khẩu không đúng");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

LoginController.show = async () => {
  return FetchApi.get(URI + Users.show)
    .then((response) => {
      console.log(response);
      if (response[0] == HTTP_STATUS.OK) {
      } else {
        console.log("----");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = LoginController;
