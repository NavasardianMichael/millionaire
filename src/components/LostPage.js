import React from 'react'; 
import Header from './Header';
import MainCommands from './MainCommands';

function LostPage() {
	return (
		<div className="lost-page">
			<Header />
			<h4>You lost</h4>
			<MainCommands />
		</div>
	)
};

export default LostPage