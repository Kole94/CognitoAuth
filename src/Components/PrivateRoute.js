import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Login from './Login'
import { connect } from 'react-redux';
import Comp1 from './Comp1'
import { withRouter } from 'react-router-dom'
import {fakeAuth} from '../Controller/index'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default PrivateRoute;    