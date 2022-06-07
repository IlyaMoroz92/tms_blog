import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

interface ILikeBarState {
    like?: boolean
    dislike?: boolean
    bookmark?: boolean
    arrObject?: any
}

const initialState: ILikeBarState = {
    like: false,
    dislike: false,
    bookmark: false,
    arrObject: null
}

export const likeBarSlice = createSlice ({
    name: 'likeBar',
    initialState,
    reducers: {
        setLike: (state, action: PayloadAction<boolean>) => {
            if(state != null) {
                state.arrObject = state.arrObject?.map((el:any) => el.id === action.payload ? {...el, like: !el.like}: el)
            }
        },
        setDislike: (state, action: PayloadAction<boolean>) => {
            if(state != null) {
                state.arrObject = state.arrObject?.map((el:any) => el.id === action.payload ? {...el, dislike: !el.dislike}: el)
            }
        },
        setBookmark: (state, action: PayloadAction<boolean>) => {
            if(state != null) {
                state.arrObject = state.arrObject?.map((el:any) => el.id === action.payload ? {...el, bookmark: !el.bookmark}: el)
            }
        },
    }
})

export const {setLike, setDislike, setBookmark} = likeBarSlice.actions
export default likeBarSlice.reducer