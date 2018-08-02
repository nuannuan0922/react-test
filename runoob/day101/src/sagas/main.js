import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';

import rootSagas from './sagas';
import reducer from './reducer';
import Counter from './Counter';

const INCREASE_ASYNC = 'INCREASE_ASYNC';
const INCREASE = 'INCREASE';
const DECREMENT = 'DECREMENT';


function mapStateToProps(state = { count: 0 }) {
    return {
        value: state.count
    }
}

function mapDispatchToState(dispatch) {
    return () => ({
        increateAsyncHandler: () => {dispatch({ type: INCREASE_ASYNC })},
        increateHandler: () => dispatch({type: INCREASE}),
        decrementHandler: () => dispatch({type: DECREMENT})
    })
}

let Container = connect(mapStateToProps, mapDispatchToState)(Counter);
let sagaMiddleware = createSagaMiddleware(rootSagas);
let middlewares = [sagaMiddleware];
let store = createStore(reducer, {
    count: 0
}, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSagas);

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