import React, { Component } from 'react';
import Fifth from './Fifth'
import First from './First'
import Sixth from './Sixth'
import Secound from './Secound'
import Forth from './Forth'
import Third from './Third'
import Head from './Head'
import { connect } from 'react-redux';



class Header extends Component {

	render() {

		return (
			<nav className='navbar'>
					<div>{(this.props.a === 0) ? <First /> : null}</div>
					<div>{(this.props.a === 1) ? <Secound /> : null}</div>
					<div>{(this.props.a === 2) ? <Third /> : null}</div>
					<div>{(this.props.a === 3) ? <Fifth /> : null}</div>
					<div>{(this.props.a === 4) ? <Sixth /> : null}</div>
					<div>{(this.props.a === 5) ? <Forth /> : null}</div>
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

