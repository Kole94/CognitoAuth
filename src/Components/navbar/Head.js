import React, { Component } from 'react';
import { connect } from 'react-redux';
import { click } from '../../store/ActionCreator'

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
import { TransitionGroup, CSSTransition } from 'react-transition-group';




class Forth extends Component {

    constructor() {
        super();
        this.state = {
            controller: 0
        }
    }


    render() {
        return (
            <div>
                <div className='menu_head'>
                    <div class='menu_link'>
                        <p onClick={() => this.props.click(0)}> ALL </p>
                    </div>
                    <div class='menu_link'>
                        {(this.props.a === 1) ? <p onClick={() => this.props.click(1)}> 🡒 PROCEDURE </p> : null}
                    </div>
                    <div class='menu_link'>
                        {(this.props.a === 2) || (this.props.a === 5) ? <p onClick={() => this.props.click(2)}> 🡒 FOLLOW UP</p> : null}
                    </div>
                    <div class='menu_link'>
                        {(this.props.a === 3) ? <p onClick={() => this.props.click(3)}> 🡒 COMUNICATION</p> : null}
                    </div>
                    <div class='menu_link'>
                        {(this.props.a === 4) ? <p onClick={() => this.props.click(4)}> 🡒 MY PROFILE </p> : null}
                    </div>
                    <div class='menu_link'>
                        {(this.props.a === 5) ? <p> 🡒 SPECIAL SELECTION</p> : null}
                    </div>


                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Forth);