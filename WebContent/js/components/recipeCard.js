import React from 'react';
import Recipe from './recipe.js';
import Modal from 'react-modal';
import axios from 'axios';

export default class RecipeCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false,
			ingredients: []
		};
		
		this.getIngredients = this.getIngredients.bind(this);
    	this.openModal = this.openModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	}
 	
	getIngredients() {
		let url ='/HackUCI2018/api/recipe/' + this.props.recipe.id;
		axios.get(url)
		.then((response) => {
			this.setState({ingredients: response['data']});
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	
	openModal() {
  		this.setState({modalIsOpen: true});
  		this.getIngredients();
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
	            	<Recipe ingredients={this.state.ingredients}/>
				</Modal>
	        </div>
		);
	}
}