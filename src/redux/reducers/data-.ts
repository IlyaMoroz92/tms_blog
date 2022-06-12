import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

interface DataState {
    value: any
}

const initialState: DataState = {
    value: null 
}

export const dataSlice = createSlice ({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: any) => {
            state.value = action.payload
        }
    }
})

export const {setData} = dataSlice.actions
export default dataSlice.reducer

