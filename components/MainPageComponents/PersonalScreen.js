"use strict";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
const styles = require("../../assets/styles/mainpagestyles/personalscreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");
const MainPageController = require("../../Controller/MainPage.js")

const {URI} = require("../../Constants/Constants.js");

function PersonalScreen({ navigation }) {
    const [search_input, setSearchInput] = useState("");
    const [username, setUsername] = useState("");
    useEffect(async()=>{
      var user = await MainPageController.show()
      if (user){
        setUsername(user['data']['username'])
      }
    })
    return (
        <View style={styles.container}>
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
                <TextInput style={styles.search_input}
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
                <TouchableOpacity style={styles.person_container}>
                    <Image source= {require("../../assets/images/timeline/person.png")}
                        style={styles.person}/>
                    <Text style={styles.person_text}>
                        {username}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_container}>
                    <Image source= {require("../../assets/images/timeline/profile.png")}
                        style={styles.profile}/>
                    <Text style={styles.person_text}>
                        Thông tin cá nhân
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_container}>
                    <Image source= {require("../../assets/images/timeline/protection.png")}
                        style={styles.protection}/>
                    <Text style={styles.person_text}>
                        Bảo mật và quyền riêng tư
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_container}>
                    <Image source= {require("../../assets/images/timeline/password.png")}
                        style={styles.password}/>
                    <Text style={styles.person_text}>
                        Thay đổi mật khẩu
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_container}>
                    <Image source= {require("../../assets/images/timeline/history.png")}
                        style={styles.person}/>
                    <Text style={styles.person_text}>
                        Lịch sử hoạt động
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_container}>
                    <Image source= {require("../../assets/images/timeline/rating.png")}
                        style={styles.person}/>
                    <Text style={styles.person_text}>
                        Đánh giá ứng dụng
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_container}
                onPress={async () => {
                  var res = {navigation: navigation}
                  MainPageController.logout(res)
                }}
                >
                    <Image source= {require("../../assets/images/timeline/logout.png")}
                        style={styles.person}/>
                    <Text style={styles.person_text}>
                        Đăng xuất
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person_container}>
                    <Image source= {require("../../assets/images/timeline/report.png")}
                        style={styles.person}/>
                    <Text style={styles.person_text}>
                        Báo lỗi
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default PersonalScreen;