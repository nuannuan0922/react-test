class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '123'
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        console.log(e);
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.changeHandler}/>
                <h4>{this.state.value}</h4>
            </div>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.querySelector('#container')
)