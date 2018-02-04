import React from 'react';
import Recipe from './recipe.js'
import Modal from 'react-modal';

export default class RecipeCard extends React.Component {
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
			<div className="card" className="recipeItem">
	            <img onClick={this.openModal} className="card-img-top" src="https://s3.amazonaws.com/neopets_pictures/Meepits2.PNG" alt="Card image cap" />
	                <div> <h6 id="overlay">{this.props.recipe['totalTime']}</h6></div>
	                <div className="card-body">
	                    <h3 className="card-title">{this.props.recipe['recipeName']}<input id="toggle-heart" type="checkbox" /><label for="toggle-heart" className="float-right-ahhh">❤</label></h3>
	                </div>
	            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Example Modal">
	            	<button onClick={this.closeModal}>close</button>
	            	<Recipe />
				</Modal>
	        </div>
		);
	}
}