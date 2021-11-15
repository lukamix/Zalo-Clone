"use strict";
import { StyleSheet } from "react-native";
const {MAIN_COLOR,SUB_COLOR, GREY_COLOR} = require("../../../Constants/Constants.js");

module.exports = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        height: 60,
        backgroundColor: '#F048B8',
        flexDirection: 'row',
        alignItems: 'center',
    },
    login_title:{
        color: 'white',
        fontSize: 16,
    },
    button_post:{
        position:'absolute',
        right:20,
        borderWidth:1,
        borderRadius:5,
        width:69,
        height:36,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GREY_COLOR,
    },
    button_post_text:{
        fontSize:16,
        color:'white',
    },
    back_button:{

    },
    back_button_image:{
        resizeMode: 'center',
        width: 50,
        height: 50,
    },
    what_do_you_think:{
        height:45+"%",
        marginLeft:15,
        marginRight:15,
    },
    what_do_you_think_text:{
    },
    image_wdyt_box_container:{
        flexDirection:'row',
    },
    upload_images:{
        marginLeft:3,
        marginTop:3,
    },
    image_wdyt_box_display_column:{
        width:100+"%",
        flexDirection:'column',
    },
    image_wdyt_box_display_row:{
        width:100+"%",
        flexDirection:'row',
    },
    user_post_avatar:{
        width:50,
        height:50,
        borderWidth:.251,
        borderColor:GREY_COLOR,
        borderRadius:40,
    },
    user_post_info:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
    },
    user_post_info_box:{
        marginLeft:10,
    },
    user_post_status:{
        flexDirection:'row',
        alignItems:'baseline',
    },
    user_post_name:{
        fontSize:16,
        fontWeight:'bold',
    },
    user_post_date_and_public:{
        flexDirection:'row',
    },
    user_post_date:{
        fontSize:15,
    },
    upload_container:{
        width:100+"%",
        position:'absolute',
        bottom:0,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:GREY_COLOR,
        borderBottomColor:GREY_COLOR,
        marginTop:10,
    },
    upload_header:{
        marginLeft:15,
        width:100+"%",
        height:50,
        flexDirection:'row',
        alignItems:'center',
    },
    smile_icon:{
        width:30,
        height:30,
        marginLeft:5,
        marginRight:5,
    },
    right_header_button:{
        position:'absolute',
        right:15,
        flexDirection:'row',
    },
    image_picker:{
        width:'100%',
    },
    flatlist_container:{
        width:'100%',
        height:300,
    },
    image_container:{
        width: '32%',
        height: 120,
        marginLeft:'1%',
        marginTop:5,
        borderWidth:1,
        borderColor:GREY_COLOR,
    },
    _image:{
        width: '100%',
        height: '100%',
    },
    _image_ticker:{
        top:3,
        left:3,
        position:'absolute',
        width:20,
        height:20,
    },
    duration_container:{
        position:'absolute',
        bottom:5,
        right:5,
        backgroundColor:'#696969',
        borderRadius:15,
    },
    duration_text:{
        marginLeft:5,
        marginRight:5,
        color:'white',
        fontWeight:'bold',
        fontSize:13,
    },
})