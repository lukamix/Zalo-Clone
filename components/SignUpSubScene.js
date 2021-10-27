import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";

const {URI} = require("../Constants/Constants.js");

const styles = require("../assets/styles/appstyle.js");

import soundImg from '../assets/images/common/next-pink-button.png';
import muteImg from '../assets/images/common/next-grey-button.png';

const subloginstyles = require("../assets/styles/subloginstyle.js");
const signupstyles = require("../assets/styles/signupstyle.js");

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


export default function SignUpSubScene({ navigation }) {
  const [phonenumber, setText] = useState("");
  const [password,setPassword] = useState("");
  const [repassword,setRePassword] = useState("");
  const [username,setUsername] = useState("");

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
    var formatusername = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    warningText="";
    if(!(phonenumber.length&&password.length&&username.length&&repassword.length)){
      warningText = DEFAULT_WARNING["MISSING_ATTRIBUTE_FIELD"];
    }
    else if(formatphone.test(phonenumber)){
      warningText = DEFAULT_WARNING["EXTEND_INVALID_INPUT_FORMAT"][0];
    }
    else if (formatusername.test(username)){
      warningText = DEFAULT_WARNING["EXTEND_INVALID_INPUT_FORMAT"][1];
    }
    else if (password.length<=6){
      warningText = DEFAULT_WARNING["TOO_SHORT_PASSWORD"];
    }
    else if (password!=repassword){
      warningText = DEFAULT_WARNING["NOT_COMPARE_REPASSWORD"];
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
    <View style={signupstyles.container}>
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
        <Text style={subloginstyles.login_title}>Tạo tài khoản</Text>
      </View>
      <View style={subloginstyles.sublogin_text_view}>
        <Text style={subloginstyles.login_sub_title}>
          Vui lòng nhập số điện thoại của bạn để tạo tài khoản mới
        </Text>
      </View>
      <View style={subloginstyles.login_field}>
        <TextInput
          style={subloginstyles.textInput}
          value={phonenumber}
          placeholder="Số Điện Thoại"
          keyboardType="numeric"
          onChangeText={(value) => setText(value)}
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
      <View style={subloginstyles.login_field}>
        <TextInput
          style={subloginstyles.textInput}
          value={username}
          placeholder="Họ Và Tên"
          onChangeText={(value) => setUsername(value)}
        />
        <TouchableOpacity
          style={subloginstyles.closeButtonParent}
          onPress={() => setUsername("")}
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
      <View style={subloginstyles.password_field}>
        <TextInput
          secureTextEntry={true}
          style={styles.default}
          value={repassword}
          placeholder="Nhập Lại Mật Khẩu"
          returnKeyType="go"
          autoCorrect={false}
          onChangeText={(value) => setRePassword(value)}
        />
      </View>
      
        {renderWarning()}
      <View style={subloginstyles.next_button_field}>
        <TouchableOpacity style={subloginstyles.next_button}
            disabled={warningText!=null&&warningText!=""} //disable button on Default
            onPress={()=>{ 
                //Call API Register Here
                console.log(phonenumber);
                console.log(password);
                console.log(username);
                fetch(URI+'users/register', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    phonenumber: phonenumber,
                    password: password,
                    username:username
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
          }>
          {renderNextButton()}
        </TouchableOpacity>
      </View>
    </View>
  );
}
