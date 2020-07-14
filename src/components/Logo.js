import React from 'react';
import logo from '../logo.svg';

function Logo(props) {
	return (
		<div id="logo" className={props.shownStatus ? 'd-block' : 'd-none'}>
			<img src={logo} alt="logo" title="logo"/>
		</div>
	)
};

export default Logo