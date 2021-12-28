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
    back_button:{

    },
    back_button_image:{
        resizeMode: 'center',
        width: 50,
        height: 50,
    },
    text_view:{
        height: 50,
        marginLeft: 15,
        flexDirection:'row',
        alignItems: 'center',
    },
    sub_title:{
        fontSize:14,
    },
    password_field:{
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,

        borderColor: "gray",
        borderRadius: 5,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    update_button:{
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:40,
        backgroundColor:SUB_COLOR,
        borderRadius:20,
    },
    update_text:{
        color:'white',
    },
    button_container:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },

});