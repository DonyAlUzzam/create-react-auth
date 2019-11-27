import React, { Component } from 'react';
import {history} from '../_helpers';
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

class SignUp extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false,
            email: ''
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

    register = event => {
        this.setState({ submitted: true });
        const {username, password, email } = this.state;
        const { dispatch } = this.props;
        if(username =='' && password=='' && email=='' ){
            // dispatch(userActions.register(username, password, email));
            console.log("nok")
        } else {
            dispatch(userActions.register(username, password, email));
        }
    }

    render(){
        return(
           <form>
               <h3>Sign Up</h3>

               <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                     value={this.state.username}
                     onChange={this.handleChange('username')}/>
               </div>

               <div className="form-group">
                   <label>Email Address</label>
                   <input type="email" className="form-control" placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}/>
               </div>

               <div className="form-group">
                   <label>Password</label>
                   <input type="password" className="form-control" placeholder="Password"
                    autoComplete="current-password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.handleChange('password')}/>
               </div>

               <Button variant="contained"
            color="primary" className="btn btn-primary btn-block"
            onClick={(event) => {this.register()}}>Sign Up</Button>
                <p className="forgot-password text-right">
                    Already Registered <a href="/sign-in">Sign In?</a>
                </p>
           </form>
        );
    }
}

const mapStateToProps = (state) => {
    const { register } = state.register;
    return {
        register
    };
}

const connectedRegisterPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(SignUp));

export { connectedRegisterPage as SignUp };