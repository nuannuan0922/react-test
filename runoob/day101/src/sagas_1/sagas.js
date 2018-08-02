import { takeLatest } from 'redux-saga/effects';
import { registerUserAsyn, loginUserAsync } from './users';
import { REGISTER_USER, LOGIN_USER } from './users';

export default function* rootSaga() {
    yield [
        takeLatest(REGISTER_USER, registerUserAsyn),
        takeLatest(LOGIN_USER, loginUserAsync)
    ]
}