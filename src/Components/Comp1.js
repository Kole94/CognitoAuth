import React, { Component } from 'react';
import { connect } from 'react-redux'
import takeInput from '../Actions/TextActions'

class Comp1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div>

                    <div>
                        <input type='text' onChange={this.props.handleChange}></input>
                        <input type='submit' onClick={this.props.add}></input>
                    </div>
                    <div>
                        <button id='btn' onClick={this.props.b}></button>
                    </div>
                </div>
                <div>
                    {this.props.a}
                </div>
            </div>
        );
    }
}

const mapDispachToProps = (dispach) => {
    return {
        b: () => dispach({ type: 'A' }),
        handleChange: (event) => {
                    
            dispach(takeInput(event));
        },
        add: () => dispach({ type: 'LIST' })
    }
}



const mapStateToProps = (state) => {
    return {
        a: state.reducerNumber.a,
        input: state.reducerText.input,
        list: state.reducerText.list
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Comp1);