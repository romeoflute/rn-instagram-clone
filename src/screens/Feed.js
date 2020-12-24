import React, { useEffect } from 'react'
import {View, Text} from 'react-native'
// import { connect } from 'react-redux'
import {fetchFeed} from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import PostList from '../components/PostList'


//Note: https://reactjs.org/docs/hooks-effect.html

const Feed = () => {
    const feed = useSelector(state => state.feed)
    console.log("posts are: ", feed)

    const dispatch = useDispatch()

    //dispatch actions
    const getFeed = () => dispatch(fetchFeed())

    useEffect(() => {
        getFeed()
    }, []);

    return (
        <PostList data={feed.data} />       
    )
}

export default Feed

// const mapStateToProps = (state) => {
//     return {
//         state: state.feed
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchFeed: params => dispatch(fetchFeed(params))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Feed)