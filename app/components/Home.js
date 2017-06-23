/**
 * Created by qup on 6/21/17.
 */
var React = require('react');
var Link = require('react-router-dom').Link;
var GoogleMap = require('./GoogleMap');

class Home extends React.Component {
    render() {
        return (
            <div className='home-contain'>
                <p>Welcome home, please come back home quickest as possible</p>
                <Link className='button' to='/battle'>
                    Battle
                </Link>
                <GoogleMap/>
            </div>
        )
    }
}

module.exports = Home;
