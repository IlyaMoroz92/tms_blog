import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IPost  {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    like?: boolean,
    favorite?: boolean,
}

interface IPostsState {
    content: Array<IPost> | null,
    post: IPost | null,
    isLoading: 'idle' | 'pending',
    error: string | null,
}

const initialState: IPostsState = {
    content: null,
    isLoading: 'idle',
    error: null,
    post: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        fetchPostsSuccess:(state, action:PayloadAction<Array<IPost>>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.content = action.payload
            }
        },
        fetchPostsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
        fetchPost: (state, action:PayloadAction<number>) => {
            state.post = null
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        fetchPostSuccess:(state, action:PayloadAction<IPost>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.post = action.payload
            }
        },
        fetchPostFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    },
})

export const { 
    fetchPosts, 
    fetchPostsSuccess, 
    fetchPostsFailure,
    fetchPost, 
    fetchPostSuccess, 
    fetchPostFailure} = postsSlice.actions

export default postsSlice.reducer