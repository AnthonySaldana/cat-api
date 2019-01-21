import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { login } from '../Actions/CatActions';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = state => ({
  authenticated: state.cats.authenticated
});

const mapDispatchToProps = dispatch => ({
  login: (username) => dispatch(login(username))
});

class Login extends Component {
    state = {
        username: '',
        error: ''
      };

    componentDidMount(){
        const { authenticated } = this.props;
        if (authenticated) {
            window.location.href = "/";
        }
    }

    handleChange = (name) => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleLogin = () => {
        const {username} = this.state;
        const {login} = this.props;

        if( username === "admin" || username === "motor" || username === "cat" ){
            login(username)
            window.location.href='/';
        }else{
            this.setState({
                error: 'Cats only!'
            });
        }
    }

    render() {
        const { error } = this.state;
        return (
            <div>
            <h1 style={{ color: 'red' }}>{error}</h1>
            <div>
                <TextField
                    id="standard-name"
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    margin="normal"
                />
                <br/>
                <Button disabled={!this.state.username} variant="contained" color="primary" onClick={this.handleLogin}>
                    Login
                </Button>
            </div>            
            </div>
        );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
