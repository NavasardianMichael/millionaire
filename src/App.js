import React, { useCallback, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainCommands from './components/MainCommands';
import LostPage from './components/LostPage';
import Rules from './components/Rules';
import Game from './components/Game';

function App() {

	
	const disableCopy = useCallback((e) => e.preventDefault(), [])

	useEffect(() => {
		document.body.addEventListener('copy', disableCopy);
		return () => document.body.removeEventListener('copy', disableCopy)
	}, [])

  return (
  	<Router>
	    <div className="page-content">
	    	<div className="container-fluid text-center">
	    		<Switch>
	    			<Route path="/" exact component={Header} />
	    		</Switch>
		    	<Switch>
				  	<Route path="/game/lostPage" exact component={LostPage} />	  			  
					<Route path="/rules" component={Rules} />
				  	<Route path="/game" component={Game} />
				  	<Route path="/" exact component={MainCommands} />
	        	</Switch>
	    	</div>
	    </div>
    </Router>
  );
};

export default App;