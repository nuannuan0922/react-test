import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const VisibleTodoList = connect(state => ({list: state.list}))(TodoList);

class TodoList extends React.Component {
    render() {
        var liDom = this.props.list.map((item, index) => {
            return <li key={index}>item</li>
        });
        return (
            <ul>
                {liDom}
            </ul>
        );
    }
}


let store = createStore(state => ({list: state.list}));

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.querySelector('#container')
)