"use strict";
import React, { useState } from "react";
import { AsyncStorage, Alert } from "react-native";
const { Users } = require("../Constants/ApiPath.js");
const FetchApi = require("../Services/FetchApi");
const { HTTP_STATUS, URI } = require("../Constants/Constants.js");

const SignUpController = {};

SignUpController.register = async (res) => {
  //Call API Register Here
  return FetchApi.post(URI + Users.register, res)
    .then((response) => {
      if (response[0] == HTTP_STATUS.CREATED) {
        AsyncStorage.setItem("id_token", response[1].token);
        res.navigation.navigate("MainPage");
      } else {
        Alert.alert("Thông báo", "Số điện thoại đã được đăng ký");
      }
    })
    .catch((error) => {
      console.error(error);
      console.log(res);
    });
};

module.exports = SignUpController;
