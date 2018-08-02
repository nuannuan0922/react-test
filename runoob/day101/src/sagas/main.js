import redux, { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';



var store = createStore(combineReducers, applyMiddleware(createSagaMiddleware(sagas)));

function render() {
    ReactDOM.render(
        <Counter 
            value={store.getState()}
            increateAsyncHandler={() => action('increateAsync')}
            increateHandler={() => action('increate')}
            decrementHandler={() => action('decrement')}
        />,
        document.querySelector("#root")
    )
}