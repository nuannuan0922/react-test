
// import {delay} from 'redux-sage';
// import {put, takeEvery} from 'redux-saga/effects';

export const INCREASE_ASYNC = 'INCREASE_ASYNC';
export const INCREASE = 'INCREASE';
export const DECREMENT = 'DECREMENT';

export default function (state, action) {
    switch (action.type) {
        // case INCREASE_ASYNC:
        //     // return asyncHandler(state, action);
        //     return Object.assign({}, state, {
        //         count: state.count+1
        //     });
        case INCREASE:
            return Object.assign({}, state, {
                count: state.count+1
            });
        case DECREMENT:
            return Object.assign({}, state, {
                count: state.count-1
            });
        default:
            return Object.assign({}, state)
    }
}


// function* asyncHandler(state, action) {
//     yield delay(1000);
//     yield put({type: INCREASE_ASYNC});
// }
