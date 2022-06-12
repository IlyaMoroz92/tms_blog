import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '../features/theme/themeSlice'
import postsReducer from '../features/getPosts/postsSlice'
import createSagaMiddleware from "@redux-saga/core"
import {fetchPostsSaga} from '../sagas/getPostsSaga' 
import {fetchPostSaga} from '../sagas/getPostSaga' 

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(SagaMiddleware)
    }
})

SagaMiddleware.run(fetchPostsSaga)
SagaMiddleware.run(fetchPostSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch