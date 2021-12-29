"use strict";
import React, { Component, useState } from "react";
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    TextInput,
  } from "react-native";
  import {SafeAreaView} from "react-native-safe-area-context"

const styles = require("../../../assets/styles/profilestyles/changepasswordscreenstyles.js");
class  ChangePasswordScreen  extends Component {
    constructor(props) {
        super(props);
        this.state ={
            password:"",
            newpassword:"",
            retypepassword:"",
        }
    }
    render(){
        return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                style={styles.back_button_image}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("PersonalScreen")}
                >
                <Image
                    source={require("../../../assets/images/common/back-button.png")}
                    style={styles.back_button_image}
                />
                </TouchableOpacity>
                <Text style={styles.login_title}>Cập nhật mật khẩu</Text>
            </View>
            <View style={styles.text_view}>
                <Text style={styles.sub_title}>
                Mật khẩu phải gồm chữ và số, không được chứa năm sinh, username và tên Zalo của bạn.
                </Text>
            </View>
            <View style={styles.password_field}>
                <TextInput
                secureTextEntry={true}
                style={styles.default}
                value={this.state.password}
                returnKeyType="done"
                onChangeText={(value) => {
                    this.setState({
                        password:value,
                    })
                }}
                placeholder="Mật Khẩu"
                />
            </View>
            <View style={styles.password_field}>
                <TextInput
                secureTextEntry={true}
                style={styles.default}
                value={this.state.newpassword}
                returnKeyType="done"
                onChangeText={(value) => {
                    this.setState({
                        newpassword:value,
                    })
                }}
                placeholder="Mật Khẩu Mới"
                />
            </View>
            <View style={styles.password_field}>
                <TextInput
                secureTextEntry={true}
                style={styles.default}
                value={this.state.retypepassword}
                returnKeyType="done"
                onChangeText={(value) => {
                    this.setState({
                        retypepassword:value,
                    })
                }}
                placeholder="Nhập Lại Mật Khẩu"
                />
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.update_button}
                //onPress={}
                >
                    <Text style={styles.update_text}>Cập nhật</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        )
    }
}
export default ChangePasswordScreen;