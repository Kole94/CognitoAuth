import React, {Component} from 'react';
import {connect} from 'react-redux'

class Comp2 extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <p>{this.props.a}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        a: state.a
    }
} 

export default connect(mapStateToProps)(Comp2);