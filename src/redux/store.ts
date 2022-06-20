import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '../features/theme/themeSlice'
import postsReducer from '../features/getPosts/postsSlice'
import createSagaMiddleware from "@redux-saga/core"
import {fetchPostsSaga} from '../sagas/getPostsSaga' 
import {fetchPostSaga} from '../sagas/getPostSaga'
import { authReducer } from '../features/auth'; 
import { singUpSaga } from '../sagas/signUpSaga';
import { verifyReducer } from '../features/verify';
import { verifySaga } from '../sagas/verifySagas' ;
import { loginReducer } from '../features/login';
import { signInSaga } from '../sagas/signInSaga';
import { UserInfoSaga } from '../sagas/userInfoSagas';
import { userInfoReducer } from '../features/userInfo';

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        auth: authReducer,
        verify: verifyReducer,
        login: loginReducer,
        userInfo: userInfoReducer,
        
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(SagaMiddleware)
    }
})

SagaMiddleware.run(fetchPostsSaga)
SagaMiddleware.run(fetchPostSaga)
SagaMiddleware.run(singUpSaga)
SagaMiddleware.run(verifySaga)
SagaMiddleware.run(signInSaga)
SagaMiddleware.run(UserInfoSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch