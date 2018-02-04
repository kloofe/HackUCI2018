import React from 'react';

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
	                    <li><a href="#">Personal</a></li>
	                    <li><a href="#">Events</a></li>
	                    <li><a href="#">Favorites</a></li>
	                </ul> 
	            </div>
	            <hr />
	        </div>
		);
	}
}