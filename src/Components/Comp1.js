import React, { Component } from 'react';
import { connect } from 'react-redux'
import { takeInput, display } from '../Actions/TextActions'

class Comp1 extends Component {

    constructor(props) {
        super(props);

        this.displaymovie = this.displaymovie.bind(this);

    }

    displaymovie() {

        return (
            <div>
                <p></p>
            </div>
        )
    }

    render() {

        return (
            <div>
                <div>

                    <div>
                        <input type='text' onChange={this.props.handlechange}></input>
                        <input type='submit' onClick={() => this.props.add(this.props.input)}></input>
                    </div>
                    <div>
                        <button id='btn' onClick={this.props.b}></button>
                    </div>
                </div>
                {this.displaymovie()}
                <div>
                </div>
            </div>
        );
    }
}

const mapDispachToProps = (dispach) => {
    return {
        b: () => dispach({ type: 'a' }),
        handlechange: (event) => {

            dispach(takeInput(event));
        },
        add: (input) => dispach(display(input))
    }
}



const mapStateToProps = (state) => {
    return {
        a: state.reducerNumber.a,
        input: state.reducerText.input,
        list: state.reducerText.list,
        movie: state.reducerText.movie
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Comp1);