'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR,GREY_COLOR} = require("../../../Constants/Constants.js");

module.exports = StyleSheet.create({
    container:{
        marginTop: 25,
        flex: 1,
    },
    search_button:{
        marginLeft: 10,
        marginRight: 10,
    },
    search_button_image:{
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    search_input:{
        flex:.77,
    },
    Voice_button:{
        position:'absolute',
        right:35,
        marginLeft: 10,
        marginRight: 10,
    },
    Voice_button_image:{
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    Add_button:{
        position:'absolute',
        right:0,
        marginLeft: 10,
        marginRight: 10,
    },
    Add_button_image:{
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    body:{
        
    },
    flatlist_header:{
        
    },

    what_you_think_place:{
        height:70,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:.5,
        borderColor:GREY_COLOR,
    },
    what_you_think_avatar:{
        width:45,
        height:45,
        borderWidth:1,
        borderColor:GREY_COLOR,
        borderRadius:40,
        marginLeft:15,
    },
    what_you_think:{
        height:40,
        marginLeft:10,
        marginRight:10,
        flex: 1,
        borderColor:GREY_COLOR,
        borderWidth:1,
        borderRadius:50,
        justifyContent:'center',
    },
    what_you_think_text:{
        marginLeft:20,
        fontSize:20,
    },

    what_you_can_do:{
        height:70,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:5,
        borderBottomColor:GREY_COLOR,
    },
    live_streaming_place:{
        flex:1,
        borderRightWidth:.2,
        borderLeftColor:GREY_COLOR,
    },
    live_streaming:{
        flexDirection:'row',
        alignItems:'center',
    },
    live_stream_image:{
        marginLeft:15,
        width:30,
        height:30,
    },
    live_stream_text:{
        marginLeft:5,
        marginRight:15,
    },
    image_place:{
        flex:.6,
        borderRightWidth:.2,
        borderLeftColor:GREY_COLOR,
    },
    image:{
        flexDirection:'row',
        alignItems:'center',
    },
    image_image:{
        marginLeft:15,
        width:30,
        height:30,
    },
    image_text:{
        marginLeft:5,
        marginRight:15,
    },
    video_place:{
        flex:.7,
        marginRight:10,
    },
    video:{
        flexDirection:'row',
        alignItems:'center',
    },
    video_image:{
        marginLeft:15,
        width:30,
        height:30,
    },
    video_text:{
        marginLeft:5,
        marginRight:15,
    },

    story_place:{
        height:185,
        flexDirection:'row',
        borderBottomWidth:10,
        borderBottomColor:GREY_COLOR,
    },
    create_story:{
        alignItems:'center',
        width:100,
        height:150,
        marginTop:15,
        marginLeft:15,
        borderWidth:1,
        borderColor:GREY_COLOR,
        borderRadius:20,
        backgroundColor:'#EFF4F4',
    },
    create_story_avatar_image:{
        borderTopWidth:1,
        marginTop:3,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width:96,
        height:96,
        resizeMode:'contain'
    },
    add_story_button:{
        alignSelf: 'center',
        bottom: '20%',
        position:'absolute',
        width:30,
        height:30,
    },
    create_story_text:{
        position:'absolute',
        bottom:0,
    },
    your_story:{
        alignItems:'center',
        width:100,
        height:150,
        marginTop:15,
        marginLeft:5,
        borderWidth:1,
        borderColor:GREY_COLOR,
        borderRadius:20,
        backgroundColor:'#EFF4F4',
    },
    your_story_image:{
        borderTopWidth:1,
        marginTop:3,
        borderRadius:20,
        width:96,
        height:143,
        resizeMode:'stretch'
    },
    your_story_text:{
        position:'absolute',
        bottom:0,
    },
    friend_story:{
        alignItems:'center',
        width:100,
        height:150,
        marginTop:15,
        marginLeft:5,
        borderWidth:1,
        borderColor:GREY_COLOR,
        borderRadius:20,
        backgroundColor:'#EFF4F4',
    },
    friend_story_image:{
        borderTopWidth:1,
        marginTop:3,
        borderRadius:20,
        width:96,
        height:143,
        resizeMode:'stretch'
    },
    friend_story_text:{
        position:'absolute',
        bottom:0,
    },
    a_post:{

    },
});