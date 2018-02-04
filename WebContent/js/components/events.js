import React from 'react';

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
		return (
				 <tr>
                 <th scope="row">{data.date}</th>
                 <td>{data.name}</td>
                 <td className="textAlignCenter">{data.location}</td>
                 <td className="textAlignRight"><b>Going</b> | Not going</td>
             </tr>
				);
	}
	
	render() {
		return (
			<div id="events" className="content container">
				<h3>Upcoming Events</h3>
			    <table className="table table-hover w-75">
		            <tbody>
		            {fakeData.map((data) => this.renderRow(data))}
		            </tbody>
		        </table>
			</div>
		);
	}
}