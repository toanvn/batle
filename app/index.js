/**
 * Created by qup on 6/16/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component{

    render(){
        return (
            <div>Hello Perfect</div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
);