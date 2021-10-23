"use strict"
import {StyleSheet} from 'react-native'

module.exports= StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        flex:1,
        backgroundColor:'rgba(127,127,127,50)',
    },
    Host:{
        backgroundColor:'rgba(4,255,48,100)',
    },
    Audience:{
        backgroundColor:'rgba(255,255,48,100)',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:15,
    },
});