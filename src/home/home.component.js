import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Employee } from './index';
import { userActions } from '../_actions';
import '../App.css';
import { PrivateRoute } from '../_components/PrivateRoute';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route, Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class Home extends Component {

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
              <Button onClick={(event) => this.logout()}>Logout</Button>
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Switch>
                    <PrivateRoute  path='/home' component={Home} />
                    <Route exact  path='/home' component={Home}/>
                    <Route path='/employee' component={Employee}/>
                  </Switch>
                </div>
              </div>
              </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state){
    return state;
}

const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Home)));

export { connectedHomePage as Home };