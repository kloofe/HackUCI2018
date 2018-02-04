import React from 'react';
import {Link} from 'react-router-dom';

export default class Banner extends React.Component {
	constructor(props) {
		super(props);

	}
	
	render() {
		return (
			<div className = "banner">
	            <div className ="container profile-img">
	                <i className="fas fa-user-circle fa-10x"></i>
	                <div id ="profile-overlay"></div>
	            </div>
	            <div id = "navigation">
	                <ul className="navbar-nav">
	                    <li><Link to={'/HackUCI2018'}>Personal</Link></li>
	                    <li><Link to={'/HackUCI2018/events'}>Events</Link></li>
	                    <li><Link to={'/HackUCI2018'}>Favorites</Link></li>
	                </ul> 
	            </div>
	            <hr />
	        </div>
		);
	}
}