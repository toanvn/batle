/**
 * Created by qup on 6/16/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types')
require('./index.css');

class Users extends React.Component {
    render() {
        return (
            <ul>
                {this.props.list.map(function (friend) {
                    return <li key={friend}>{friend}</li>
                })}
            </ul>
        )
    }
}

Users.propTypes = {
    list: PropTypes.array.isRequired
}

class App extends React.Component{

    render(){
        return (
            <div>
                <Users list="Tyler, Jake, Mikenzi" />
                <div>Hello {this.props.name}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <App name="Olal mamam" />, document.getElementById('app')
);