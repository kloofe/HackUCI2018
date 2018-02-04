import React from 'react';
import Modal from 'react-modal';

export default class AddRecipe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false
		};

    	this.openModal = this.openModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	}
 
	openModal() {
  		this.setState({modalIsOpen: true});
	}
  
	closeModal() {
		this.setState({modalIsOpen: false});
	}
	
	render() {
		return (
			<div>
	        </div>
		);
	}
}