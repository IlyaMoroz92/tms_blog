import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type Post = {
    id: number
    image: string
    text: string
    date: string
    lesson_num: number
    title: string
    author: number
    like?: boolean
}


type PostState = {
    content: Array<Post> | null
    isLoading: string
    error: string | null
    post: Post | null
}

const initialState: PostState = {
    content: null,
    isLoading: 'idle',
    error: null,
    post: null
}

export const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<Array<Post>>) => {
            state.content = action.payload
        },
        likePost: (state, action: PayloadAction<number>) =>{
            console.log(state.content)
            if(state.content) {
                state.content = state.content.map(post =>
                    post.id === action.payload ? {...post, like: true} : post
                )
            }
        },
        dislikePost: (state, action: PayloadAction<number>) =>{
            if(state.content) {
                state.content = state.content.map(post =>
                    post.id === action.payload ? {...post, like: false} : post
                )
            }
        },
        getPost: (state, action: PayloadAction<number>) =>{
            if(state.isLoading==='pending') {
                state.isLoading = 'idle'
            }
        },
        getPostSucces: (state, action: PayloadAction<Post>) =>{
            if(state.isLoading==='pending') {
                state.isLoading = 'idle'
                state.post = action.payload
            }
        },
        getPostFailure: (state, action: PayloadAction<string>) =>{
            state.isLoading = 'idle'
            state.error = action.payload
        },
    },
})

export const {fetchPosts, likePost, dislikePost, getPostFailure, getPostSucces, getPost} = postsSlice.actions
export default postsSlice.reducer
