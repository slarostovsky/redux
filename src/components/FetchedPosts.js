import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import Post from './Post';
import {fetchedPosts} from '../redux/actions';
import { Loader } from './loader';


export default () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })
    const loading = useSelector(state => {
        return state.app.loading
    })

    if(loading) {
        return <Loader />
    }

    if(!posts.length) {
        return <button 
        className="btn btn-primary"
        onClick={() => dispatch(fetchedPosts())}
        >Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}