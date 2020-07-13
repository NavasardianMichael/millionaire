import React, { useState } from 'react';
import Help from './Help';
import Rounds from './Rounds';

function Sidebar(props) {
	const [sidebarOpenedStatus, setSidebarOpenedStatus] = useState(window.outerWidth <= 768 ? false : true);

	function toggleSidebarOpen() {
		setSidebarOpenedStatus(prev => !prev)
	};

	return (
		<div id="sidebar" >
			<div className={`menu ${sidebarOpenedStatus ? '' : 'closed'}`}>
				<Help />
				<Rounds />
			</div>
			<button className="menu-toggler btn" onClick={toggleSidebarOpen}><i className="fas fa-bars text-light"></i></button>
		</div>
	)
};

export default Sidebar