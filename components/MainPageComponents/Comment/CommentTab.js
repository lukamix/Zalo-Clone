import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Image,FlatList,TextInput } from "react-native";
const styles = require('../../../assets/styles/commentstles/commentstyles.js')

const DATA_COMMENT=[
  {

  }
]

class CommentTab extends Component {
  state = {
    modalVisible: true,
    MessageSend:"",
    isTexting:false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.viewContainer}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
          style= {styles.modalcontainer}
        >
          <View style={styles.container}>
            <View style={styles.commentHeader}>
              <TouchableOpacity style={styles.commentHeaderLike}>
                <Image style = {styles.liked_image}
                source={require('../../../assets/images/timeline/liked.png')}/>
                <Text style={styles.commentHeader_Text}>Nguyễn Bá Đức và những người k...</Text>
                <Image style = {styles.liked_image}
                source={require('../../../assets/images/timeline/right.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_like}>
                <Image source={require('../../../assets/images/timeline/like.png')}
                style={styles.button_like_image}/>
              </TouchableOpacity>
            </View>
            <View style={styles.commentBody}>
              <FlatList
                    data={DATA_COMMENT}
                    style={styles.flat_list}
                    renderItem={({item})=>{
                        return <View style={styles.comment_item}>
                            <TouchableOpacity style={styles.item_avatar_touchable}>
                              <Image style={styles.item_avatar} source={require('../../../assets/images/TEMP/duc.jpg')}
                              ></Image>
                            </TouchableOpacity>
                            <View style={styles.comment_container}>
                              <View style= {styles.comment_contents}>
                                <TouchableOpacity>
                                  <Text style={styles.comment_user}>Nguyễn Bá Đức</Text>
                                </TouchableOpacity>
                                <Text style={styles.comment_contents_text}>Một nụ hồng một nụ hồng dành cho mắt nai, 
                                em thơ ngây bước đi trên con đường dài</Text>
                              </View>
                              <View style={styles.comment_button_container}>
                                <Text style={styles.item_time}>1 giờ</Text>
                                <TouchableOpacity>
                                  <Text style={styles.item_liked_button}>Thích</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                  <Text style={styles.item_like_button}>Trả lời</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                        </View>
                    }}
                    keyExtractor={(item, index) => index.toString() }
                />
              <View style={styles.write_comment_container}>
                <TouchableOpacity>
                  <Image source={require('../../../assets/images/timeline/camera.png')}
                  style={styles.camera_button}/>
                </TouchableOpacity>
                
                <View style={styles.textinput_container}>
                
                <TextInput placeholder="Viết bình luận..." 
                    style={styles.message_input}
                    value={this.state.MessageSend}
                    ref={this.textInput}
                    onFocus ={()=> {
                        this.setState({
                            isrenderEmoji:false,
                        });
                        console.log('focus');
                      }
                    }
                    onChangeText={(value) => {
                        this.setState({
                            MessageSend: value
                        })
                        if(value.length>0){
                            this.setState({
                                isTexting: true
                            })
                        }
                        else {
                            this.setState({
                                isTexting: false
                            })
                        }
                    }}
                    ></TextInput>
                    <TouchableOpacity style={styles.smile_button}>
                      <Image source={require('../../../assets/images/message/smile.png')}
                      style={styles.smile_button_image}/>
                    </TouchableOpacity>
                    </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default CommentTab;