// class Form extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             value: '123'
//         }
//     }

//     changeHandler = (e) => {
//         e.preventDefault();
//         console.log(e);
//         this.setState({
//             value: e.target.value
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <input value={this.state.value} onChange={this.changeHandler}/>
//                 <h4>{this.state.value}</h4>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Form />,
//     document.querySelector('#container')
// )

class SelectTest extends React.Component {
    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            value: 'bi'
        }
    }

    submitHandler(e) {
        e.preventDefault();
        alert(this.state.value)
    }

    changeHandler(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    <select value={this.state.value} onChange={this.changeHandler}>
                        <option value="gg">Google</option>
                        <option value="bi">Bing</option>
                        <option value="bd">Baidu</option>
                        <option value="sg">Sougou</option>
                    </select>
                </label>
                <button type="submit">提交</button>
            </form>
        );
    }
}

ReactDOM.render(
    <SelectTest />,
    document.querySelector('#container')
)