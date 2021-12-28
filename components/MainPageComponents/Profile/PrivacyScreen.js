"use strict";
import React, { Component, useState } from "react";
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    Alert,
  } from "react-native";
const styles = require("../../../assets/styles/profilestyles/privacyscreenstyles.js");
class PrivacyScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            ACTION:"",
        }
    }
    createAlert = () =>
    Alert.alert(
      "Cảnh báo",
      "Bạn chắc chắn với hành động này chứ ?",
      [
        {
          text: "Hủy",
          onPress: () => {
              console.log("Cancel Pressed")
            },
          style: "cancel"
        },
        { text: "Chắc chắn", onPress: () => {
            console.log("OK Pressed") 
            }
        }
      ]
    );
    render(){
        return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                style={styles.back_button_image}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate("MainPage")}
                >
                <Image
                    source={require("../../../assets/images/common/back-button.png")}
                    style={styles.back_button_image}
                />
                </TouchableOpacity>
                <Text style={styles.login_title}>Bảo mật và quyền riêng tư</Text>
                <TouchableOpacity style={styles.setting_button_container}>
                    <Image source={require("../../../assets/images/common/setting.png")}
                    style={styles.setting_button}/>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
            <TouchableOpacity style={styles.button_container}
                onPress={this.createAlert}
                >
                    <Text style={styles.main_text}>Bảo mật hai lớp</Text>
                    <Text style={styles.sub_text}>Tăng cường bảo mật cho tài khoản của bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_container}
                onPress={this.createAlert}
                >
                    <Text style={styles.main_text}>Vô hiệu hóa tài khoản</Text>
                    <Text style={styles.sub_text}>Không ai có thể truy cập trang cá nhân của bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_container}
                onPress={this.createAlert}
                >
                    <Text style={styles.main_text}>Xoá tài khoản</Text>
                    <Text style={styles.sub_text}>Tài khoản của bạn sẽ biến mất khỏi thị trường</Text>
                </TouchableOpacity>
            </View>

        </View>
        )
    }
}
export default PrivacyScreen;