'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container:{
        marginTop: 25,
        flex:1,
    },
    header:{
        backgroundColor:'royalblue',
        flex: .1,
        flexDirection:'row',
        alignItems: 'center',
    },
    login_title:{
        color:'white',
        fontSize:16,
    },
    back_button:{

    },
    back_button_image:{
        resizeMode:'center',
        width:50,
        height:50,
    },
    sublogin_text_view:{
        flex:.08,
        marginLeft:15,
        flexDirection:'row',
        alignItems:'center',
    },
    login_field: {
        marginLeft: 25,
        marginRight: 25,
        marginTop:15,
        borderColor: "gray",
        borderRadius: 5,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      textInput: {
        height: 40,
        width: "90%",
      },
      closeButton: {
        height: 30,
        width: 30,
      },
      closeButtonParent: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
      },
      password_field: {
        marginLeft: 25,
        marginRight: 25,
        marginTop:15,
        borderColor: "gray",
        borderRadius: 5,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      forget_password_field: {
        marginLeft: 25,
        marginRight: 25,
        marginTop:30,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      forget_password_text:{
        color:'royalblue',
      },
      next_button_field:{
        flex:.8,
      },
      next_button:{
        borderRadius:100,
        position: 'absolute',
        right: 30,
        bottom: 30,
      },
      next_button_image:{
            width:60,
            height:60,
      },
});