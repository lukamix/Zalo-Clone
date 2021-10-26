"use strict";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";

import soundImg from '../assets/images/common/next-pink-button.png';
import muteImg from '../assets/images/common/next-grey-button.png';

const {URI} = require("../Constants/Constants.js");

const styles = require("../assets/styles/appstyle.js");
const subloginstyles = require("../assets/styles/subloginstyle.js");

//Using Notify
import {
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';

function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    AlertIOS.alert(msg);
  }
}
const DEFAULT_WARNING = {
  "INVALID_PHONE_FORMAT":"Định dạng số điện thoại không đúng !",
  "INVALID_USERNAME_FORMAT":"Định dạng họ và tên không đúng !",
  "TOO_SHORT_PASSWORD":"Mật khẩu quá ngắn !",
  "NOT_COMPARE_REPASSWORD":"Nhập lại mật khẩu chưa đúng !",
  "MISSING_ATTRIBUTE_FIELD":"Vui lòng nhập đủ trường thông tin !",
  "EXTEND_INVALID_INPUT_FORMAT":[
    "Số điện thoại không được chứa các kí tự đặc biệt và khoảng trắng",
    "Họ và tên không được chứa các kí tự đặc biệt",
  ]
};
function LoginSubScreen({ navigation }) {

  const [phonenumber1,setText1] = useState("");
  const [password1,setPassword1] = useState("");

  var renderNextButton = function(){
    var imgSource = (warningText!=null&&warningText!="")? muteImg : soundImg  ;
      return (
        <Image 
              style={subloginstyles.next_button_image}
              source={imgSource}
        />
      );
  }
  var warningText ="";
  var renderWarning = function(){
    var formatphone = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    warningText="";
    if(!(phonenumber1.length&&password1.length)){
      warningText = DEFAULT_WARNING["MISSING_ATTRIBUTE_FIELD"];
    }
    else if(formatphone.test(phonenumber1)){
      warningText = DEFAULT_WARNING["EXTEND_INVALID_INPUT_FORMAT"][0];
    }
    else if (password1.length<=6){
      warningText = DEFAULT_WARNING["TOO_SHORT_PASSWORD"];
    }
    return(
      warningText==null||warningText==""?null:
      <View style = {subloginstyles.warning}>
        <Text style={subloginstyles.warningAlert}>!</Text>
        <Text style={subloginstyles.warningText}> {warningText}</Text>
      </View>
    )
  }
  return (
    <View style={subloginstyles.container}>
      <View style={subloginstyles.header}>
        <TouchableOpacity
          style={styles.back_button_image}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("HomeScreen")}
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
          value={phonenumber1}
          keyboardType="numeric"
          placeholder="Số Điện Thoại"
          keyboardType="numeric"
          onChangeText={(value) => {setText1(value)}}
        />
        <TouchableOpacity
          style={subloginstyles.closeButtonParent}
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
          value={password1}
          onChangeText={(value) => {setPassword1(value)}}
          placeholder="Mật Khẩu"
        />
      </View>
      {renderWarning()}
      <View style={subloginstyles.forget_password_field}>
        <TouchableOpacity style={subloginstyles.forget_password}>
          <Text style={subloginstyles.forget_password_text}>
            Lấy lại mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
      <View style={subloginstyles.next_button_field}>
        <TouchableOpacity style={subloginstyles.next_button}
          disabled={warningText!=null&&warningText!=""} //disable button on Default
          onPress={()=>{ 
              //Call API Login Here
              fetch(URI+'users/login', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  phonenumber: phonenumber1,
                  password: password1,
                })
              })
                .then((response) =>{
                  const statusCode = response.status;
                  const data = response.json();
                  return Promise.all([statusCode, data]);
                }
                  )
                .then(([res,data]) => {
                  console.log(res,data);
                  navigation.navigate("MainPage");
                })
                .catch((error) => {
                  console.error(error);
                });
            }
         }
        >
          {renderNextButton()}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginSubScreen;
