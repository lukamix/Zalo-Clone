"use strict";
import React, {Component} from 'react'
import {Platform, ScrollView, Text,Image , TouchableOpacity, View, PermissionsAndroid} from 'react-native'
// Import the RtcEngine class and view rendering components into your project.
import RtcEngine, {RtcLocalView, RtcRemoteView, VideoRenderMode, ChannelProfile,ClientRole,} from 'react-native-agora'
import { FlatList } from 'react-native-gesture-handler';
// Import the UI styles.
import styles from './Style.js'
import { AppID, Default_Channel_Name, Token_Daily,} from './AppInfo';

const DATA=[
    {
        content:"Chào em, anh đứng đây từ chiều hôm mưa anh đưa chiếc ô, đã làm trái tim em có cầu vồng",
        receiverid:2,
        messageid:1,
    },
]

const requestCameraAndAudioPermission = async () =>{
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ])
        if (
            granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
            && granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
            console.log('You can use the cameras & mic')
        } else {
            console.log('Permission denied')
        }
    } catch (err) {
        console.warn(err)
    }
}

// Create an App component, which extends the properties of the Pros and State interfaces.
export default class LiveStream extends Component{
    _engine
    // Add a constructor，and initialize this.state. You need:
    // Replace yourAppId with the App ID of your Agora project.
    // Replace yourChannel with the channel name that you want to join.
    // Replace yourToken with the token that you generated using the App ID and channel name above.
    constructor(props) {
        super(props);
        this.state = {
            appId: AppID,
            channelName: Default_Channel_Name,
            token: Token_Daily,
            joinSucceed: false,
            peerIds: [],
        }
        if (Platform.OS === 'android') {
            requestCameraAndAudioPermission().then(() => {
                console.log('requested!')
            })
        }
    }
    // Other code. See step 5 to step 10.
    // Mount the App component into the DOM.
componentDidMount() {
    this.init()
}
// Pass in your App ID through this.state, create and initialize an RtcEngine object.
init = async () => {
    const {appId} = this.state
    this._engine = await RtcEngine.create(appId)
    // Enable the video module.
    await this._engine.enableVideo()
    // Enable the local video preview.
    await this._engine.startPreview()
    // Set the channel profile as live streaming.
    await this._engine.setChannelProfile(ChannelProfile.LiveBroadcasting)
    // Set the usr role as host.
    await this._engine.setClientRole(ClientRole.Broadcaster)

    // Listen for the UserJoined callback.
    // This callback occurs when the remote user successfully joins the channel.
    this._engine.addListener('UserJoined', (uid, elapsed) => {
        console.log('UserJoined', uid, elapsed)
        const {peerIds} = this.state
        if (peerIds.indexOf(uid) === -1) {
            this.setState({
                peerIds: [...peerIds, uid]
            })
        }
    })

    // Listen for the UserOffline callback.
    // This callback occurs when the remote user leaves the channel or drops offline.
    this._engine.addListener('UserOffline', (uid, reason) => {
        console.log('UserOffline', uid, reason)
        const {peerIds} = this.state
        this.setState({
            // Remove peer ID from state array
            peerIds: peerIds.filter(id => id !== uid)
        })
    })

    // Listen for the JoinChannelSuccess callback.
    // This callback occurs when the local user successfully joins the channel.
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
        console.log('JoinChannelSuccess', channel, uid, elapsed)
        this.setState({
            joinSucceed: true
        })
    })
    }
    // Pass in your token and channel name through this.state.token and this.state.channelName.
    // Set the ID of the local user, which is an integer and should be unique. If you set uid as 0,
    // the SDK assigns a user ID for the local user and returns it in the JoinChannelSuccess callback.

    startCall = async () => {
        await this._engine?.joinChannel(this.state.token, this.state.channelName, null, 0)
    }
    // Set the rendering mode of the video view as Hidden, 
// which uniformly scales the video until it fills the visible boundaries.
_renderVideos = () => {
    const {joinSucceed} = this.state
    return joinSucceed ? (
        <View style={styles.fullView}>
            <RtcLocalView.SurfaceView
                style={styles.max}
                channelId={this.state.channelName}
                renderMode={VideoRenderMode.Hidden}/>
            {this._renderRemoteVideos()}
        </View>
    ) : null
}
// Set the rendering mode of the video view as Hidden, 
// which uniformly scales the video until it fills the visible boundaries.
_renderRemoteVideos = () => {
    console.log('...');
    const {peerIds} = this.state
    return (
        <ScrollView
            style={styles.remoteContainer}
            contentContainerStyle={{paddingHorizontal: 2.5}}
            horizontal={true}>
            {peerIds.map((value, index, array) => {
                return (
                    <RtcRemoteView.SurfaceView
                        style={styles.remote}
                        uid={value}
                        channelId={this.state.channelName}
                        renderMode={VideoRenderMode.Hidden}
                        zOrderMediaOverlay={true}/>
                )
            })}
        </ScrollView>
    )
}
endCall = async () => {
    await this._engine?.leaveChannel()
    this.setState({peerIds: [], joinSucceed: false})
}
render() {
    return (
        <View style={styles.max}>
                        <View style={styles.header}>
                <TouchableOpacity style= {styles.livestream_info}>
                    <Image source={require('../../assets/images/common/unnamed.png')}
                        style={styles.livestream_room_image}/>
                    <View style={styles.zoom_info}>
                        <Text style={styles.zoom_name}>#YÊU ĐI CHỜ CHI</Text>
                        <Text style={styles.zoom_id}>ID: Koy11026789</Text>
                    </View>
                    <TouchableOpacity style={styles.follow_button}
                    onPress={()=>{
    
                    }}>
                        <Image source={require('../../assets/images/common/round-add-button.png')}
                            style={styles.follow_button_image}/>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.share_button}>
                    <Image source={require('../../assets/images/common/share.png')}
                    style={styles.share_button_image}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.share_button}>
                    <Image source={require('../../assets/images/common/minimize.png')}
                    style={styles.share_button_image}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.share_button}>
                    <Image source={require('../../assets/images/common/close_1.png')}
                    style={styles.share_button_image}/>
                </TouchableOpacity>
                
            </View>
            {this._renderVideos()}
            <View style={styles.comment_container}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => {return item.messageid.toString()} }
                    style={styles.chat_container}
                    renderItem={({item})=>{
                        return <View style={styles.all_message}>
                            <Text style={styles.message_box}>
                                <TouchableOpacity style={styles.user_comment}>
                                    <Image source={require('../../assets/images/common/unnamed.png')}
                                        style={styles.user_comment_image}/>
                                    <Text style={styles.user_comment_name}>
                                        Mark:
                                    </Text>
                                </TouchableOpacity>
                                {item.content}
                            </Text>
                        </View>
                    }}
                    inverted={true}
                />
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footer_message}>
                        <Image source={require('../../assets/images/common/karaoke.png')}
                            style={styles.footer_message_image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer_message}>
                        <Image source={require('../../assets/images/common/list.png')}
                            style={styles.footer_message_image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer_message}>
                        <Image source={require('../../assets/images/common/Message_1.png')}
                            style={styles.footer_message_image}/>
                    </TouchableOpacity>
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity
                            onPress={this.startCall}
                            style={styles.start_call_button}>
                            <Text style={styles.buttonText}> Start Call </Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity
                            onPress={this.endCall}
                            style={styles.end_call_button}>
                            <Text style={styles.buttonText}> End Call </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
}