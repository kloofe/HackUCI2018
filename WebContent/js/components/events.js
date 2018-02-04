import React from 'react';
import Banner from './navForTwoPages.js';
import {Link} from 'react-router-dom';

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
	
	render() {
		return (
			<div>
				<Banner />
				<div id="events" className="content container">
					<h3>Upcoming Events</h3>
				    <table className="table table-hover w-75">
			            <tbody>
			            {fakeData.map((data) => this.renderRow(data))}
			            </tbody>
			        </table>
				</div>
			</div>
		);
	}
}