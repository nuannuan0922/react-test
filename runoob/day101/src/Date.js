import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

class Clock extends Component {
    render() {
        return (
            <div>
                <p>当前时间是: {this.props.date.toLocaleTimeString()}</p>
                <button onClick={this.props.refreshHandler}>刷新</button>
                <p>当前刷新次数：{this.props.count}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        date: new Date(),
        count: state.count
    }
}

function mapDispathToState(dispatch) {
    return {
        refreshHandler: () => dispatch(middlewareHandler)
    }
}

const refreshAction = {
    type: 'Refresh'
}

const DateUtil = connect(mapStateToProps, mapDispathToState)(Clock);

function reducer(state = {count: 0}) {
    return Object.assign({}, {
        count: state.count+1,
        date: new Date()
    })
}

function middlewareHandler(dispatch, getState, ...argus) {
    console.log('before');
    dispatch(refreshAction);
    console.log(getState());
    console.log(...argus);
    console.log('after');
}

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
    return (
        <div>
            <DateUtil store={store} />
        </div>
    );
}