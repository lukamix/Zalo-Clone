"use strict"
import {StyleSheet} from 'react-native'

module.exports= StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        backgroundColor:'rgba(127,127,127,50)',
    },
    header:{
        fontSize:24,
        color:'white',
        fontWeight:'bold',
    },
    room_container:{
        marginLeft:1+"%",
        marginRight:1+"%",
        flex:1,
    },
    item:{
        width:48+"%",
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:1+"%",
        marginRight:1+"%",
    },
    room_thumbnail:{
        borderRadius:5,
        position: 'relative',
        width:100+"%",
        height: 0,
        paddingBottom: 100+"%",
    },
    channel_name:{
        fontSize:18,
        fontWeight:'bold',
        position:'absolute',
        bottom:5,
        left:5,
    },
    channel_view:{
        fontSize:16,
        color:'#910000',
        position:'absolute',
        top:5,
        right:5,
    },
});