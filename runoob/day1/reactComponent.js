/**
        可以使用函数定义了一个组件：

        function HelloMessage(props) {
            return <h1>Hello World!</h1>;
        }
        你也可以使用 ES6 class 来定义一个组件:

        class Welcome extends React.Component {
        render() {
            return <h1>Hello World!</h1>;
        }
        }
 */
function Name(props) {
    return <p>网站名称：{props.name}</p>;
}

function Url(props) {
    return <p>网站url：{props.url}</p>
}

function NickName(props) {
    return <p>网站小名：{props.nickName}</p>;
}

function App() {
    return <div>
        <Name name="就是个网站名字" />
        <Url url="localhost:8000" />
        <NickName nickName="huo" />
    </div>
}

ReactDOM.render(
    <App/>,
    document.querySelector("#container")
)