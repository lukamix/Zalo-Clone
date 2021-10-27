"use strict";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
import { AsyncStorage } from "react-native";

const LoginController = require("../Controller/Login.js");
//Using Notify
import { ToastAndroid, Platform, AlertIOS } from "react-native";

// function notifyMessage(msg) {
//   if (Platform.OS === 'android') {
//     ToastAndroid.show(msg, ToastAndroid.SHORT)
//   } else {
//     AlertIOS.alert(msg);
//   }
// }

const styles = require("../assets/styles/appstyle.js");
const subloginstyles = require("../assets/styles/subloginstyle.js");

function LoginSubScene({ navigation }) {
  const [phonenumber, setText] = useState("12345");
  const [password, setPassword] = useState("11151");
  return (
    <View style={subloginstyles.container}>
      <View style={subloginstyles.header}>
        <TouchableOpacity
          style={styles.back_button_image}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/images/common/back-button.png")}
            style={subloginstyles.back_button_image}
          />
        </TouchableOpacity>
        <Text style={subloginstyles.login_title}>Đăng nhập</Text>
      </View>
      <View style={subloginstyles.sublogin_text_view}>
        <Text style={subloginstyles.login_sub_title}>
          Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
        </Text>
      </View>
      <View style={subloginstyles.login_field}>
        <TextInput
          style={subloginstyles.textInput}
          value={phonenumber}
          placeholder="Số Điện Thoại"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={subloginstyles.closeButtonParent}
          onPress={() => setText("")}
        >
          <Image
            style={subloginstyles.closeButton}
            source={require("../assets/images/common/close.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={subloginstyles.password_field}>
        <TextInput
          secureTextEntry={true}
          style={styles.default}
          value={password}
          placeholder="Mật Khẩu"
          returnKeyType="go"
          autoCorrect={false}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={subloginstyles.forget_password_field}>
        <TouchableOpacity style={subloginstyles.forget_password}>
          <Text style={subloginstyles.forget_password_text}>
            Lấy lại mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
      <View style={subloginstyles.next_button_field}>
        <TouchableOpacity
          style={subloginstyles.next_button}
          onPress={() =>
            LoginController.login({
              phonenumber: phonenumber,
              password: password,
              navigation: navigation,
            })
          }
        >
          <Image
            style={subloginstyles.next_button_image}
            source={require("../assets/images/common/next-grey-button.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginSubScene;
