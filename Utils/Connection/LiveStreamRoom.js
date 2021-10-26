"use strict";
import React from 'react'
import { Text, View, Image,TouchableOpacity, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = require('./RoomStyle.js');
const DATA=[
    {
        roomid:'1',
        room_thumbnail: require('../Connection/TEMP/7.jpg'),
        room_name: 'Hí anh em',
        room_view:17,
    },
    {
        roomid:'2',
        room_thumbnail: require('../Connection/TEMP/2.jpg'),
        room_name: 'Như trên ảnh',
        room_view:100,
    },
    {
        roomid:'3',
        room_thumbnail: require('../Connection/TEMP/3.jpg'),
        room_name: 'Đẹp trai học giỏi mỗi tội nghiện',
        room_view:17,
    },
    {
        roomid:'4',
        room_thumbnail: require('../Connection/TEMP/4.jpg'),
        room_name: 'Chất chơi người dơi',
        room_view:100,
    },
    {
        roomid:'5',
        room_thumbnail: require('../Connection/TEMP/5.jpg'),
        room_name: 'Cho bố xin cái địa chỉ',
        room_view:17,
    },
    {
        roomid:'6',
        room_thumbnail: require('../Connection/TEMP/1.jpg'),
        room_name: 'Yêu đi chờ chi',
        room_view:100,
    },
    {
        roomid:'7',
        room_thumbnail: require('../Connection/TEMP/6.jpg'),
        room_name: 'Deep Learning',
        room_view:17,
    },
    {
        roomid:'8',
        room_thumbnail: require('../Connection/TEMP/8.png'),
        room_name: 'Chứng khoán online',
        room_view:100,
    },
]
export default function LiveStreamRoom ({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Danh sách các livestream hiện tại</Text>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => {return item.roomid.toString()} }
                style={styles.room_container}
                renderItem={({item})=>{
                    return <TouchableOpacity style={styles.item}
                    onPress={()=>{
                        navigation.navigate("LiveStreamAudience");
                    }}>
                        <Image source={item.room_thumbnail}
                        style={styles.room_thumbnail}/>
                        <Text style={styles.channel_name} numberOfLines={1}>
                            {item.room_name}
                        </Text>
                        <Text style={styles.channel_view}>
                            {item.room_view}
                        </Text>
                    </TouchableOpacity>
                }}
                numColumns={2}
            />
        </View>
    );
}
