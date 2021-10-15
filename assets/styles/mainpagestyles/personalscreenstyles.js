'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR} = require("../../../Constants/Constants.js");

module.exports = StyleSheet.create({
    container:{
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
        marginTop: 5,
        marginLeft:10+"%",
    },
    person_container:{
        marginTop:10,
        flexDirection:'row',
        marginRight:10,
    },
    person:{
        width:45,
        height:45,
    },
    person_text:{
        marginTop:10,
        marginLeft:10+"%",
        fontSize:20,
        color: MAIN_COLOR,
    },
    profile:{
        
        width:40,
        height:40,
    },
    protection:{
        width:40,
        height:40,
    },
    password:{
        width:40,
        height:40,
    },
});