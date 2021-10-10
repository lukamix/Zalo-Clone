'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container:{
        marginTop: 25,
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

});