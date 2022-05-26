import {put, call, takeEvery} from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { getPostFailure, getPostSucces, type Post } from '../features/posts'

const API_URL = 'https://studapi.teachmeskills.by'
export function* getPost(action: PayloadAction<number>) {
    try {
        const response: Response = yield call (() =>
        fetch(`${API_URL}/blog/post/${action.payload}`)
        )
        const data: Post = yield response.json()
        yield put(getPostSucces(data))
    } catch (error: any) {
        yield put(getPostFailure(error.message))
    }
}

export function* postSaga () {
    yield takeEvery('posts/getPost', getPost)
}