import React, {Component} from 'React';

class Counter extends Component {
    render() {
        var props = this.props;
        return (
            <div>
                <button onClick={props.increateAsyncHandler}>increate after 1 seconds</button>
                {' '}
                <button onClick={props.increateHandler}>increate</button>
                {' '}
                <button onClick={props.decrementHandler}>Decrement</button>
                {' '}
                <p>Clicked : {value} times.</p>
            </div>
            

        );
    }
}

export default Counter;