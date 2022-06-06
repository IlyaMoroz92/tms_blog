import { configureStore } from "@reduxjs/toolkit"
import themeReducer from './reducers/theme'
import dataReducer from './reducers/data'

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        data: dataReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch