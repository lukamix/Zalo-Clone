'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR,BLUE_COLOR,RED_COLOR} = require("../../../Constants/Constants.js");

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
        marginLeft:30,
    },
    friend_around:{

    },
    friend_around_text:{
        
        color:BLUE_COLOR,
        fontSize:25,
        fontWeight:'bold',
    },
    friend_around_touch:{
        marginTop:5,
        borderStyle: 'dotted',
    },  
    friend_around_image:{
        borderRadius:10,
        width:90+"%",
        height:150,
    },
    dating_now:{

    },
    dating_now_text:{
        
        color:RED_COLOR,
        fontSize:25,
        fontWeight:'bold',
    },
    dating_now_touch:{
        marginTop:5,
    },  
    dating_now_image:{
        borderRadius:10,
        width:90+"%",
        height:150,
    },
    service:{
        width:90+"%",
        marginTop:30,
        borderWidth:1,
        borderColor:RED_COLOR,
    },
});