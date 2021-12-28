'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR,GREY_COLOR} = require("../../../Constants/Constants.js");

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
        marginTop:15,
    },
    body_tab:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:50,
        marginRight:50,
        borderWidth:1,
        borderRadius:5,
        borderColor:MAIN_COLOR,
        overflow:'hidden',
    },
    tabBar:{

    },
    //
    flatlist:{
        marginTop:10,
    },
    header_phonebook_flatlist:{
        borderStyle:'dashed',
        borderBottomColor:SUB_COLOR,
        borderBottomWidth:5,
    },
    footer_phonebook_flatlist:{
        height:130,
        width:130,
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:7,
        marginBottom:7,
        marginLeft:30,
        marginRight:5,
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:50,
    },  
    fullname:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:10,
    },
    friend_request_number:{
        width:20,
        height:20,
        backgroundColor:'#FF00DC',
        borderRadius:10,
        position:'absolute',
        left:40,
        bottom:40,
        alignItems:'center',
        justifyContent:'center',
    },
    friend_request_number_text:{
        color:'#FFFFFF',
        textAlign: 'center',
        fontSize:10,
    },
    online:{
        width:12,
        height:12,
        backgroundColor:'#24FF00',
        borderRadius:10,
        position:'absolute',
        left:45,
        top:48,
    },
    offline:{
        width:12,
        height:12,
        backgroundColor:'#9EA19C',
        borderRadius:10,
        position:'absolute',
        left:45,
        top:48,
    },
    search_dropdown_container:{
        top:60,
        left:40,
        position:'absolute',
        width:80+"%",
        height:350,
        backgroundColor:GREY_COLOR,
    },
    search_result_container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:GREY_COLOR,
        height:70,
    },
    search_result_avatar:{
        width:50,
        height:50,
        borderRadius:20,
    },
    search_result_text:{
        marginLeft:20,
        fontSize:24,
    },
});