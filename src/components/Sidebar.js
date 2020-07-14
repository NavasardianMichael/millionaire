import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSoundAvailability } from '../redux/actions';
import Help from './Help';
import Rounds from './Rounds';

function Sidebar(props) {
	const dispatch = useDispatch();
	const [sidebarOpenedStatus, setSidebarOpenedStatus] = useState(window.outerWidth <= 768 ? false : true);

	function toggleSidebarOpen() {
		setSidebarOpenedStatus(prev => !prev)
	};

	function handleSoundAvailability() {
		dispatch(setSoundAvailability());
	};

	const soundStatus = props.soundAvailability ? 
						<i className="fas fa-volume-up"></i> :
						<i className="fas fa-volume-mute"></i>
	return (
		<div id="sidebar" >
			<div className={`menu ${sidebarOpenedStatus ? '' : 'closed'}`}>
				<Help />
				<Rounds />
				<div className="bottom-section text-left">
					<button className="btn btn-outline-light mx-1" onClick={handleSoundAvailability}>
						{soundStatus}
					</button>
					<Link to='/game/lostPage' className="btn btn-outline-light mx-1">
						<i className="fas fa-sign-out-alt"></i>
					</Link>					
				</div>				
			</div>
			<button className="menu-toggler btn" onClick={toggleSidebarOpen}><i className="fas fa-bars text-light"></i></button>
		</div>
	)
};

export default Sidebar