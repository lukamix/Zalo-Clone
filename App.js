'use strict';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swiper from 'react-native-swiper';
import { StatusBar } from 'expo-status-bar';

const styles = require('./assets/styles/appstyle.js');
const subloginstyles = require('./assets/styles/subloginstyle.js');

function onPressLoginButton() {
  
}
function onPressSignUpButton() {
  console.log("signup nek");
}
function onPressVietnameseButton() {
  console.log("Đổi sang Tiếng Việt");
}
//Home Screen that will Appear when you Open App
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
            Zalo
      </Text>
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
        <Image
          style={styles.LoginLogo}
          source={require('./assets/images/login/video.png')}
        />
        <Text style={styles.loginTitle}>
          Gọi video ổn định
        </Text>
        <Text style={styles.loginSubTitle}>
          Trò chuyện thật đã với chất lượng video ổn định mọi lúc,
        </Text>
        <Text style={styles.loginSubTitle}>
          mọi nơi
         </Text>
        </View>
        <View style={styles.slide2}>
        <Image
          style={styles.LoginLogo}
          source={require('./assets/images/login/group-chat.png')}
        />
        <Text style={styles.loginTitle}>
          Chat nhóm tiện ích
        </Text>
        <Text style={styles.loginSubTitle}>
          Nơi cùng nhau trao đổi, giữ liên lạc với gia đình, bạn bè,
        </Text>
        <Text style={styles.loginSubTitle}>
          đồng nghiệp...
         </Text>
        </View>
        <View style={styles.slide3}>
        <Image
          style={styles.LoginLogo}
          source={require('./assets/images/login/send-image.png')}
        />
        <Text style={styles.loginTitle}>
          Gửi ảnh nhanh chóng
        </Text>
        <Text style={styles.loginSubTitle}>
          Trao đổi hình ảnh chất lượng cao với bạn bè và người
        </Text>
        <Text style={styles.loginSubTitle}>
          thân thật nhanh và dễ dàng
         </Text>
        </View>
        <View style={styles.slide4}>
        <Image
          style={styles.LoginLogo}
          source={require('./assets/images/login/friend-status.png')}
        />
        <Text style={styles.loginTitle}>
          Nhật ký bạn bè
        </Text>
        <Text style={styles.loginSubTitle}>
          Nơi cập nhật hoạt động mới nhất của những người bạn
        </Text>
        <Text style={styles.loginSubTitle}>
          quan tâm
         </Text>
        </View>
        <View style={styles.slide4}>
        <Image
          style={styles.LoginLogo}
          source={require('./assets/images/login/zalo-login-logo.png')}
        />
        </View>
      </Swiper>
      <View style={styles.loginsignup}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginSubScene')}> 
          <View style={styles.LoginButton}>
              <Text style={styles.loginbuttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSignUpButton}> 
          <View style={styles.SignUpButton}>
              <Text style={styles.signupbuttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.languageChoose}>
      <TouchableOpacity onPress={onPressVietnameseButton}> 
          <View style={styles.languageButton}>
              <Text style={styles.languageButtonText}>Tiếng Việt</Text>
          </View>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//Next Scene that will appear if you click on the Login button in Home Screen
function LoginSubScene({navigation}) {
  const [phonenumber, setText] = useState("");
  return (
    <View style ={subloginstyles.container}>
      <View style={subloginstyles.header}>
          <TouchableOpacity style={styles.back_button_image} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('./assets/images/common/back-button.png')}
                style={subloginstyles.back_button_image}
              />
          </TouchableOpacity>
          <Text style={subloginstyles.login_title}>
              Đăng nhập
          </Text>
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
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity
            style={subloginstyles.closeButtonParent}
            onPress={() => setText("")}
          >
            <Image
              style={subloginstyles.closeButton}
              source={require("./assets/images/common/close.png")}
            />
          </TouchableOpacity>
      </View>
      <View style={subloginstyles.password_field}>
        <TextInput 
          secureTextEntry={true} 
          style={styles.default} 
          placeholder="Mật Khẩu"
          returnKeyType='go'
          autoCorrect={false}
        />
      </View>
      <View style={subloginstyles.forget_password_field}>
        <TouchableOpacity
            style={subloginstyles.forget_password}
          >
            <Text style={subloginstyles.forget_password_text}>
              Lấy lại mật khẩu
            </Text>
          </TouchableOpacity>
      </View>
      <View style={subloginstyles.next_button_field}>
        <TouchableOpacity
            style={subloginstyles.next_button}
          >
            <Image
              style={subloginstyles.next_button_image}
              source={require("./assets/images/common/next-grey-button.png")}
            />
          </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginSubScene" component={LoginSubScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;