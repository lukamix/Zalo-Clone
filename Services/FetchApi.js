"use strict";
import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const FetchApi = {};

FetchApi.post = async (route, res) => {
  var token = await AsyncStorage.getItem("id_token");
  return fetch(route, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "token " + token
    },
    body: JSON.stringify(res),
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("Thông báo",String(error))
    });
};

FetchApi.get = async (route) => {
  var token = await AsyncStorage.getItem("id_token");
  // console.log(token)
  return fetch(route, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      // body: JSON.stringify(res),
      authorization: "token " + token,
    },
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("Thông báo",String(error))
    });
};

module.exports = FetchApi;
