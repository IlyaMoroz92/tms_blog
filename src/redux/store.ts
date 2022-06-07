import { configureStore } from "@reduxjs/toolkit"
import themeReducer from './reducers/theme'
import dataReducer from './reducers/data'
import likeBarReducer from './reducers/likebar'

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        data: dataReducer,
        likeBar: likeBarReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch