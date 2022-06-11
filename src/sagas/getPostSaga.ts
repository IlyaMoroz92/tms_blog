import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchPostFailure, fetchPostSuccess, IPost } from '../features/getPosts/postsSlice'
import { PayloadAction } from '@reduxjs/toolkit';

export function* fetchPost(action: PayloadAction<number>) {

    try {
        const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/${action.payload}`)

        const post: IPost = yield(response.json())
        console.log(post);
        
        yield put(fetchPostSuccess(post))

    }
    catch(error: any){
        yield put(fetchPostFailure(error.message))
    }
}

export function*fetchPostSaga(){
    yield takeEvery('posts/fetchPost', fetchPost)
}