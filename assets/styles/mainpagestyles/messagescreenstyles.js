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
    QR_button:{
        position:'absolute',
        right:35,
        marginLeft: 10,
        marginRight: 10,
    },
    QR_button_image:{
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

    }, 
    FlatMessUnit:{
        width:100+"%",
        borderBottomColor:SUB_COLOR,
        backgroundColor:'#FFFFFF',
        borderBottomWidth:.5,
        flexDirection:'row',
        alignItems:'center',
    },
    FlatMessUnitImage:{
        marginTop:15,
        marginBottom:15,
        marginLeft:20,
        width:60,
        height:60,
        borderRadius:100,
        resizeMode: 'center'
    },
    userproperties:{
        flex :1,
        marginLeft:30,
    },
    username:{
        fontSize:15,
        color:MAIN_COLOR,
    },
    message:{
        marginTop:5,
        fontSize:12,
        color:SUB_COLOR,
    },
    status:{
        flexDirection:'row',
    },
    statusText:{
        position:'absolute',
        right:10,
        fontSize:14,
        color:SUB_COLOR,
    },
    
});