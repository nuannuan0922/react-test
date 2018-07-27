class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div>
                <p>当前时间是{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
        
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        console.log(123);
        clearInterval(this.timer);
    }
}

ReactDOM.render(
    <div>
        <Clock />
        <Clock />
        <Clock />
    </div>,
    document.querySelector("#container")
)

// setTimeout(function () {
//     document.querySelector("#container").innerHTML = null;

// }, 2000);