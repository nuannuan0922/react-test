class Div extends React.Component {
    constructor() {
        super();
        this.changeProps = this.changeProps.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    count = 1;

    changeProps(e) {
        e.preventDefault();
        this.setProps({
            name: '名字- '+ this.count++
        });
    }

    changeState(e) {
        e.preventDefault();
        this.setState({
            age: this.count
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.changeProps}>修改props</button>
                <button onClick={this.changeState}>修改state</button>
                <div>琐琐碎碎琐琐碎碎琐琐碎碎琐琐碎碎诉讼</div>
            </div>
        );
    }
}

var pr = '1234';
ReactDOM.render(
    <Div pr={pr}/>,
    document.querySelector('#container')
)

