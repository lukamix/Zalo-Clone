"use strict";
import React, { useState } from "react";
import { AsyncStorage } from "react-native";
const { Users } = require("../Constants/ApiPath.js");
const FetchApi = require("../Services/FetchApi");
const { HTTP_STATUS } = require("../Constants/Constants.js");


const SignUpController = {};

SignUpController.register = async (res) => {
  //Precheck PhoneNumber, Password
  if (!res.phonenumber && !res.password) {
    console.log("Vui lòng nhập số điện thoại và mật khẩu");
  } else if (!res.phonenumber) {
    console.log("Vui lòng nhập số điện thoại !");
  } else if (
    !res.phonenumber.startsWith("0") ||
    res.phonenumber.length < 10 ||
    res.phonenumber.length > 11
  ) {
    console.log("Định dạng số điện thoại không đúng !");
  } else if (!res.password) {
    console.log("Vui lòng nhập mật khẩu !");
  } else {
    //Call API Register Here
    FetchApi.post(Users.register, res)
      .then((response) => {
        console.log(response)
        if (response[0] == HTTP_STATUS.CREATED) {
          AsyncStorage.setItem("id_token", response[1].token);
          res.navigation.navigate("LoginSubScene");
        } else {
          console.log(response[1].message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

module.exports = SignUpController;
