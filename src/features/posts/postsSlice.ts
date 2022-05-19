import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

type Post = {
    id: number
    image: string
    text: string
    date: string
    lesson_num: number
    title: string
    author: number
}


type PostState = {
    content: Array<Post> | null
}

const initialState: PostState = {
    content: null
}

export const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<Array<Post>>) => {
            state.content = action.payload
        }
    }
})

export const {fetchPosts} = postsSlice.actions
export default postsSlice.reducer