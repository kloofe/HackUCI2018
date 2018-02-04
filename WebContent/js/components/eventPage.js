import React from 'react';

export default class EventPage extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div id="eventPage">
			 
			<div class="container eventContainer">
			  <div class="panel panel-default">
			    <span className="panel-heading">
			      <img src="mimosaHeader.jpg" style={{width:'900px',height:'400px'}}></img>
			      <div class="centered"><div class="eventHeader">Sunday Brunch!</div>
			      </div>
			    </span>
			  </div>
			  <div class="panel-body">
			    <u><div class="eventHeader2">Event Details</div></u>
			      <p><b>Where: </b>Trevor's house</p>
			      <p><b>When: </b>Sunday, February 4th</p>
			      <p><b>Description: </b>Come join us as we have some eggs and bakey at T-Dawg's place!</p>
			  </div>


			    <div class="row marketing">
			      <div class="col-lg-6">
			        <div class="panel panel-default">
			          <div class="panel-heading"><div class="eventHeader2">Recipes</div></div>
			            <ul class="list-group">
			              <div class="list-group-item">
			                <a href="#" class="card">
			                  <span className="card-img-top" src="frenchToast.jpg" style={{width:'200px',height:'150px'}} alt="Card image cap"></span>
			                  <div class="card-block">
			                  <p class="card-text">French Toast</p>
			                  </div>
			                </a>
			              </div>
			            </ul>        
			        </div>
			      </div>

			      <div class="col-lg-6">
			        <div class="panel panel-default">
			          <div class="panel-heading">
			            <div class="eventHeader2">Attendees</div>
			          </div>
			          <div class="list-group">
			            <a href="#" class="list-group-item">Ericca Go</a>
			            <a href="#" class="list-group-item">Trevor Doan</a>
			          </div>           
			        </div>
			      </div>
			  </div>
			</div>

			</div>
		);
	}
}