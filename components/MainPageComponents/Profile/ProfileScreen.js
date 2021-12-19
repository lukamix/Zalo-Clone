import { throwStatement } from "@babel/types";
import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { uri_image, process_datetime } from "../../../Constants/Constants.js";
const MainPageController = require("../../../Controller/MainPage");

const styles = require("../../../assets/styles/profilestyles/profilestyles.js");

const POST_DATA = [
  {
    avatar: "",
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
  },
];
class ProfileScreen extends Component {
  state = {
    search_input: "",
    DATA: "",
    option_modal_visible: false,
    option_other_person_modal_visible: false,
    isMyProfile: true,
    isMyFriend: false,
    user: {},
    postData: [],
  };
  getTimeLine = async (userID) => {
    try {
      var listPost = await MainPageController.getTimeline(userID);
      this.setState({ postData: listPost["data"] });
      console.log(listPost);
    } catch (e) {
      console.log(e);
    }
  };
  readData = async () => {
    try {
      var user_ = await AsyncStorage.getItem("user");
      user_ = JSON.parse(user_);
      if (user_) {
        this.setUser(user_);
        await this.getTimeLine(user_.data._id);
      }
    } catch (e) {
      console.log(e);
      alert("Failed to fetch the data from storage");
    }
  };
  setModalVisible = (visible) => {
    this.setState({ option_modal_visible: visible });
  };
  setOtherPersonModalVisible = (visible) => {
    this.setState({ option_other_person_modal_visible: visible });
  };
  setModalPost = (post) => {
    this.setState({ option_modal_post: post });
  };
  setUser = (user) => {
    this.setState({ user: user });
  };
  setSearchInput = (value) => {
    this.setState({ search_input: value });
  };
  constructor(props) {
    super(props);
    this.readData();
  }
  render() {
    const { option_modal_visible, option_modal_post, user } = this.state;
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
            onChangeText={(value) => this.setState({ search_input: value })}
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
          data={this.state.postData}
          keyExtractor={(item) => item?._id}
          //Header to show above listview
          ListHeaderComponent={() => {
            //View to set in Header
            return (
              <View style={styles.body}>
                <View style={styles.personal_image}>
                  <TouchableOpacity style={styles.anh_bia_touchable}>
                    <Image
                      source={require("../../../assets/images/timeline/Duck.jpg")}
                      style={styles.anh_bia}
                    />
                    <TouchableOpacity style={styles.add_image_button}>
                      <Image
                        source={require("../../../assets/images/timeline/camera.png")}
                        style={styles.add_image_button_image}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.anh_dai_dien_touchable}>
                    <Image
                      source={{ uri: uri_image(user?.data?.avatar?.fileName) }}
                      style={styles.anh_dai_dien}
                    />
                    <TouchableOpacity style={styles.add_image_button}>
                      <Image
                        source={require("../../../assets/images/timeline/camera.png")}
                        style={styles.add_image_button_image}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
                <View style={styles.user_name_container}>
                  <Text style={styles.user_name}>{user?.data?.username}</Text>
                  <Text style={styles.user_bio}>liv' in ma lìe</Text>
                </View>
                {this.state.isMyProfile ? null : (
                  <View style={styles.if_not_my_profile_container}>
                    {this.state.isMyFriend ? (
                      <TouchableOpacity
                        style={styles.add_friend_container}
                        onPress={() => {
                          //Just do nothing
                        }}
                      >
                        <Text style={styles.add_friend_text}>Bạn bè</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={styles.add_friend_container}
                        onPress={() => {
                          //Add friend here
                        }}
                      >
                        <Text style={styles.add_friend_text}>Thêm bạn bè</Text>
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      style={styles.message_container}
                      onPress={() => {
                        //Go to message with this person
                      }}
                    >
                      <Text style={styles.message_text}>Nhắn tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.options_container}
                      onPress={() => {
                        this.setOtherPersonModalVisible(
                          !this.state.option_other_person_modal_visible
                        );
                      }}
                    >
                      <Text style={styles.options_text}>···</Text>
                    </TouchableOpacity>
                  </View>
                )}
                <View style={styles.what_you_think_place}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("ProfileScreen");
                    }}
                  >
                    <Image
                      source={{ uri: uri_image(user?.data?.avatar?.fileName) }}
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
              </View>
            );
          }}
          renderItem={({ item, index }) => {
            return (
              // Flat List Item
              <View style={styles.a_post}>
                <View style={styles.user_post_info}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: uri_image(item?.author.avatar.fileName) }}
                      style={styles.user_post_avatar}
                    />
                </TouchableOpacity>
                  <View style={styles.user_post_info_box}>
                    <View style={styles.user_post_status}>
                      <Text style={styles.user_post_type}>
                        <Text style={styles.user_post_name}>
                          {item?.author.username}
                        </Text>
                        {"                               "}
                        <Text style={styles.user_post_date}>
                          {process_datetime(item?.createdAt,"posts")}
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
                  {item?.images.length ? (
                    <View style={styles.image_view}>
                      <TouchableOpacity style={styles.image_box}>
                        <Image
                          source={{ uri: uri_image(item?.images[0]?.fileName) }}
                          style={styles.post_image}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View />
                  )}
                  <View style={styles.count_interact}>
                    {item?.like.length > 0 ? (
                      <View style={styles.like_count}>
                        {item?.like[0] == this.state.user.data._id ? (
                          <Text style={styles.count_interact_text}>
                            Bạn và{" "}
                          </Text>
                        ) : (
                          <Text style={styles.count_interact_text}></Text>
                        )}
                        <Text style={styles.count_interact_text}>
                          {" "}
                          {item?.like.length}
                        </Text>
                        {item?.like[0] == this.state.user.data._id ? (
                          <Text
                            style={styles.count_interact_last_text}
                            ellipsizeMode="tail"
                            numberOfLines={1}
                          >
                            {" "}
                            người khác đã thích
                          </Text>
                        ) : (
                          <Text
                            style={styles.count_interact_last_text}
                            ellipsizeMode="tail"
                            numberOfLines={1}
                          >
                            {" "}
                            người đã thích
                          </Text>
                        )}
                      </View>
                    ) : (
                      <View style={styles.like_count}></View>
                    )}
                  </View>
                  <View style={styles.interact_post_button}>
                    <TouchableOpacity
                      style={[styles.like_button_box]}
                      onPress={async () => {
                        await MainPageController.postLike(item._id);
                        var new_posts = this.state.postData;
                        new_posts[index].isLike = !new_posts[index].isLike;
                        if (new_posts[index].isLike) {
                          new_posts[index].like.push(this.state.user.data._id);
                        }
                        this.setState({ postData: new_posts });
                      }}
                    >
                      {this.state.postData[index].isLike ? (
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
                      {this.state.postData[index].isLike ? (
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
                      <Text style={styles.comment_button_text}>Bình luận</Text>
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
                        source={{
                          uri: uri_image(user?.data?.avatar?.fileName),
                        }}
                        style={styles.second_post_comment_avatar}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.second_post_comment_write}>
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
                  };
                  console.log(res);
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.option_other_person_modal_visible}
          onRequestClose={() => {
            this.setOtherPersonModalVisible(
              !this.state.option_other_person_modal_visible
            );
            this.setModalPost(null);
          }}
          style={styles.modalcontainer}
        >
          <View style={styles.option_view}>
            <TouchableOpacity style={styles.option_view_item}>
              <Text style={styles.option_view_item_text}>Chặn người dùng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_view_item}>
              <Text style={styles.option_view_item_text}>
                Báo cáo người dùng
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option_view_item}>
              <Text style={styles.option_view_item_text}>Hủy kết bạn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option_view_item}
              onPress={() => {
                this.setOtherPersonModalVisible(
                  !this.state.option_other_person_modal_visible
                );
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

export default ProfileScreen;
