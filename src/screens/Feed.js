import React from 'react'
import {View, Text} from 'react-native'
// import { connect } from 'react-redux'
import {fetchFeed} from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

const Feed = (props) => {

    const feed = useSelector(state => state)
    const dispatch = useDispatch()

    //dispatch actions
    const getFeed = () => dispatch(fetchFeed())

    // getFeed()
    return (
        <View>
            <Text>Feed</Text>
        </View>
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