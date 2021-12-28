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
    button_container:{
        borderWidth:1,
        borderColor:GREY_COLOR,
    },
    main_text:{
        marginLeft:10,
        marginTop:10,
        fontSize:20,
        fontWeight:'bold',
    },
    sub_text:{
        marginLeft:10,
        marginBottom:10,
        fontSize:14,
    },
});