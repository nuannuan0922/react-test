import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


class TodoList extends React.Component {
    render() {
        var liDom = this.props.list && this.props.list.map((item, index) => {
            return <li key={index}>item</li>
        }) || null;
        return (
            <ul>
                {liDom}
            </ul>
        );
    }
}

let store = createStore(state => ({list: state && state.list || [{name: 'lily'}]}));
let action = {
  type: 'suiyi',
  list: [
    {name: 'roc'},
    {name: 'jasmin'},
  ]
}
store.dispatch(action);

setTimeout(() => store.dispatch(action), 3000);

function mapStateToProps() {
  store.subscribe();
  var state = store.getState();

  return {
    list: state.list
  }
}
const VisibleTodoList = connect(mapStateToProps)(TodoList);



var eee = {
  list: [
    {name: 'roc'},
    {name: 'jasmin'},
  ]
}

export default function App() {
  return (
    <div>
      <Provider store={eee}>
          <TodoList />
      </Provider>
    </div>
  )
}
// export default ReactDOM.render(
//     <Provider store={store}>
//         <TodoList />
//     </Provider>,
//     document.querySelector('#container')
// )