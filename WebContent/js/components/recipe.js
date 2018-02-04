import React from 'react';

export default class Recipe extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="container">
		        <h2>Recipe Title</h2>

		        <div className="row">
		            <div className="col">
		                <div><h3>Ingredients</h3></div>
		                <ul className="list-group list-group-flush">
		                    <li className="list-group-item">Cras justo odio</li>
		                    <li className="list-group-item">Dapibus ac facilisis in</li>
		                    <li className="list-group-item">Morbi leo risus</li>
		                    <li className="list-group-item">Porta ac consectetur ac</li>
		                    <li className="list-group-item">Vestibulum at eros</li>
		                </ul>
		            </div>
		            <div className="col">
		                <div><h3>Instructions</h3></div>
		                <ul className="list-group list-group-flush">
		                    <li className="list-group-item">Cras justo odio</li>
		                    <li className="list-group-item">Dapibus ac facilisis in</li>
		                    <li className="list-group-item">Morbi leo risus</li>
		                    <li className="list-group-item">Porta ac consectetur ac</li>
		                    <li className="list-group-item">Vestibulum at eros</li>
		                </ul>
		            </div>
		        </div>
		    </div>
		);
	}
}