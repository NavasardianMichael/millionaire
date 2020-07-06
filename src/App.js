import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import MainCommands from './components/MainCommands';
import LostPage from './components/LostPage';
import Game from './components/Game';

function App() {
  return (
  	<Router>
	    <div className="page-content">
	    	<div className="container text-center">
	    		<Header />
		    	<Switch>
				  <Route path="/game" exact component={Game} />
				  <Route path="/LostPage" exact component={LostPage} />	  			  
				  <Route path="/" exact component={MainCommands} />
	        	</Switch>
	    	</div>
	    </div>
    </Router>
  );
};

export default App;