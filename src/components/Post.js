import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {width, height} from '../utilities/constants'

const Post = ({post}) => {

    console.log("hey post is: ", post)
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Image style={styles.userPic} source={{uri: post.userPicture}} />
                <Text>{post.username}</Text>
            </View>
            <Image style={styles.picture} source= {{uri: post.picture}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        padding: 10
    },
    userPic:{
        width: 45, 
        height: 45,
        marginRight: 10,
    },
    username: {
        fontSize: 17,
        fontWeight: "600"
    },
    picture:{
        height: height / 2
    }
})

export default Post