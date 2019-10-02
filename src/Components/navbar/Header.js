import React, { Component } from 'react';
import Fifth from './Fifth'
import First from './First'
import Sixth from './Sixth'
import Secound from './Secound'
import Forth from './Forth'
import Third from './Third'
import Head from './Head'
import { connect } from 'react-redux';
import Navbar from './Navbar'



class Header extends Component {

	render() {

		return (
			<nav className='navbar'>
				<div className='head'>
					<Head />
				</div>
				<div className='nav'>
					<Navbar />
				</div>
			</nav>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		a: state.reducerNumber.a
	}
}

export default connect(mapStateToProps)(Header);

