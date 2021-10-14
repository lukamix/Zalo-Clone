'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR,GREY_COLOR} = require("../../../Constants/Constants.js");

module.exports = StyleSheet.create({
    container:{

    },
    username_and_status:{
        marginLeft:10,
    },
    useravatar:{
        width:40,
        height:40,
        borderRadius:50,
    },
    username:{
        width:140,
        borderColor:'black',
        color: 'white',
        fontSize: 17,
    },
    userstatus:{
        color: '#FFC4F4',
        fontSize: 14,
    },
    message_icon:{
        flex:1,
        justifyContent:'space-evenly',
        flexDirection:'row',
    },
    phone_icon:{
        width:30,
        height:30,
    },
    info_icon:{
        width:28,
        height:28,
    },
    all_message:{
        marginLeft:20,
        marginRight:20,
    },
    message_box:{
        paddingLeft:10,
        paddingTop:5,
        paddingBottom:5,
        marginBottom:10,
        borderRadius:10,
        flexWrap:'wrap',
    },




    message_footer:{
        height:40,
        backgroundColor:MAIN_COLOR,
        flexDirection:'row',
        alignItems:'center',
    },
    message_input_container:{
        borderRadius:10,
        marginLeft:10,
        height:32,
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
    },
    message_input:{
        flex:1
    },
    message_input_button:{
        marginTop:1,
        flexDirection:'row',
        position:'absolute',
        right:0,
    },
    smile_button:{
        marginRight:5,
        width:28,
        height:28,
    },
    location_button:{
        marginRight:5,
        width:24,
        height:28,
    },
    record_button:{
        marginRight:5,
        width:20,
        height:28,
    },
    send_button:{
        marginLeft:10,
        marginRight:10,
        width:30,
        height:30,
    },  
});