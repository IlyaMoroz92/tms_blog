import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '../features/theme/themeSlice'
import postsReducer from '../features/getPosts/postsSlice'
import createSagaMiddleware from "@redux-saga/core"
import {fetchPostsSaga} from '../sagas/getPostsSaga' 
import {fetchPostSaga} from '../sagas/getPostSaga'
import { authReducer } from '../features/auth'; 
import { singUpSaga } from '../sagas/signUpSaga';

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(SagaMiddleware)
    }
})

SagaMiddleware.run(fetchPostsSaga)
SagaMiddleware.run(fetchPostSaga)
SagaMiddleware.run(singUpSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch