import React from 'react'
import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native'
import Post from './Post'

const PostList = ({data}) => {
    console.log("data is now: ", data)
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem= {({item}) => {
                    return (
                        Post({"post": item})
                    )
                }}
                keyExtractor={ item => item.id.toString() }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default PostList