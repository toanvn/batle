var React = require('react');
var Popular = require('./Popular');
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Router = ReactRouter.BrowserRouter;

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/battle' component={Battle}/>
                    <Route exact path='/popular' component={Popular}/>
                </div>
            </Router>
        )
    }
}

module.exports = App;