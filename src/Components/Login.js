import React, { Component } from 'react';
import { connect } from 'react-redux'
import { takeInput, display } from '../Actions/TextActions'
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import config from '../config'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            errors: {
                cognito: null,
                blankfield: false,
                passwordmatch: false
            }
        }
    }

    clearErrorState = () => {
        this.setState({
          errors: {
            cognito: null,
            blankfield: false,
            passwordmatch: false
          }
        });
      }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {

        console.log('pre')
        event.preventDefault();

        this.clearErrorState();
       
        const { username, email, password } = this.state;

        try {
            const signUpResponse = await Auth.signUp({
                username,
                password,
                attributes: {
                    email: email,
                }
            });
            this.props.history.push("/");
            console.log(signUpResponse);
        } catch (error) {
            let err = null;
            !error.message ? err = { "message": error } : err = error;
            this.setState({
                errors: {
                    ...this.state.errors,
                    cognito: err
                }
            });
        }
    }


    render() {
        console.log(config.cognito.USER_POOL_ID)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>EMAIL</label>
                        <input onChange={this.handleChange} id='email' type='text' value={this.state.email}></input>
                    </div>

                    <div>
                        <label>PASSWORD</label>
                        <input onChange={this.handleChange} id='password' type='password' value={this.state.password}></input>
                    </div>
                    <div>
                        <label>USERNAME</label>
                        <input onChange={this.handleChange} id='username' type='text' value={this.state.username}></input>
                    </div>

                    <div>
                        <button id='btn'></button>
                    </div>
                </form>
            </div>
        );
    }
}


export default Login;