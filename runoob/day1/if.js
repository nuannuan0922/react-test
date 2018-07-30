// class StateTip extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isLogined: false
//         }

//         this.login = this.login.bind(this);
//         this.logout = this.logout.bind(this);
//     }

//     login() {
//         this.setState({
//             isLogined: true
//         })
//     }

//     logout() {
//         this.setState({
//             isLogined: false
//         })
//     }

//     render() {
//         var isLogined = this.state.isLogined;
//         var fn = isLogined ? ['logout'] : ['login'];
//         return (
//             <div>
//                 <button onClick={this[fn]}>{fn}</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <StateTip />,
//     document.querySelector('#container')
// )

// function MailBox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 && 
//             <h2> 您有{unreadMessages.length}条未读信息，请注意查收。</h2>}
//         </div>
//     );
// }

// var unreadMessages = ['1', '3', '3'];
// ReactDOM.render(
//     <MailBox unreadMessages={unreadMessages} />,
//     document.querySelector('#container')
// )

// setTimeout(function () {
//     unreadMessages = [];
// }, 2000);

/**
 * 在极少数情况下，你可能希望隐藏组件，即使它被其他组件渲染。
 * 让 render 方法返回 null 而不是它的渲染结果即可实现。
 */
function Warning(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <p>有异常！请关注！</p>
    );
}

class WarningBtn extends React.Component {
    constructor () {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            ifWarning: true
        }
    }

    toggle(e) {
        e.preventDefault();

        this.setState({
            ifWarning: !this.state.ifWarning
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggle}>切换异常状态</button>
                <Warning warn={this.state.ifWarning} />
            </div>
        );
    }
}

ReactDOM.render(
    <WarningBtn />,
    document.querySelector('#container')
)