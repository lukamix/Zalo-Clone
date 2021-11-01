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
        borderRadius:50,
        resizeMode:'cover'
    },
    userproperties:{
        flex :1,
        marginLeft:30,
    },
    username:{
        fontSize:18,
        color:'#000000',
    },
    message:{
        marginTop:5,
        fontSize:15,
        color:'#767676',
    },
    status:{
        flexDirection:'row',
    },
    statusText:{
        position:'absolute',
        right:10,
        fontSize:15,
        color:SUB_COLOR,
    },
    online:{
        width:12,
        height:12,
        backgroundColor:'#24FF00',
        borderRadius:10,
        position:'absolute',
        left:65,
        top:61,
    },
    offline:{
        width:12,
        height:12,
        backgroundColor:'#9EA19C',
        borderRadius:10,
        position:'absolute',
        left:65,
        top:61,
    },
});