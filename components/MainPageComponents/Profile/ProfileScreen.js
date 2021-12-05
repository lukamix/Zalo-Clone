import { throwStatement } from "@babel/types";
import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Image,FlatList,TextInput } from "react-native";
const styles = require('../../../assets/styles/profilestyles/profilestyles.js');
const POST_DATA = [
    {
      avatar: require("../../../assets/images/TEMP/duc.jpg"),
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
        require("../../../assets/images/timeline/test_image.png"),
        require("../../../assets/images/common/unnamed.png"),
        require("../../../assets/images/common/unnamed.png"),
        require("../../../assets/images/common/unnamed.png"),
        require("../../../assets/images/common/unnamed.png"),
        require("../../../assets/images/common/unnamed.png"),
      ],
      isLiked: true,
    }
]
class ProfileScreen extends Component{
    state={
        search_input:"",
        DATA:"",
        option_modal_visible: false,
    }
    setModalVisible = (visible) => {
        this.setState({ option_modal_visible: visible });
      };
      setModalPost = (post) => {
        this.setState({ option_modal_post: post });
      };
      setSearchInput = (value) => {
        this.setState({ search_input: value });
      };
    render(){
        const { option_modal_visible, option_modal_post } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                    style={styles.search_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../../assets/images/common/Search.png")}
                        style={styles.search_button_image}
                    />
                    </TouchableOpacity>
                    <TextInput
                    style={styles.search_input}
                    value={this.state.search_input}
                    placeholder="Tìm kiếm ..."
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(value) => this.setState({search_input:value})}
                    />
                    <TouchableOpacity
                    style={styles.Voice_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../../assets/images/common/mic.png")}
                        style={styles.Voice_button_image}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.Add_button}
                    activeOpacity={0.5}
                    //onPress={() => navigation.navigate("Home")}
                    >
                    <Image
                        source={require("../../../assets/images/common/close_white.png")}
                        style={styles.Add_button_image}
                    />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={POST_DATA}
                    keyExtractor={(item) => item?._id}
                    //Header to show above listview
                    ListHeaderComponent={() => {
                        //View to set in Header
                        return (
                        <View style={styles.body}>
                            <View style={styles.personal_image}>
                                <TouchableOpacity style={styles.anh_bia_touchable}>
                                    <Image source={require('../../../assets/images/timeline/Duck.jpg')}
                                    style={styles.anh_bia}
                                    />
                                    <TouchableOpacity style={styles.add_image_button}>
                                        <Image source={ require('../../../assets/images/timeline/camera.png')}
                                        style={styles.add_image_button_image}/>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.anh_dai_dien_touchable}>
                                    <Image source={require('../../../assets/images/TEMP/duc.jpg')}
                                    style={styles.anh_dai_dien}
                                    />
                                    <TouchableOpacity style={styles.add_image_button}>
                                        <Image source={ require('../../../assets/images/timeline/camera.png')}
                                        style={styles.add_image_button_image}/>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.user_name_container}>
                                <Text style={styles.user_name}>Nguyễn Bá Đức</Text>
                                <Text style={styles.user_bio}>liv' in ma lìe</Text>
                            </View>
                            <View style={styles.what_you_think_place}>
                                <TouchableOpacity onPress={
                                ()=>{this.props.navigation.navigate("ProfileScreen")}
                                }>
                                <Image
                                    source={require('../../../assets/images/TEMP/duc.jpg')}
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
                                    source={require("../../../assets/images/timeline/live.png")}
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
                                    source={require("../../../assets/images/timeline/photo.png")}
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
                                    source={require("../../../assets/images/timeline/video.png")}
                                    style={styles.video_image}
                                    />
                                    <Text style={styles.video_text}>Video</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>)
                        }
                    }
                    renderItem={({ item }) => {
                        return (
                          // Flat List Item
                          <View style={styles.a_post}>
                            <View style={styles.user_post_info}>
                              <TouchableOpacity>
                                <Image
                                  source={item.avatar}
                                  style={styles.user_post_avatar}
                                />
                              </TouchableOpacity>
                              <View style={styles.user_post_info_box}>
                                <View style={styles.user_post_status}>
                                  <Text style={styles.user_post_type}>
                                    <Text style={styles.user_post_name}>
                                      {item?.username}
                                    </Text>
                                    {" " + item?.type + ". "}
                                    <Text style={styles.user_post_date}>
                                      {item?.createdAt}
                                    </Text>
                                    <Text style={styles.user_post_temp_icon}> · </Text>
                                    <TouchableOpacity>
                                      <Image
                                        source={require("../../../assets/images/timeline/public.png")}
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
                                    source={require("../../../assets/images/timeline/option.png")}
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
                                    source={item.pictures[0]}
                                    style={styles.post_image}
                                  />
                                </TouchableOpacity>
                              </View>
                              <View style={styles.count_interact}>
                                <View style={styles.like_count}>
                                  <Text style={styles.count_interact_text}>
                                    {item?.count_like}
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
                                      source={require("../../../assets/images/timeline/liked.png")}
                                      style={styles.like_button_image}
                                    />
                                  ) : (
                                    <Image
                                      source={require("../../../assets/images/timeline/like.png")}
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
                                    source={require("../../../assets/images/timeline/comment.png")}
                                    style={styles.comment_button_image}
                                  />
                                  <Text style={styles.comment_button_text}>
                                    Bình luận
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.share_button_box}>
                                  <Image
                                    source={require("../../../assets/images/timeline/share.png")}
                                    style={styles.share_button_image}
                                  />
                                  <Text style={styles.share_button_text}>Chia sẻ</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.second_post_comment}>
                                <TouchableOpacity>
                                  <Image
                                    source={require("../../../assets/images/TEMP/duc.jpg")}
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
                                      source={require("../../../assets/images/timeline/camera.png")}
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
        )
    }
}

export default ProfileScreen;