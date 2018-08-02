import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';

import sagas from './sagas';
import reducer from './reducer';
import Counter from './Counter';

const INCREASE_ASYNC = 'INCREASE_ASYNC';
const INCREASE = 'INCREASE';
const DECREMENT = 'DECREMENT';

// var sagaMiddleware = createSagaMiddleware(sagas);
// var store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

function mapStateToProps(state = { count: 0 }) {
    return {
        value: state.count
    }
}

function mapDispatchToState(dispatch) {
    return () => ({
        increateAsyncHandler: () => dispatch({ type: INCREASE_ASYNC}),
        increateHandler: () => dispatch({type: INCREASE}),
        decrementHandler: () => dispatch({type: DECREMENT})
    })
}

// function action(type) {
//     return {
//         type: type
//     }
// }

let Container = connect(mapStateToProps, mapDispatchToState)(Counter);
let store = createStore(reducer, {
    count: 0
});

export default class sdf extends Component {
    render() {
        return (
            <div>
                <Container store={store} />
            </div>
        );
    }
        
        // return (<div store={store}
        //     // value={store.getState()}
        //     // increateAsyncHandler={() => action('increateAsync')}
        //     // increateHandler={() => action('increate')}
        //     // decrementHandler={() => action('decrement')}
        // >
        //     <Counter />
        // </div>)
}