import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
const styles = require("../assets/styles/appstyle.js");
import Swiper from 'react-native-swiper/src';
import { StatusBar } from "expo-status-bar";

function onPressVietnameseButton() {
  console.log("Đổi sang Tiếng Việt");
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Okela</Text>
        <Swiper style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={10}>
          <View style={styles.slide1}>
            <Image
              style={styles.LoginLogo}
              source={require("../assets/images/login/video.png")}
            />
            <Text style={styles.loginTitle}>Gọi video ổn định</Text>
            <Text style={styles.loginSubTitle}>
              Trò chuyện thật đã với chất lượng video ổn định mọi lúc,
            </Text>
            <Text style={styles.loginSubTitle}>mọi nơi</Text>
          </View>
          <View style={styles.slide2}>
            <Image
              style={styles.LoginLogo}
              source={require("../assets/images/login/group-chat.png")}
            />
            <Text style={styles.loginTitle}>Chat nhóm tiện ích</Text>
            <Text style={styles.loginSubTitle}>
              Nơi cùng nhau trao đổi, giữ liên lạc với gia đình, bạn bè,
            </Text>
            <Text style={styles.loginSubTitle}>đồng nghiệp...</Text>
          </View>
          <View style={styles.slide3}>
            <Image
              style={styles.LoginLogo}
              source={require("../assets/images/login/send-image.png")}
            />
            <Text style={styles.loginTitle}>Gửi ảnh nhanh chóng</Text>
            <Text style={styles.loginSubTitle}>
              Trao đổi hình ảnh chất lượng cao với bạn bè và người
            </Text>
            <Text style={styles.loginSubTitle}>thân thật nhanh và dễ dàng</Text>
          </View>
          <View style={styles.slide4}>
            <Image
              style={styles.LoginLogo}
              source={require("../assets/images/login/friend-status.png")}
            />
            <Text style={styles.loginTitle}>Nhật ký bạn bè</Text>
            <Text style={styles.loginSubTitle}>
              Nơi cập nhật hoạt động mới nhất của những người bạn
            </Text>
            <Text style={styles.loginSubTitle}>quan tâm</Text>
          </View>
          <View style={styles.slide4}>
            <Image
              style={styles.LoginLogo}
              source={require("../assets/images/login/zalo-login-logo.png")}
            />
          </View>
        </Swiper>
        <View style={styles.loginsignup}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoginSubScreen")}
          >
            <View style={styles.LoginButton}>
              <Text style={styles.loginbuttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUpSubScene")}
          >
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
}

export default HomeScreen;
