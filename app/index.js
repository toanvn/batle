/**
 * Created by qup on 6/16/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types')
require('./index.css');
var App = require('./components/App');

ReactDOM.render(
    <App name="Olal mamam" />, document.getElementById('app')
);