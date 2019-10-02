import React, { Component } from 'react';
import { connect } from 'react-redux';

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

import { click } from '../../store/ActionCreator'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class First extends Component {

	render() {
		return (
			<div className='menu_list'>
				<ReactCSSTransitionGroup
				transitionName='slide'
				transitionEnterTimeout={300}
				transitionLeaveTimeout>
						<div>
							<p className='start'><a onClick={() => this.props.click(1)}>Procedure</a></p>
							<p className='start'><a onClick={() => this.props.click(2)}>Follow up</a></p>
							<p className='start'><a onClick={() => this.props.click(3)}>Compunication</a></p>
							<p className='start'><a onClick={() => this.props.click(4)}>Profile</a></p>
						</div>

				</ReactCSSTransitionGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(First);