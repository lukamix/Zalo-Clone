'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR} = require("../../../Constants/Constants.js");

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
        marginTop:15,
    },
    friend_request:{
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        flexDirection:'row',
    },
    friend_request_image:{
        width:56,
        height:35,
    },
    friend_request_text:{
        marginLeft:36,
        fontSize:25,
        color:MAIN_COLOR,
    },
    follower_image:{
        marginLeft:15,
        width:40,
        height:40,
    },
    black_list_image:{
        marginLeft:15,
        width:43,
        height:32,
    },
    favorite_friend_image:{
        marginLeft:15,
        width:35,
        height:33,
    },
    all_friend_image:{
        marginTop:2,
        marginLeft:8,
        width:50,
        height:26,
    },
    may_be_you_know_image:{
        marginLeft:15,
        width:40,
        height:35,
    },
});