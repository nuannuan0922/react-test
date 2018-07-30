// function Button() {
//     function click(e) {
//         alert('clicked');
//         e.preventDefault()
//     }
//     return <a href="#" onClick={click}>a button</a>
// }

// ReactDOM.render(
//     <Button />,
//     document.querySelector('#container')
// )

// class Toggle extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             ifOpen: true
//         }

//         this.clickHandler = this.clickHandler.bind(this);
//     }

//     clickHandler(e) {
//         e.preventDefault();
//         this.setState({
//             ifOpen: !this.state.ifOpen
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.clickHandler}>改变当前状态</button>
//                 <p>当前状态：{this.state.ifOpen ? 'on' : 'off'}</p>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.querySelector('#container')
// )


class Toggle extends React.Component {
    constructor() {
        super();
        this.state = {
            ifOpen: true
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         ifOpen: !this.state.ifOpen
    //     });
    //     console.log(this);
    // }

    clickHandler(e) {
        e.preventDefault();
        this.setState({
            ifOpen: !this.state.ifOpen
        })
    }

    render() {
        return (
            <div>
                {/* <button onClick={e=>this.clickHandler(e)}>改变当前状态</button> */}
                <button onClick={e=>this.clickHandler(e)}>改变当前状态</button>
                <p>当前状态：{this.state.ifOpen ? 'on' : 'off'}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.querySelector('#container')
)
