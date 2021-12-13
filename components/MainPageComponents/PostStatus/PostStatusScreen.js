import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import {
  View,
  Image,
  Text,
  InteractionManager,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

var styles = require("../../../assets/styles/poststatusstyles/poststatusstyles.js");
const MAX_SELECTED_IMAGEs = 4;
const { uri_image } = require("../../../Constants/Constants.js");
const MAX_SELECTED_VIDEOs = 1;
const MAX_VIDEO_SIZE = 20000000; //(Bytes)
const MAX_IMAGE_SIZE = 5000000; //(Bytes)
const MainPageController = require("../../../Controller/MainPage.js");

class PostStatusScreen extends React.Component {
  state = {
    textInput: "",
    isTexting: false,
    images: "",
    videos: "",
    intab: "default",
    selectedPhotos: [],
    selectedVideos: [],
    username: "",
    user: null,
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
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusInputWithKeyboard = this.focusInputWithKeyboard.bind(this);
    this.blurTextInput = this.blurTextInput.bind(this);
    this.setPhotos = this.setPhotos.bind(this);
    this.setVideos = this.setVideos.bind(this);
    this.setEmojis = this.setEmojis.bind(this);
    this.getImages = this.getImages.bind(this);
    this.readData();
  }
  focusInputWithKeyboard() {
    InteractionManager.runAfterInteractions(() => {
      this.textInput.current.focus();
      this.setState({ isTexting: true });
      this.setState({ intab: "default" });
    });
  }

  async componentDidUpdate() {
    var user = await MainPageController.show();
    if (user) {
      this.setState({ username: user["data"]["username"] });
    }
  }

  blurTextInput() {
    this.textInput.current.blur();
    this.setState({ isTexting: false });
  }
  setEmojis() {
    this.setState({ intab: "Emojis" });
    this.blurTextInput();
  }
  setPhotos() {
    this.setState({ intab: "Photos" });
    this.blurTextInput();
  }
  setVideos() {
    this.setState({ intab: "Videos" });
    this.blurTextInput();
  }
  componentDidMount() {
    this.getImages();
    this.getVideos();
    this.setState({ intab: this.props.route.params.intab });
  }
  getImages = () => {
    return Permissions.askAsync(Permissions.MEDIA_LIBRARY)
      .then(() => {
        return MediaLibrary.getAssetsAsync({ first: 50, mediaType: "photo" });
      })
      .then((result) => {
        this.setState({ images: result.assets });
      });
  };
  getVideos = () => {
    return Permissions.askAsync(Permissions.MEDIA_LIBRARY)
      .then(() => {
        return MediaLibrary.getAssetsAsync({ first: 50, mediaType: "video" });
      })
      .then((result) => {
        this.setState({ videos: result.assets });
      });
  };
  _renderSelectedImages = () => {
    let selectedPhotos = this.state.selectedPhotos;
    let images = this.state.images;
    if (selectedPhotos.length > 0) {
      var listURI = [];
      for (let i = 0; i < images.length; i++) {
        for (let item of selectedPhotos) {
          if (item === i) {
            listURI.push(images[i]);
          }
        }
      }
      return (
        <View style={styles.image_wdyt_box_container}>
          {listURI.length <= 2 ? (
            <Image
              style={styles.upload_images}
              source={{ width: 50 + "%", height: 160, uri: listURI[0].uri }}
            />
          ) : listURI.length == 3 ? (
            <Image
              style={styles.upload_images}
              source={{ width: 66.66 + "%", height: 223, uri: listURI[0].uri }}
            />
          ) : listURI.length == 4 ? (
            <Image
              style={styles.upload_images}
              source={{ width: 60 + "%", height: 208, uri: listURI[0].uri }}
            />
          ) : null}
          <View style={styles.image_wdyt_box_display_column}>
            {listURI.length == 2 ? (
              <Image
                style={styles.upload_images}
                source={{ width: 50 + "%", height: 160, uri: listURI[1].uri }}
              />
            ) : listURI.length == 3 ? (
              <Image
                style={styles.upload_images}
                source={{
                  width: 33.33 + "%",
                  height: 110,
                  uri: listURI[1].uri,
                }}
              />
            ) : listURI.length == 4 ? (
              <Image
                style={styles.upload_images}
                source={{ width: 41 + "%", height: 130, uri: listURI[1].uri }}
              />
            ) : null}
            <View style={styles.image_wdyt_box_display_row}>
              {listURI.length == 3 ? (
                <Image
                  style={styles.upload_images}
                  source={{
                    width: 33.33 + "%",
                    height: 110,
                    uri: listURI[2].uri,
                  }}
                />
              ) : listURI.length == 4 ? (
                <Image
                  style={styles.upload_images}
                  source={{ width: 20 + "%", height: 75, uri: listURI[2].uri }}
                />
              ) : null}
              {listURI.length == 4 ? (
                <Image
                  style={styles.upload_images}
                  source={{ width: 20 + "%", height: 75, uri: listURI[3].uri }}
                />
              ) : null}
            </View>
          </View>
        </View>
      );
    } else return null;
  };
  _renderSelectedVideo = () => {
    let selectedVideos = this.state.selectedVideos;
    let videos = this.state.videos;
    if (selectedVideos.length > 0) {
      var listURI = [];
      for (let i = 0; i < videos.length; i++) {
        for (let item of selectedVideos) {
          if (item === i) {
            listURI.push(videos[i]);
          }
        }
      }
      return (
        <TouchableOpacity style={styles.image_wdyt_box_container}>
          <Image
            style={styles.upload_images}
            source={{ width: 80 + "%", height: 300, uri: listURI[0].uri }}
          />
        </TouchableOpacity>
      );
    } else return null;
  };
  _renderImagesCell = ({ item, index }) => {
    var selectedPhotos = this.state.selectedPhotos;
    let isSelected = false;
    for (let i = 0; i < selectedPhotos.length; i++) {
      if (selectedPhotos[i] == index) {
        isSelected = true;
      }
    }
    return (
      <TouchableOpacity
        style={styles.image_container}
        onPress={() => {
          this._handleImageSelectionMultiple(item, index);
        }}
      >
        <Image style={styles._image} source={{ uri: item.uri }} />
        {isSelected ? (
          <Image
            style={styles._image_ticker}
            source={require("../../../assets/images/timeline/tick.png")}
          />
        ) : (
          <Image
            style={styles._image_ticker}
            source={require("../../../assets/images/timeline/circle.png")}
          />
        )}
      </TouchableOpacity>
    );
  };

  _renderVideosCell = ({ item, index }) => {
    var selectedVideos = this.state.selectedVideos;
    let isSelected = false;
    for (let i = 0; i < selectedVideos.length; i++) {
      if (selectedVideos[i] == index) {
        isSelected = true;
      }
    }
    return (
      <TouchableOpacity
        style={styles.image_container}
        onPress={() => {
          this._handleVideoSelectionMultiple(item, index);
        }}
      >
        <Image style={styles._image} source={{ uri: item.uri }} />
        {isSelected ? (
          <Image
            style={styles._image_ticker}
            source={require("../../../assets/images/timeline/tick.png")}
          />
        ) : (
          <Image
            style={styles._image_ticker}
            source={require("../../../assets/images/timeline/circle.png")}
          />
        )}
        <View style={styles.duration_container}>
          <Text style={styles.duration_text}>
            {Math.floor(item.duration / 60)}:
            {item.duration - 60 * Math.floor(item.duration / 60)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  _handleImageSelectionMultiple = (item, selectedItem) => {
    let selectedPhotos = this.state.selectedPhotos;
    let selectedVideos = this.state.selectedVideos;
    let isItemSelected = false;
    let index = 0;
    for (let i = 0; i < selectedPhotos.length; i++) {
      if (selectedPhotos[i] === selectedItem) {
        isItemSelected = true;
        index = i;
      }
    }
    if (isItemSelected) {
      selectedPhotos.splice(index, 1);
    } else {
      if (
        selectedPhotos.length < MAX_SELECTED_IMAGEs &&
        selectedVideos.length == 0
      ) {
        selectedPhotos.push(selectedItem);
      }
    }
    this.setState({ selectedPhotos: selectedPhotos });
  };
  _handleVideoSelectionMultiple = (item, selectedItem) => {
    let selectedVideos = this.state.selectedVideos;
    let selectedPhotos = this.state.selectedPhotos;
    let isItemSelected = false;
    let index = 0;
    for (let i = 0; i < selectedVideos.length; i++) {
      if (selectedVideos[i] === selectedItem) {
        isItemSelected = true;
        index = i;
      }
    }
    if (isItemSelected) {
      selectedVideos.splice(index, 1);
    } else {
      if (
        selectedVideos.length < MAX_SELECTED_VIDEOs &&
        selectedPhotos.length == 0
      ) {
        selectedVideos.push(selectedItem);
      }
    }
    this.setState({ selectedVideos: selectedVideos });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back_button_image}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("Timeline")}
          >
            <Image
              source={require("../../../assets/images/common/back-button.png")}
              style={styles.back_button_image}
            />
          </TouchableOpacity>
          <Text style={styles.login_title}>Tạo bài viết</Text>
          <TouchableOpacity
            style={styles.button_post}
            onPress={async () => {
              if (this.state.images[0]?.uri){
                console.log(this.state.images[0]?.uri);
                let uri = this.state.images[0]?.uri;
                let myAssetId = uri.slice(5);
                let returnedAssetInfo = await MediaLibrary.getAssetInfoAsync(
                  myAssetId
                );
                console.log(returnedAssetInfo.localUri);
                const base64 = await FileSystem.readAsStringAsync(
                  returnedAssetInfo.localUri,
                  { encoding: "base64" }
                );
                // console.log(base64);
                var res = {
                  described: this.state.textInput,
                  navigation: this.props.navigation,
                  images: ["data:image/jpeg;base64," + base64],
                };
              }
              else {
                var res = {
                  described: this.state.textInput,
                  navigation: this.props.navigation,
                };
              }
              MainPageController.postTimeline(res);
            }}
          >
            <Text style={styles.button_post_text}>ĐĂNG</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.what_do_you_think}
          onPress={this.focusInputWithKeyboard}
        >
          <View style={styles.user_post_info}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: uri_image(this.state.user?.data?.avatar?.fileName),
                }}
                style={styles.user_post_avatar}
              />
            </TouchableOpacity>
            <View style={styles.user_post_info_box}>
              <View style={styles.user_post_status}>
                <TouchableOpacity>
                  <Text style={styles.user_post_name}>
                    {this.state.user?.data?.username}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.user_post_date_and_public}>
                <Text style={styles.user_post_date}>Công Khai</Text>
              </View>
            </View>
          </View>
          <TextInput
            style={styles.what_do_you_think_text}
            value={this.state.textInput}
            placeholder="Bạn đang nghĩ gì?"
            ref={this.textInput}
            multiline={true}
            onPressIn={this.focusInputWithKeyboard}
            onChangeText={(value) => {
              this.setState({
                textInput: value,
              });
            }}
          ></TextInput>
          {this._renderSelectedImages()}
          {this._renderSelectedVideo()}
        </TouchableOpacity>
        <View style={styles.upload_container}>
          <View style={styles.upload_header}>
            <TouchableOpacity onPress={this.setEmojis}>
              <Image
                source={require("../../../assets/images/message/grey_smile.png")}
                style={styles.smile_icon}
              ></Image>
            </TouchableOpacity>
            <View style={styles.right_header_button}>
              <TouchableOpacity onPress={this.setPhotos}>
                <Image
                  source={require("../../../assets/images/timeline/photo.png")}
                  style={styles.smile_icon}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.setVideos}>
                <Image
                  source={require("../../../assets/images/timeline/video.png")}
                  style={styles.smile_icon}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.isTexting ? null : this.state.intab == "Photos" ? (
            <View style={styles.flatlist_container}>
              <FlatList
                style={styles.image_picker}
                data={this.state.images}
                keyExtractor={(item, index) => index.toString()}
                extraData={[this.state, this.props]}
                numColumns={3}
                renderItem={this._renderImagesCell}
              />
            </View>
          ) : this.state.intab == "Videos" ? (
            <View style={styles.flatlist_container}>
              <FlatList
                style={styles.image_picker}
                data={this.state.videos}
                keyExtractor={(item, index) => index.toString()}
                extraData={[this.state, this.props]}
                numColumns={3}
                renderItem={this._renderVideosCell}
              />
            </View>
          ) : this.state.intab == "Emojis" ? null : null}
        </View>
      </SafeAreaView>
    );
  }
}
export default PostStatusScreen;
