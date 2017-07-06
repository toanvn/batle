var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');
var PlayerPreview = require('./PlayerPreview');
var Loading = require('./Loading');

function Profile(props) {
    var info = props.profile;
    return (
        <div className='column'>
            <h1>{props.label}</h1>

            <h3>Score: {props.score}</h3>
            <PlayerPreview username={info.login} avatar={info.avatar_url}>
                <ul className='space-list-items'>
                    {info.name && <li>{info.name}</li>}
                    {info.location && <li>{info.location}</li>}
                    {info.company && <li>{info.company}</li>}
                    <li>Followers: {info.followers}</li>
                    <li>Following: {info.following}</li>
                    <li>Public Repos: {info.public_repos}</li>
                    {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
                </ul>
            </PlayerPreview>
        </div>
    )
}

PropTypes.Profile = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    info: PropTypes.object.isRequired
};

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }

    componentDidMount() {
        var players = queryString.parse(this.props.location.search);
        api.battle([players.playerOneName, players.playerTwoName]).then(function (players) {
            if (players === null) {
                return this.setState(function () {
                    return {
                        error: ' Something fails',
                        loading: false
                    }
                });
            }
            this.setState(function () {
                return {
                    error: null,
                    winner: players[0],
                    loser: players[1],
                    loading: false
                }
            });
        }.bind(this));
    }

    render() {
        var error = this.state.error;
        var winner = this.state.winner;
        var loser = this.state.loser;
        var loading = this.state.loading;
        if (loading) {
            return (
                <Loading />
            )
        }
        if (error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }
        return (
            <div className='row'>
                <Profile label='Winner' profile={winner.profile} score={winner.score}/>
                <Profile label='Loser' profile={loser.profile} score={loser.score}/>
            </div>
        )
    }
}

module.exports = Results;