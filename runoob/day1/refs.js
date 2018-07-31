class MyComponent extends React.Component {
    clickHandler(e) {
        this.refs.myInput.focus();
    }

    render() {
        return (
            <div>
                <input ref="myInput"/>
                <br />
                <button onClick={this.clickHandler.bind(this)}>input获取焦点</button>
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />,
    document.querySelector('#container')
)