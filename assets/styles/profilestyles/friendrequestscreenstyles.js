'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR,GREY_COLOR} = require("../../../Constants/Constants.js");
module.exports = StyleSheet.create({
    container:{
        
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
    setting_button_container:{
        flex:1,
        borderRadius:20,
        position:'absolute',
        bottom:10,
        right:10,
    },
    setting_button:{
        width:30,
        height:30,
    },
    back_button:{

    },
    back_button_image:{
        resizeMode: 'center',
        width: 50,
        height: 50,
    },
    body:{

    },
    render_item:{
        marginLeft:10,
        flexDirection:"column",
    },
    request_friend_head:{
        alignItems:'center',
        height:70,
        flexDirection:'row',
    },
    request_friend_avatar:{
        width:50,
        height:50,
        borderRadius:20,
    },
    info_container:{
        width:50+"%",
        marginLeft:20,
    },
    request_friend_name:{
        fontSize:20,
    },
    button_container:{
        width:30+"%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },  
    accept_button:{
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:30,
        backgroundColor:SUB_COLOR,
        borderRadius:20,
    },
    accept_button_text:{
        color:'white',
    },
    decline_button:{

    },
    decline_button_text:{
        fontSize:20,
    },
    textInput: {
        height: 40,
        width: "90%",
    },
    request_friend_tail:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        height:36,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderWidth:1,
    },
    request_message:{
        marginLeft:5,
        fontSize:20,
        color:"#767676",
    },
});