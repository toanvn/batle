var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var PlayerPreview = require('./PlayerPreview');

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState(function () {
            return {
                username: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username);
    }

    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='username'>{this.props.label}</label>
                <input
                    id='username'
                    type='text'
                    placeholder='input username'
                    value={this.state.username}
                    onChange={this.handleChange}/>
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.username}>
                    Submit
                </button>
            </form>
        )
    }
}

PropTypes.PlayerInput = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        });
    }

    handleReset(id) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        });
    }

    render() {
        var playOneName = this.state.playerOneName;
        var playTwoName = this.state.playerTwoName;
        var playOneImage = this.state.playerOneImage;
        var playTwoImage = this.state.playerTwoImage;
        var match = this.props.match;
        return (
            <div>
                <div className='row'>
                    {!playOneName &&
                    <PlayerInput
                        id='playerOne'
                        label='Player One'
                        onSubmit={this.handleSubmit}
                        />
                    }
                    {playOneImage !== null &&
                    <PlayerPreview
                        avatar={playOneImage}
                        username={playOneName}>
                        <button
                            className='reset'
                            onClick={this.handleReset.bind(this, 'playerOne')}>
                            Reset
                        </button>
                    </PlayerPreview>
                    }
                    {!playTwoName &&
                    <PlayerInput
                        id='playerTwo'
                        label='Player Two'
                        onSubmit={this.handleSubmit}
                        />
                    }
                    {playTwoImage !== null &&
                    <PlayerPreview
                        avatar={playTwoImage}
                        username={playTwoName}>
                        <button
                            className='reset'
                            onClick={this.handleReset.bind(this, 'playerTwo')}>
                            Reset
                        </button>
                    </PlayerPreview>
                    }
                </div>
                {playOneImage != null && playTwoImage !== null &&
                <Link className='button'
                      to={{
                          pathname: match.url +'/results',
                          search: '?playerOneName='+playOneName+'&playerTwoName='+playTwoName
                      }}>
                    Battle
                </Link>}
            </div>
        )
    }
}

module.exports = Battle;
