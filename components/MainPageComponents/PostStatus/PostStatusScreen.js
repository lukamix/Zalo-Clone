import React from 'react';
import {
  View,Image,Text,InteractionManager,PermissionsAndroid, Component,SafeAreaView,TouchableOpacity,TextInput,FlatList
} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

var styles = require('../../../assets/styles/poststatusstyles/poststatusstyles.js');
const MAX_SELECTED_IMAGEs = 4
const MAX_SELECTED_VIDEOs = 1
const MAX_VIDEO_SIZE = 20000000 //(Bytes)
const MAX_IMAGE_SIZE = 5000000  //(Bytes)
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Permission",
        message:
          "Cho bố xin địa chỉ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      requestREADPermission();
    } else {
      console.log("permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
const requestREADPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Permission",
        message:
          "Cho bố xin địa chỉ 1",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      requestWritePermission();
    } else {
      console.log("permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
const requestWritePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Permission",
        message:
          "Cho bố xin địa chỉ 2",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('request complete')
    } else {
      console.log("permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
class PostStatusScreen extends React.Component {
  state={
    textInput:'',
    isTexting:false,
    images:'',
    videos:'',
    intab:'default',
    selectedPhotos:[],
    selectedVideos:[],
  };
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.focusInputWithKeyboard = this.focusInputWithKeyboard.bind(this);
    this.blurTextInput = this.blurTextInput.bind(this);
    this.setPhotos = this.setPhotos.bind(this);
    this.setVideos = this.setVideos.bind(this);
    this.setEmojis = this.setEmojis.bind(this);
  }
  focusInputWithKeyboard() {
    InteractionManager.runAfterInteractions(() => {
      this.textInput.current.focus();
      this.setState({isTexting:true});
      this.setState({intab:"default"});
    });
  }
  blurTextInput(){
    this.textInput.current.blur();
    this.setState({isTexting:false});
  }
  setEmojis(){
    this.setState({intab:"Emojis"});
    this.blurTextInput();
  }
  setPhotos(){
    this.setState({intab:"Photos"});
    this.blurTextInput();
  }
  setVideos(){
    this.setState({intab:"Videos"});
    this.blurTextInput();
  }
  async componentDidMount(){
      
      CameraRoll.getPhotos({
        first: 100,
        assetType: 'Photos',
      })
      .then(res => {
        this.setState({ images: res.edges });
      })
      .catch((error) => {
         console.log(error);
      });
      CameraRoll.getPhotos({
        first: 100,
        assetType: 'Videos',
        include:['filename','location','playableDuration','fileSize'],
      })
      .then(res => {
        this.setState({ videos: res.edges });
      })
      .catch((error) => {
         console.log(error);
      });
      this.setState({intab:this.props.route.params.intab});
  }
  _renderSelectedImages = () => {
    let selectedPhotos = this.state.selectedPhotos;
    let images = this.state.images;
    if(selectedPhotos.length>0){
      var listURI =[];
      for (let i=0;i< images.length;i++){
        for(let item of selectedPhotos){
          if(item===i){
            listURI.push(images[i]);
          }
        }
      }
      return(
        <View style={styles.image_wdyt_box_container}>
          {
            listURI.length<=2?<Image style={styles.upload_images} source = 
            {{width:50+"%",height:160,uri:listURI[0].node.image.uri}}/>:
            listURI.length==3?<Image style={styles.upload_images} source = 
            {{width:66.66+"%",height:223,uri:listURI[0].node.image.uri}}/>:
            listURI.length==4?<Image style={styles.upload_images} source = 
            {{width:60+"%",height:208,uri:listURI[0].node.image.uri}}/>:null
          }
          <View style= {styles.image_wdyt_box_display_column}>
          {
            listURI.length==2?<Image style={styles.upload_images} source = 
            {{width:50+"%",height:160,uri:listURI[1].node.image.uri}}/>:
            listURI.length==3?<Image style={styles.upload_images} source = 
            {{width:33.33+"%",height:110,uri:listURI[1].node.image.uri}}/>:
            listURI.length==4?<Image style={styles.upload_images} source = 
            {{width:41+"%",height:130,uri:listURI[1].node.image.uri}}/>:null
          }
            <View style= {styles.image_wdyt_box_display_row}>
              {
                listURI.length==3?<Image style={styles.upload_images} source = 
                {{width:33.33+"%",height:110,uri:listURI[2].node.image.uri}}/>:
                listURI.length==4?<Image style={styles.upload_images} source = 
                {{width:20+"%",height:75,uri:listURI[2].node.image.uri}}/>:null
              }
              {
                listURI.length==4?<Image style={styles.upload_images} source = 
                {{width:20+"%",height:75,uri:listURI[3].node.image.uri}}/>:null
              }
            </View>
          </View>
        </View>
      )
    }
    else return null;
  }
  _renderSelectedVideo = () =>{
    let selectedVideos = this.state.selectedVideos;
    let videos = this.state.videos;
    if(selectedVideos.length>0){
      var listURI =[];
      for (let i=0;i< videos.length;i++){
        for(let item of selectedVideos){
          if(item===i){
            listURI.push(videos[i]);
          }
        }
      }
      return(
        <TouchableOpacity style={styles.image_wdyt_box_container}>
          <Image style={styles.upload_images} source = 
          {{width:80+"%",height:300,uri:listURI[0].node.image.uri}}/>
        </TouchableOpacity>
      )
    }
    else return null;
  }
  _renderImagesCell = ({ item, index }) => {
    var selectedPhotos = this.state.selectedPhotos;
    let isSelected = false;
    for(let i = 0 ; i<selectedPhotos.length;i++){
      if(selectedPhotos[i]==index){
        isSelected=true;
      }
    }
   return (
      <TouchableOpacity
        style={styles.image_container}
        onPress={() => {
          this._handleImageSelectionMultiple(item,index);
        }}
      >
         <Image style={styles._image} source={{uri: item.node.image.uri}}/>
         {
           isSelected ? 
           <Image style={styles._image_ticker} source={require('../../../assets/images/timeline/tick.png')}/>
           :<Image style={styles._image_ticker} source={require('../../../assets/images/timeline/circle.png')} />
         }
      </TouchableOpacity>
    )
  }
  _renderVideosCell = ({ item, index }) => {
    var selectedVideos = this.state.selectedVideos;
    let isSelected = false;
    for(let i = 0 ; i<selectedVideos.length;i++){
      if(selectedVideos[i]==index){
        isSelected=true;
      }
    }
   return (
      <TouchableOpacity
        style={styles.image_container}
        onPress={() => {
          this._handleVideoSelectionMultiple(item,index);
        }}
      >
         <Image style={styles._image} source={{uri: item.node.image.uri}}/>
         {
           isSelected ? 
           <Image style={styles._image_ticker} source={require('../../../assets/images/timeline/tick.png')}/>
           :<Image style={styles._image_ticker} source={require('../../../assets/images/timeline/circle.png')} />
         }
         <View style = {styles.duration_container}>
           <Text style = {styles.duration_text}>{Math.floor(item.node.image.playableDuration/60)}:{item.node.image.playableDuration-60*Math.floor(item.node.image.playableDuration/60)}</Text>
         </View>
      </TouchableOpacity>
    )
  }
  _handleImageSelectionMultiple = (item,selectedItem) => {
    let selectedPhotos = this.state.selectedPhotos;
      let isItemSelected = false;
      let index = 0;
      for(let i = 0;i<selectedPhotos.length;i++) {
        if(selectedPhotos[i]===selectedItem) {
          isItemSelected = true;
          index = i;
        }
      }
      if (isItemSelected) {
        selectedPhotos.splice(index, 1);
      } else {
        if(selectedPhotos.length<MAX_SELECTED_IMAGEs && item.node.image.fileSize<MAX_IMAGE_SIZE){
          selectedPhotos.push(selectedItem);
        }
      }
      this.setState({ selectedPhotos:selectedPhotos });
  }
  _handleVideoSelectionMultiple = (item,selectedItem) => {
    let selectedVideos = this.state.selectedVideos;
      let isItemSelected = false;
      let index = 0;
      for(let i = 0;i<selectedVideos.length;i++) {
        if(selectedVideos[i]===selectedItem) {
          isItemSelected = true;
          index = i;
        }
      }
      if (isItemSelected) {
        selectedVideos.splice(index, 1);
      } else {
        if(selectedVideos.length<MAX_SELECTED_VIDEOs && item.node.image.fileSize<MAX_VIDEO_SIZE){
          selectedVideos.push(selectedItem);
        }
      }
      this.setState({ selectedVideos:selectedVideos });
  }
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
        </TouchableOpacity >
        <Text style={styles.login_title}>Tạo bài viết</Text>
        <TouchableOpacity style={styles.button_post}>
          <Text style={styles.button_post_text}>ĐĂNG</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.what_do_you_think} 
      onPress={this.focusInputWithKeyboard}>
        <View style={styles.user_post_info}>
            <TouchableOpacity>
                <Image source={require("../../../assets/images/TEMP/duc.jpg")}
                    style={styles.user_post_avatar}/>
            </TouchableOpacity>
            <View style={styles.user_post_info_box}>
                <View style={styles.user_post_status}>
                    <TouchableOpacity>
                        <Text style={styles.user_post_name}>Nguyễn Bá Đức</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.user_post_date_and_public}>
                    <Text style={styles.user_post_date}>
                        Công Khai
                    </Text>
                </View>
            </View>
        </View>
        <TextInput style={styles.what_do_you_think_text}
          value={this.state.textInput}
          placeholder="Bạn đang nghĩ gì?"
          ref={this.textInput}
          multiline={true}
          onPressIn={this.focusInputWithKeyboard}
          onChangeText={(value) => {
            this.setState({
                textInput: value
            })
        }}
        ></TextInput>
        {
          this._renderSelectedImages()
        }
        {
          this._renderSelectedVideo()
        }
      </TouchableOpacity>
      <View style={styles.upload_container}>
          <View style= {styles.upload_header}>
            <TouchableOpacity onPress={
                this.setEmojis
              }>
              <Image source={require('../../../assets/images/message/grey_smile.png')}
                style={styles.smile_icon}
              ></Image>
            </TouchableOpacity>
            <View style={styles.right_header_button}>
              <TouchableOpacity
              onPress={
                requestCameraPermission
              } >
                <Image source={require('../../../assets/images/timeline/photo.png')}
                  style={styles.smile_icon}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={
                requestCameraPermission
              }>
              <Image source={require('../../../assets/images/timeline/video.png')}
                style={styles.smile_icon}
              ></Image>
            </TouchableOpacity>
            </View>
          </View>
          {
            this.state.isTexting?null:
            this.state.intab=="Photos"?
            <View style = {styles.flatlist_container}>
              <FlatList
                    style={styles.image_picker}
                    data={this.state.images}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={[this.state,this.props]}
                    numColumns={3}
                    renderItem={
                      this._renderImagesCell
                    }
              />
            </View>:
            this.state.intab=="Videos"?
            <View style = {styles.flatlist_container}>
              <FlatList
                    style={styles.image_picker}
                    data={this.state.videos}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={[this.state,this.props]}
                    numColumns={3}
                    renderItem={
                      this._renderVideosCell
                    }
              />
            </View>:
            this.state.intab=="Emojis"?null:null
          }
      </View>
    </SafeAreaView>
    );
  }
};
export default PostStatusScreen;
