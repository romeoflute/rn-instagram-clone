import React, { useState } from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {width, height} from '../utilities/constants'
import { Ionicons } from '@expo/vector-icons';

const Post = ({post}) => {

    function likeTapped(){
        const [liked, setLiked] = useState(false);
        let prevLike = liked
        setLiked(!prevLike)
    }
    
    
    return (
        <View style={styles.container} >
            <View style={styles.head} >
                <Image style={styles.userPic} source={{uri: post.userPicture}} />
                <Text>{post.username}</Text>
            </View>
            <Image style={styles.picture} source= {{uri: post.picture}} />
            <View style={styles.actionsHolder} >
                <View style={styles.actionsLeft}>

                    <TouchableOpacity onPress={() => {
                        likeTapped()
                    }}> 
                        <Ionicons 
                            name="ios-heart" 
                            size={32} 
                            color="red"
                            // color={liked ? "red" : "#d3d3d3" }
                            style={{ marginRight: 10 }}/>
                    
                    </TouchableOpacity> 
                    <Ionicons 
                        name="ios-chatbubbles" 
                        size={32} color="#d3d3d3" 
                        style={{ marginRight: 10 }}/>
                </View>
                {/* <View style={styles.actionsRight}>
                    <Ionicon name="ios-bookmark" size={32} color="#d3d3d3" />
                </View> */}
                
                <View>
                    <Text style={styles.likes}>{`${post.likes} likes`}</Text>
                </View>

                <View style={styles.containerText}>
                    <Text style={styles.username}>{`${post.username}`}</Text>
                    <Text style={styles.caption}>{`${post.caption}`}</Text>
                </View>
            </View>
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
    },
    actionsHolder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    actionsLeft:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    likes: { 
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 10,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10
    },
    caption: {
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 10
    },
    containerText:{
        backgroundColor: "orange"
    }
})

export default Post