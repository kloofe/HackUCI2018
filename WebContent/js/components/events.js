import React from 'react';
import Banner from './navForTwoPages.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

const fakeData = [{
	date: 'November 28',
	name: 'Friendsgiving',
	location: "Mat's house"
},{
	date: 'November 28',
	name: 'Friendsgiving',
	location: "Mat's house"
}];

export default class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		}

		this.getEvents = this.getEvents.bind(this);

	}
	
	componentWillMount() {
		console.log("eevvveeennntttss");

		this.getEvents();
	}
	
	
	renderRow(data) {
		let url = '/HackUCI2018/events/' + data.name;
		return (
			 <tr>
                 <th scope="row">{data.date}</th>
                 <td><Link to={url}>{data.name}</Link></td>
                 <td className="textAlignCenter">{data.location}</td>
                 <td className="textAlignRight"><b>Going</b> | Not going</td>
             </tr>
			);
	}
	
	getEvents(){
		axios.get('/HackUCI2018/api/event/1')
		.then((response) => {
			this.setState({recipes: response['data']});
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	
	render() {
		return (
			<div>
				<Banner />
				<div id="events" className="content container">
					<h3>Upcoming Events</h3>
				    <table className="table table-hover w-75">
			            <tbody>
			            	{this.state.events.map((data) => this.renderRow(data))}
			            </tbody>
			        </table>
				</div>
			</div>
		);
	}
}