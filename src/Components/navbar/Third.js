import React, { Component } from 'react';

import Drugs from '../Drugs'
import Hormones from '../Hormones'
import Location from '../Location'
import Pregnancies from '../Pregnancies'
import About from '../About'
import NecessaryAnalysis from '../NecessaryAnalysis'
import Report from '../Report'
import Questionnaires from '../Questionnaires'
import ExoticMixes from '../ExoticMixes'
import VitaminBoosters from '../VitaminBoosters'
import WildPick from '../WildPick'
import Messages from '../Messages'
import Calls from '../Calls'
import Consultations from '../Consultations'
import MyProfile from '../MyProfile'
import Invoices from '../Invoices'
import Settings from '../Settings'
import {click} from '../../store/ActionCreator'
import { connect } from 'react-redux';





class Third extends Component {
    
    render() {
        return (
            <div className='menu_list'>
                        <p className='start'><a onClick={this.click}>Questioneer</a></p>
                        <p className='start'><a onClick={this.click}>Hormones</a></p>
                        <p className='start'><a onClick={() => this.props.click(5)}>Special Selection</a></p>
                        <p className='start'><a onClick={this.click}>Drugs</a></p>
                        <p className='start'><a onClick={this.click}>Pregnancies</a></p>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        a: state.reducerNumber.a
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: (e) => dispatch(click(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Third);

