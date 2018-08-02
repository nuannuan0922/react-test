import {delay} from 'redux-saga';
import {put, takeEvery, all } from 'redux-saga/effects';

const INCREASE_ASYNC = 'INCREASE_ASYNC'
const INCREASE = 'INCREASE';

function* helloSaga() {
    console.log('Hello Sagas!')
}

function* incrementAsync() {
    yield delay(1000);
    yield put({ type: INCREASE });
}

function* watchIncrementAsync() {
    yield takeEvery(INCREASE_ASYNC, incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}