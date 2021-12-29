'use strict';
import { StyleSheet} from 'react-native';
const {MAIN_COLOR,SUB_COLOR,GREY_COLOR} = require("../../../Constants/Constants.js");

module.exports = StyleSheet.create({
    viewContainer:{
      flex: 1
    },
    modalcontainer:{

    },
    container:{
      height:100+"%",
      backgroundColor:'white',
      borderRadius:15,
    },
    commentHeader:{
      height:50,
      borderBottomWidth:1,
      borderBottomColor:GREY_COLOR,
      flexDirection:'row',
    },
    liked_image:{
      width:25,
      height:25,
    },  
    commentHeaderLike:{
      marginLeft:5,
      flexDirection:'row',
      alignItems:'center',
    },
    commentHeader_Text:{
      fontWeight:'bold',
      marginLeft:5,
      fontSize:17,
    },
    button_like:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    button_like_image:{
      width:30,
      height:30,
    },


    flat_list:{
      marginTop:16,
      flex:1,
    },
    commentBody:{
      flex:1,
    },
    comment_item:{
      flexDirection:'row',
    },
    item_avatar_touchable:{
      marginLeft:15,
    },
    item_avatar:{
      width:50,
      height:50,
      borderRadius:50,
    },
    comment_container:{
      marginLeft:5,
      flex:1,
    },
    comment_contents:{
      marginRight:10,
      backgroundColor:SUB_COLOR,
      borderRadius:15,
    },
    comment_user:{
      fontWeight:'bold',
      fontSize:16,
      marginTop:5,
      marginLeft:10,
    },
    comment_contents_text:{
      flex: 1, 
      fontSize:16,
      flexWrap: 'wrap',
      marginLeft:10,
      marginBottom:5,
    },
    comment_button_container:{
      marginTop:5,
      marginLeft:5,
      flexDirection:'row',
    },
    item_time:{
      color:GREY_COLOR,
    },
    item_like_button:{
      marginLeft:15,
      fontWeight:'bold',
      color:GREY_COLOR,
    },
    item_liked_button:{
      marginLeft:15,
      fontWeight:'bold',
      color:SUB_COLOR,
    },



    write_comment_container:{
      height:50,
      alignItems:'center',
      flexDirection:'row',
    },
    camera_button:{
      width:30,
      height:30,
      marginLeft:20,
      marginRight:20,
    },
    message_input:{
      marginLeft:10,
      fontSize:16,
      flexWrap:'wrap',
    },
    textinput_container:{
      flex:1,
      height:40,
      marginRight:10,
      backgroundColor:SUB_COLOR,
      borderRadius:20,
      flexDirection:'row',
      alignItems:'center',
    },
    smile_button:{
      width:30,
      height:30,
      position:'absolute',
      right:10,
    },
    smile_button_image:{
      width:30,
      height:30,
    },
})