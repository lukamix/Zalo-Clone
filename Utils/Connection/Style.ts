import {Dimensions, StyleSheet} from 'react-native'

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default StyleSheet.create({
    max: {
        flex: 1,
        backgroundColor:'#940078',
    },

    header:{
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    livestream_info:{
        backgroundColor:'rgba(137, 137, 137, 0.5)',
        borderWidth:1,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        flexDirection:'row',
        alignItems:'center',
    },
    livestream_room_image:{
        marginTop:2,
        marginBottom:2,
        width:40,
        height:40,
        borderRadius:10,
    },
    zoom_info:{
        marginLeft:5,
    },
    zoom_name:{
        fontWeight:'bold',
        fontSize:17,
        color:'#ffffff',
    },
    zoom_id:{
        color:'#E1E1E1',
        fontSize:12,
    },
    follow_button:{

    },
    follow_button_image:{
        marginRight:5,
        marginLeft:10,
        borderRadius:20,
        width:30,
        height:30,
    },
    share_button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(137, 137, 137, 0.5)',
        borderRadius:20,
        width:36,
        height:36,
    },
    share_button_image:{
        borderRadius:20,
        width:25,
        height:25,
    },

    comment_container:{
        flex:1,
        position: 'absolute',
        bottom:10,
        marginLeft:10,
    },

    chat_container:{
        marginRight:100,
        marginBottom:7,
        height:200,
        borderWidth:1,
    },
    footer:{
        flexDirection:'row',
    },
    footer_message:{
        backgroundColor:'rgba(100, 100, 100, 0.5)',
        borderRadius:20,
    },
    footer_message_image:{
        width:40,
        height:40,
    },
    all_message:{
        flexDirection:'row',
    },
    user_comment:{
        height:20,
        flexDirection:'row',
        alignItems:'flex-start',
    },
    user_comment_image:{
        width:18,
        height:18,
        borderRadius:10,
    },
    user_comment_name:{
        marginLeft:5,
        marginRight:5,
        fontSize:18,
    },
    message_box:{
        
        borderRadius:20,
        paddingLeft:5,
        paddingTop:5,
        paddingRight:5,
        paddingBottom:5,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(137, 137, 137, 0.5)',
        marginLeft:7,
        fontSize:18,
    },

    buttonHolder: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    start_call_button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#04FF30',
        borderRadius: 25,
    },
    end_call_button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#FF0404',
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
    },
    fullView: {
        zIndex:-1,
        position:'absolute',
        width: dimensions.width,
        height: dimensions.height,
    },
    remoteContainer: {
        width: '100%',
        height: 150,
        position: 'absolute',
        top: 5
    },
    remote: {
        width: dimensions.width,
        height: dimensions.height,
        marginHorizontal: 2.5
    },
    noUserText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#0093E9',
    },

    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0093E9',
        borderRadius: 25,
    },
})