import React from 'react';
import Home from './home.js';
import Events from './events.js';
import Banner from './navForTwoPages.js';
import { Switch, Route } from 'react-router-dom';

export class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div id="main">
				<Switch>
					<Route exact path='/HackUCI2018' component={Home} />
					<Route path='/HackUCI2018/events' component={Events} />
			    </Switch>
			</div>
		);
	}
}