import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setGameProcStatus, setCurrentRoundIndex, setCurrentHelpItemData } from '../redux/actions';

function MainCommands() {
	const dispatch = useDispatch();

	function handleStartGame() {
		dispatch(setGameProcStatus('start'));
		dispatch(setCurrentRoundIndex(0));
		dispatch(setCurrentHelpItemData(null));
	};

	return (
		<div id="mainCommands">
			<Link to="/game" className="btn btn-outline-light my-2 py-2" onClick={handleStartGame}>Start game</Link>
			<Link to="/rules" className="btn btn-outline-light my-2 py-2">Rules</Link>
		</div>
	)
}

export default MainCommands