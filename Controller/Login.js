"use strict";
import React, { useState } from "react";
import { AsyncStorage } from "react-native";
const { Users} = require("../Constants/ApiPath.js");
const { URI } = require("../Constants/Constants.js");
const FetchApi = require("../Services/FetchApi");
const { HTTP_STATUS } = require("../Constants/Constants.js");

const LoginController = {};

LoginController.login = async (res) => {
  if (!res.phonenumber && !res.password) {
    console.log("Vui lòng nhập số điện thoại và mật khẩu");
  } else if (!res.phonenumber) {
    console.log("Vui lòng nhập số điện thoại !");
  }
  // else if(!res.phonenumber.startsWith("0")||
  // res.phonenumber.length<10 || res.phonenumber.length>11){
  //   console.log("Định dạng số điện thoại không đúng !");
  // }
  else if (!res.password) {
    console.log("Vui lòng nhập mật khẩu !");
  } else {
    //Call API Login Here
    console.log("data");
    console.log(URI+Users.login);
    FetchApi.post(URI+Users.login, res)
      .then((response) => {
        console.log(response);
        if (response[0] == HTTP_STATUS.OK) {
          AsyncStorage.setItem("id_token", response[1].token);
          res.navigation.navigate("MainPage");
        } else {
          console.log(response[1].message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

LoginController.show = async (res) => {
  return fetch(URI + "users/show", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "token " + res.token,
    },
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = LoginController;
