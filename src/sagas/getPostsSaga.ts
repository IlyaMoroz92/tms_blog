import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchPostsFailure, fetchPostsSuccess, IPost } from '../features/getPosts/postsSlice'

type Posts = {
    count: number, 
    next: null, 
    previous: null, 
    results: Array<IPost>
}

export function* fetchPosts() {

    try {
        const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=1000&offset=0`)

        const posts: Posts = yield(response.json())
        console.log(posts);
        
        yield put(fetchPostsSuccess(posts.results))

    }
    catch(error: any){
        yield put(fetchPostsFailure(error.message))
    }
}

export function*fetchPostsSaga(){
    yield takeEvery('posts/fetchPosts', fetchPosts)
}