import {put, call, takeEvery} from 'redux-saga/effects'

import {
    signUpFailure,
    signUpSucces,
} from '../auth/authSlice'

const delay = (ms: number) => new Promise (res => {
    setTimeout(res, ms)
})

export function* signUp() {
    try {
        yield call( delay, 2000)
        const data = {
            name: "Ilya",
            email: "mermermer@inbox.ru",
            password: '123456'
        }
        yield put(signUpSucces(data))
    } catch (error:any) {
        yield put(signUpFailure(error.message))
    }
}

export function* signUpSaga () {
    yield takeEvery('auth/signUp', signUp)
}