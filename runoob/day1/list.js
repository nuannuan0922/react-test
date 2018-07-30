// function NumberList(props) {
//     var liList = props.list.map(key => {
//         return <li key={key.toString()}>{key.toString()}</li>
//     })

//     return (
//         <ul>
//             {liList}
//         </ul>
//     );
// }

// var list = [1, 2, 3, 4]
// ReactDOM.render(
//     <NumberList list={list} />,
//     document.querySelector('#container')
// )


function Page(props) {
    const SideBar = <ul>
            {
                props.list.map(item => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>;

    const ContentList = props.list.map(item => {
        return (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        );
    })

    return (
        <div>
            {SideBar}
            <hr />
            {ContentList}
        </div>
    );
}

var list = [
    {id: 1, title: '第一条', content: '第一条的内容'},
    {id: 2, title: '第二条', content: '第二条的内容'}
]
ReactDOM.render(
    <Page list={list} />,
    document.querySelector('#container')
)

