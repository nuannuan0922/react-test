// class PropsTest extends React.Component {
//     render() {
//         return <div>this.props.name</div>
//     }
// }

// PropsTest.defaultProps = {
//     name: 'Props'
// }

// const element = <PropsTest />

// ReactDOM.render(
//     element,
//     document.querySelector('#container')
// )

//*************************************************************************** */
// class WebSite extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             name: '百度',
//             link: 'https://www.baidu.com'
//         }
//     }

//     render() {
//         return (
//         <div>
//             <Name name={this.state.name}/>
//             <Link link={this.state.link}/>
//         </div>
//         );
//     }
// }

// class Name extends React.Component {
//     render() {
//         return <p>名字：{this.props.name}</p>
//     }
// }

// class Link extends React.Component {
//     render() {
//         return <p>链接：{this.props.link}</p>
//     }
// }

// ReactDOM.render(
//     <WebSite/>,
//     document.querySelector('#container')
// );

//*************************************************************************** */

/**
    var eee = 'this is a ddd';

    class Mytitle extends React.Component {
        render() {
            return <h1>hello, {this.props.title}</h1>;
        }
    }

    Mytitle.propTypes = {
        title: PropTypes.string
    }

    ReactDOM.render(
        <Mytitle title={eee} />,
        document.querySelector('#container')
    );
 */


/**
    // var title = "菜鸟教程";
    var title = 123;
    class MyTitle extends React.Component {
    render() {
        return (
        <h1>Hello, {this.props.title}</h1>
        );
    }
    }
    
    MyTitle.propTypes = {
    title: PropTypes.string
    };
    ReactDOM.render(
        <MyTitle title={title} />,
        document.querySelector('#container')
    );
 */

 var title = "this is a title";

 var TitleComponent = React.createClass({
     propTypes: {
         title: React.PropTypes.string.isRequired
     },

     render: function() {
         return <h1>hello, {this.props.title}</h1>
     }
 });

 ReactDOM.render(
     <TitleComponent title={title} />,
     document.querySelector('#container')
 );

/**
    var title = "菜鸟教程";
    // var title = 123;
    var MyTitle = React.createClass({
      propTypes: {
        title: React.PropTypes.string.isRequired,
      },

      render: function() {
         return <h1> {this.props.title} </h1>;
       }
    });
    ReactDOM.render(
        <MyTitle title={title} />,
        document.querySelector('#container')
    );
 */
    