function Tr(props) {
    return props.guests.map((item, index) => {
        return (
            <tr>
                <td>{index}</td><td>{item.name}</td>
            </tr>
        )
    })
}

class GuestList extends React.Component {
    constructor() {
        super();
        this.state = {
            guests: []
        }
    }

    getGuestListFromServer(url, successCallBack, errorCallBack) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
                successCallBack(JSON.parse(xhr.responseText));
            } else {
                errorCallBack(JSON.parse(xhr.responseText));
            }
        }
        xhr.send();
    }

    componentWillMount() {
        var url = this.props.url;
        var that = this;
        this.getGuestListFromServer(url, function (data) {
            that.setState({
                guests: data
            })
        }, function () {
            that.setState({
                guests: []
            })
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <table>
                <Tr guests={this.state.guests}/>
            </table>
        );
    }
}

var url = './ajax.json'
ReactDOM.render(
    <GuestList url={url} />,
    document.querySelector('#container')
)