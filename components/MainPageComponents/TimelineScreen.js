"use strict";
import React, { Component, useState, useEffect } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { BlurView } from "expo-blur";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = require("../../assets/styles/mainpagestyles/timelinescreenstyles.js");
const subloginstyles = require("../../assets/styles/subloginstyle.js");
const {
  MAIN_COLOR,
  SUB_COLOR,
  GREY_COLOR,
} = require("../../Constants/Constants.js");
const MainPageController = require("../../Controller/MainPage.js");

import ImageResizer from "react-native-image-resizer";

const { uri_image } = require("../../Constants/Constants.js");
//Test Post Data
const POST_DATA = [
  {
    avatar: require("../../assets/images/TEMP/duc.jpg"),
    username: "Nguyễn Bá Đức",
    type: "đã cập nhật ảnh đại diện",
    status: "Vừa xong",
    public: "public",
    text: "Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.",
    userid: "1",
    postid: "1",
    title: "1",
    count_like: "1T",
    likers: ["Nguyễn Bá Đức"],
    pictures: [
      require("../../assets/images/timeline/test_image.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
    ],
    isLiked: true,
  },
  {
    avatar: require("../../assets/images/TEMP/duc.jpg"),
    username: "Nguyễn Bá Đức",
    type: "đã cập nhật ảnh đại diện",
    status: "Vừa xong",
    public: "public",
    text: "Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.",
    userid: "1",
    postid: "2",
    title: "1",
    count_like: "1T",
    likers: ["Nguyễn Bá Đức"],
    pictures: [
      require("../../assets/images/timeline/test_image.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
    ],
    isLiked: false,
  },
  {
    avatar: require("../../assets/images/TEMP/duc.jpg"),
    username: "Nguyễn Bá Đức",
    type: "đã cập nhật ảnh đại diện",
    status: "Vừa xong",
    public: "public",
    text: "Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.",
    userid: "1",
    postid: "3",
    title: "1",
    count_like: "1T",
    likers: ["Nguyễn Bá Đức"],
    pictures: [
      require("../../assets/images/timeline/test_image.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
    ],
    isLiked: false,
  },
  {
    avatar: require("../../assets/images/TEMP/duc.jpg"),
    username: "Nguyễn Bá Đức",
    type: "đã cập nhật ảnh đại diện",
    status: "Vừa xong",
    public: "public",
    text: "Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.",
    userid: "1",
    postid: "4",
    title: "1",
    count_like: "1T",
    likers: ["Nguyễn Bá Đức"],
    pictures: [
      require("../../assets/images/timeline/test_image.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
    ],
    isLiked: false,
  },
  {
    avatar: require("../../assets/images/TEMP/duc.jpg"),
    username: "Nguyễn Bá Đức",
    type: "đã cập nhật ảnh đại diện",
    status: "Vừa xong",
    public: "public",
    text: "Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.",
    userid: "1",
    postid: "5",
    title: "1",
    count_like: "1T",
    likers: ["Nguyễn Bá Đức"],
    pictures: [
      require("../../assets/images/timeline/test_image.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
    ],
    isLiked: false,
  },
  {
    avatar: require("../../assets/images/TEMP/duc.jpg"),
    username: "Nguyễn Bá Đức",
    type: "đã cập nhật ảnh đại diện",
    status: "Vừa xong",
    public: "public",
    text: "Thanh xuân như 1 ly trà, trà nào cũng được đừng là trà xanh.",
    userid: "1",
    postid: "6",
    title: "1",
    count_like: "1T",
    likers: ["Nguyễn Bá Đức"],
    pictures: [
      require("../../assets/images/timeline/test_image.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
      require("../../assets/images/common/unnamed.png"),
    ],
    isLiked: false,
  },
];
//Test Story Data
const STORY_DATA = [
  {
    last_story_image: require("../../assets/images/TEMP/lntlong.jpg"),
    username: "Long",
    userid: "1",
    storyid: "1",
  },
  {
    last_story_image: require("../../assets/images/TEMP/duy.jpg"),
    username: "Duy",
    userid: "2",
    storyid: "2",
  },
  {
    last_story_image: require("../../assets/images/TEMP/dung.jpg"),
    username: "Dũng",
    userid: "3",
    storyid: "3",
  },
  {
    last_story_image: require("../../assets/images/TEMP/tlong.jpg"),
    username: "Long",
    userid: "4",
    storyid: "4",
  },
];

class TimelineScreen extends Component {
  state = {
    search_input: "",
    option_modal_visible: false,
    user: null,
    option_modal_post: {},
    postData: [],
  };
  setModalVisible = (visible) => {
    this.setState({ option_modal_visible: visible });
  };
  componentDidMount() {
    this.getTimeLine();
  }
  setModalPost = (post) => {
    this.setState({ option_modal_post: post });
  };
  setSearchInput = (value) => {
    this.setState({ search_input: value });
  };
  readData = async () => {
    try {
      var user_ = await AsyncStorage.getItem("user");
      user_ = JSON.parse(user_);
      if (user_) {
        this.setState({ user: user_ });
      }
    } catch (e) {
      console.log(e);
      alert("Failed to fetch the data from storage");
    }
  };

  getTimeLine = async () => {
    try {
      var listPost = await MainPageController.getTimeline();
      this.setState({ postData: listPost["data"] });
      console.log(listPost);
    } catch (e) {
      console.log(e);
    }
  };

  constructor(props) {
    super(props);
    this.readData();
    this.getTimeLine();
  }
  render() {
    const { option_modal_visible, option_modal_post } = this.state;
    return (
      <View style={styles.container}>
        <View style={subloginstyles.header}>
          <TouchableOpacity
            style={styles.search_button}
            activeOpacity={0.5}
            //onPress={() => this.props.navigation.navigate("Home")}
          >
            <Image
              source={require("../../assets/images/common/Search.png")}
              style={styles.search_button_image}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.search_input}
            value={this.state.search_input}
            placeholder="Tìm kiếm ..."
            placeholderTextColor="#FFFFFF"
            onChangeText={(value) => this.setSearchInput(value)}
          />
          <TouchableOpacity
            style={styles.Voice_button}
            activeOpacity={0.5}
            //onPress={() => this.props.navigation.navigate("Home")}
          >
            <Image
              source={require("../../assets/images/common/mic.png")}
              style={styles.Voice_button_image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Add_button}
            activeOpacity={0.5}
            //onPress={() => this.props.navigation.navigate("Home")}
          >
            <Image
              source={require("../../assets/images/common/close_white.png")}
              style={styles.Add_button_image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <FlatList
            data={this.state.postData}
            keyExtractor={(item) => item?._id}
            //Header to show above listview
            ListHeaderComponent={() => {
              //View to set in Header
              return (
                <View style={styles.flatlist_header}>
                  <View style={styles.what_you_think_place}>
                    <TouchableOpacity onPress={
                      ()=>{this.props.navigation.navigate("ProfileScreen")}
                    }>
                      <Image
                        source={{
                          uri: uri_image(
                            this.state.user?.data?.avatar?.fileName
                          ),
                        }}
                        style={styles.what_you_think_avatar}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.what_you_think}
                      onPress={() => {
                        this.props.navigation.navigate("PostStatusScreen", {
                          //pass UserID here
                          userID: "1",
                          intab: "default",
                          //pass more params here
                        });
                      }}
                    >
                      <Text style={styles.what_you_think_text}>
                        Bạn đang nghĩ gì?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.what_you_can_do}>
                    <View style={styles.live_streaming_place}>
                      <TouchableOpacity style={styles.live_streaming}>
                        <Image
                          source={require("../../assets/images/timeline/live.png")}
                          style={styles.live_stream_image}
                        />
                        <Text style={styles.live_stream_text}>
                          Phát trực tiếp
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.image_place}>
                      <TouchableOpacity
                        style={styles.image}
                        onPress={() => {
                          this.props.navigation.navigate("PostStatusScreen", {
                            //pass UserID here
                            intab: "Photos",
                            //pass more params here
                          });
                        }}
                      >
                        <Image
                          source={require("../../assets/images/timeline/photo.png")}
                          style={styles.image_image}
                        />
                        <Text style={styles.image_text}>Ảnh</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.video_place}>
                      <TouchableOpacity
                        style={styles.video}
                        onPress={() => {
                          this.props.navigation.navigate("PostStatusScreen", {
                            //pass UserID here
                            intab: "Videos",
                            //pass more params here
                          });
                        }}
                      >
                        <Image
                          source={require("../../assets/images/timeline/video.png")}
                          style={styles.video_image}
                        />
                        <Text style={styles.video_text}>Video</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.story_place}>
                    <FlatList
                      data={STORY_DATA}
                      horizontal={true}
                      keyExtractor={(item) => item.storyid}
                      //Header to show above listview
                      ListHeaderComponent={() => {
                        //View to set in Header
                        return (
                          <View style={styles.story_header}>
                            <TouchableOpacity style={styles.create_story}>
                              <Image
                                source={{
                                  uri: uri_image(
                                    this.state.user?.data?.avatar?.fileName
                                  ),
                                }}
                                style={styles.create_story_avatar_image}
                              />
                              <Image
                                source={require("../../assets/images/timeline/add.png")}
                                style={styles.add_story_button}
                              />
                              <Text style={styles.create_story_text}>
                                Tạo tin
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.your_story}>
                              <Image
                                source={require("../../assets/images/TEMP/duc.jpg")}
                                style={styles.your_story_image}
                              />
                              <Text style={styles.your_story_text}>
                                Tin cuả bạn
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                      renderItem={({ item }) => {
                        return (
                          <TouchableOpacity style={styles.friend_story}>
                            <Image
                              source={item.last_story_image}
                              style={styles.friend_story_image}
                            />
                            <Text style={styles.friend_story_text}>
                              {item.username}
                            </Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>
                </View>
              );
            }}
            ListFooterComponent={() => {
              return (
                <View style={styles.timeline_footer}>
                  <Text style={styles.timeline_footer_text}> Hết rồi :D</Text>
                </View>
              );
            }}
            renderItem={({ item }) => {
              return (
                // Flat List Item
                <View style={styles.a_post}>
                  <View style={styles.user_post_info}>
                    <TouchableOpacity>
                      <Image
                        source={{
                          uri: uri_image(item?.author?.avatar?.fileName),
                        }}
                        style={styles.user_post_avatar}
                      />
                    </TouchableOpacity>
                    <View style={styles.user_post_info_box}>
                      <View style={styles.user_post_status}>
                        <Text style={styles.user_post_type}>
                          <Text style={styles.user_post_name}>
                            {item?.author?.username}
                          </Text>
                          {" " + item?.type + ". "}
                          <Text style={styles.user_post_date}>
                            {item?.createdAt}
                          </Text>
                          <Text style={styles.user_post_temp_icon}> · </Text>
                          <TouchableOpacity>
                            <Image
                              source={require("../../assets/images/timeline/public.png")}
                              style={styles.user_post_public_image}
                            />
                          </TouchableOpacity>
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.option_button}
                        onPress={() => {
                          this.setModalVisible(!option_modal_visible);
                          this.setModalPost(item);
                        }}
                      >
                        <Image
                          source={require("../../assets/images/timeline/option.png")}
                          style={styles.option_button_image}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={styles.post_text}
                      ellipsizeMode="tail"
                      numberOfLines={2}
                    >
                      {item?.described}
                    </Text>
                    <View style={styles.image_view}>
                      <TouchableOpacity style={styles.image_box}>
                        <Image
                          source={{ uri: uri_image(item?.images[0]?.fileName) }}
                          style={styles.post_image}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.count_interact}>
                      <View style={styles.like_count}>
                        <Text style={styles.count_interact_text}>
                          {item?.like[0]}
                        </Text>
                        <Text style={styles.count_interact_text}> và </Text>
                        <Text style={styles.count_interact_text}>
                          {item?.countComments}
                        </Text>
                        <Text
                          style={styles.count_interact_last_text}
                          ellipsizeMode="tail"
                          numberOfLines={1}
                        >
                          {" "}
                          người khác đã thích
                        </Text>
                      </View>
                    </View>
                    <View style={styles.interact_post_button}>
                      <TouchableOpacity
                        style={[styles.like_button_box]}
                        onPress={() => {
                          //PostLike
                        }}
                      >
                        {item.isLike ? (
                          <Image
                            source={require("../../assets/images/timeline/liked.png")}
                            style={styles.like_button_image}
                          />
                        ) : (
                          <Image
                            source={require("../../assets/images/timeline/like.png")}
                            style={styles.like_button_image}
                          />
                        )}
                        {item.isLike ? (
                          <Text style={styles.liked_button_text}>Thích</Text>
                        ) : (
                          <Text style={styles.like_button_text}>Thích</Text>
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.comment_button_box}
                        onPress={() => {
                          this.props.navigation.navigate("CommentTab", {
                            //pass Parameter Comment here.
                          });
                        }}
                      >
                        <Image
                          source={require("../../assets/images/timeline/comment.png")}
                          style={styles.comment_button_image}
                        />
                        <Text style={styles.comment_button_text}>
                          Bình luận
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.share_button_box}>
                        <Image
                          source={require("../../assets/images/timeline/share.png")}
                          style={styles.share_button_image}
                        />
                        <Text style={styles.share_button_text}>Chia sẻ</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.second_post_comment}>
                      <TouchableOpacity>
                        <Image
                          source={require("../../assets/images/TEMP/duc.jpg")}
                          style={styles.second_post_comment_avatar}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.second_post_comment_write}
                      >
                        <Text style={styles.second_post_comment_text}>
                          Viết bình luận...
                        </Text>
                        <TouchableOpacity style={styles.camera_comment}>
                          <Image
                            source={require("../../assets/images/timeline/camera.png")}
                            style={styles.camera_comment}
                          />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={option_modal_visible}
          onRequestClose={() => {
            this.setModalVisible(!option_modal_visible);
            this.setModalPost(null);
          }}
          style={styles.modalcontainer}
        >
          <View style={styles.option_view}>
            {option_modal_post?.author?._id == this.state.user?.data?._id && (
              <TouchableOpacity
                style={styles.option_view_item}
                onPress={async () => {
                    var res = {
                        id: option_modal_post?._id,
                        navigation: this.props.navigation,
                    }
                    console.log(res)
                    this.setModalVisible(!option_modal_visible);
                    this.getTimeLine();
                    await MainPageController.deleteTimeline(res);
                }}
              >
                <Text style={styles.option_view_item_text}>Xoá bài viết</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.option_view_item}>
              <Text style={styles.option_view_item_text}>Chặn người dùng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_view_item}>
              <Text style={styles.option_view_item_text}>Báo cáo bài viết</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_view_item}>
              <Text style={styles.option_view_item_text}>Hủy kết bạn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option_view_item}
              onPress={() => {
                this.setModalVisible(!option_modal_visible);
                this.setModalPost(null);
              }}
            >
              <Text style={styles.option_view_item_text}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
export default TimelineScreen;
