import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";

const SignUpController = require("../Controller/SignUp.js");

const styles = require("../assets/styles/appstyle.js");

const subloginstyles = require("../assets/styles/subloginstyle.js");
const signupstyles = require("../assets/styles/signupstyle.js");

export default function SignUpSubScene({ navigation }) {
  const [phonenumber, setText] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <View style={signupstyles.container}>
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
      <View style={subloginstyles.next_button_field}>
        <TouchableOpacity
          style={subloginstyles.next_button}
          onPress={() =>
            SignUpController.register({
              phonenumber: phonenumber,
              password: password,
              username: username,
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