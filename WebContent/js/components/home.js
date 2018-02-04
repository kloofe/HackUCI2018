import React from 'react';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			
			<div id="home">	
				<div class = "banner">
					<div class ="profile-img">
						<i class="fas fa-user-circle fa-10x"></i>
						<div class ="profile-overlay">
							<div class ="text">[Insert Name and Stats]</div>
						</div>
					</div>
					
					<div id = "navigation">
						<ul class="navbar-nav">
					        <li><a href="#">Personal</a></li>
					        <li><a href="#">Events</a></li>
					        <li><a href="#">Favorites</a></li>
		      			</ul> 
					</div>
					<hr>
				</div>
			</div>
			
		);
	}
}