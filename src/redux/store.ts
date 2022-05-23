import { configureStore } from "@reduxjs/toolkit"
import themeReducer from '../features/theme/themeSlice'
import { postsReducer } from '../features/posts'
import { signUpSaga } from '../features/sagas/signUpSaga'
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore ({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(signUpSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
