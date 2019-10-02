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




class Sixth extends Component {

	render() {
		return (
			<div className='menu_list'>
				
					
						<p className='start'><a onClick={this.click}>My Profile</a></p>
						<p className='start'><a onClick={this.click}>Invoices</a></p>
						<p className='start'><a onClick={this.click}>Settings</a></p>
				

			</div>
		);
	}
}

export default Sixth;