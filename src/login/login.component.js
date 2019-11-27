import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {history} from '../_helpers';
import { userActions } from '../_actions';
// import './login.component.css'



class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('auth')){
            history.push('/home');
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = event => {
        this.setState({ submitted: true });
        const {username, password } = this.state;
        const { dispatch } = this.props;
        if(username && password ){
            dispatch(userActions.login(username, password));
        }
    }

    

    render(){
        return (
            <form>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter Usernaname"
                value={this.state.username}
                onChange={this.handleChange('username')}></input>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"
                autoComplete="current-password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange('password')}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <Button variant="contained"
            color="primary" className="btn btn-primary btn-block"
            onClick={(event) => {this.login()}}>Login</Button>
            <p className="forgot-password text-right">
                Forgot <a href="#">Password?</a>
            </p>
            </form>
        );
    }
}

// Login.propTypes = {
//     classes: PropTypes.object.isRequired
// };

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(Login));

export { connectedLoginPage as Login };