import React, {Component} from 'react';
import {connect} from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import St from './St'

class Start extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/registration'><p>Registration</p></Link></li>
                    <li><Link to='/login'><p>Login</p></Link></li>

                </ul>
            </div>
        )
    }
}


export default Start;