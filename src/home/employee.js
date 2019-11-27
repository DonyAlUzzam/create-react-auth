import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { userActions } from '../_actions';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route, Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class Employee extends Component {

    logout = event => {
        const { dispatch } = this.props;
            dispatch(userActions.logout());
    }

    render(){
        return (
              <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>Dony Al-Uzzam</Link>
                  
                </div>
              </nav>
              <h3>Employee</h3>
              <Button onClick={(event) => this.logout()}>Logout</Button>
              </div>
        );
    }
}



function mapStateToProps(state){
    return state;
}

const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Employee)));

export { connectedHomePage as Employee };