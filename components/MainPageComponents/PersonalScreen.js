"use strict";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
const styles = require("../../assets/styles/mainpagestyles/personalscreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");
const MainPageController = require("../../Controller/MainPage.js");

const { URL_BACKEND } = require("../../Constants/Constants.js");

function PersonalScreen({ navigation }) {
  const [search_input, setSearchInput] = useState("");
  const [user, setUser] = useState({});
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
  useEffect(async () => {
    await readData();
    //   console.log(URL_BACKEND + 'files/' + user?.avatar)
  }, []);
  return (
    <SafeAreaView style={styles.container}>
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
          placeholder="Tìm kiếm ..."
          placeholderTextColor="#FFFFFF"
          onChangeText={(value) => setSearchInput(value)}
        />
        <TouchableOpacity
          style={styles.Voice_button}
          activeOpacity={0.5}
          //onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../assets/images/common/mic.png")}
            style={styles.Voice_button_image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Add_button}
          activeOpacity={0.5}
          //onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../assets/images/common/close_white.png")}
            style={styles.Add_button_image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.person_container}
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        >
          <Image
            source={{
              uri: URL_BACKEND + "files/" + user?.data?.avatar?.fileName,
            }}
            style={styles.person}
          />
          <Text style={styles.person_text}>{user?.data?.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.person_container}>
          <Image
            source={require("../../assets/images/timeline/profile.png")}
            style={styles.profile}
          />
          <Text style={styles.person_text}>Thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.person_container}
          onPress={() => {
            navigation.navigate("PrivacyScreen");
          }}
        >
          <Image
            source={require("../../assets/images/timeline/protection.png")}
            style={styles.protection}
          />
          <Text style={styles.person_text}>Bảo mật và quyền riêng tư</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.person_container}
          onPress={() => {
            navigation.navigate("ChangePasswordScreen");
          }}
        >
          <Image
            source={require("../../assets/images/timeline/password.png")}
            style={styles.password}
          />
          <Text style={styles.person_text}>Thay đổi mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.person_container}>
          <Image
            source={require("../../assets/images/timeline/history.png")}
            style={styles.person}
          />
          <Text style={styles.person_text}>Lịch sử hoạt động</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.person_container}>
          <Image
            source={require("../../assets/images/timeline/rating.png")}
            style={styles.person}
          />
          <Text style={styles.person_text}>Đánh giá ứng dụng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.person_container}
          onPress={async () => {
            var res = { navigation: navigation };
            MainPageController.logout(res);
          }}
        >
          <Image
            source={require("../../assets/images/timeline/logout.png")}
            style={styles.person}
          />
          <Text style={styles.person_text}>Đăng xuất</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.person_container}>
          <Image
            source={require("../../assets/images/timeline/report.png")}
            style={styles.person}
          />
          <Text style={styles.person_text}>Báo lỗi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default PersonalScreen;
