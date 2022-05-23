import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

type SignUpPayload = {
    name: string
    email: string
    password: string
}

type AuthState = {
    user: User | null
}

type User = {
    name: string
}

const initialState: AuthState = {
    user: null
}

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<SignUpPayload>) => {
            
            
        },
/*         likePost: (state, action: PayloadAction<number>) =>{
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
        } */
    }
})

export const {signUp} = authSlice.actions
export default authSlice.reducer
