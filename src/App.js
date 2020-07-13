import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainCommands from './components/MainCommands';
import LostPage from './components/LostPage';
import Rules from './components/Rules';
import Game from './components/Game';

function App() {
  return (
  	<Router>
	    <div className="page-content">
	    	<div className="container-fluid pr-0 text-center">
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