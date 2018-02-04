import React from 'react';
import Banner from './navForTwoPages.js';
import RecipeCard from './recipeCard.js';
import axios from 'axios';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: []
		}

		this.getRecipes = this.getRecipes.bind(this);
	}

	componentWillMount() {
		console.log("SDLKFJ:SLDKFJ");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 7fcfd2d545943ed909ea530696e6172ef33d1a99
=======
>>>>>>> 7fcfd2d545943ed909ea530696e6172ef33d1a99
=======
>>>>>>> 7fcfd2d545943ed909ea530696e6172ef33d1a99

		/*axios.get('https://choppingboard.recipes/api/v0/recipe', {
		    params: {
		      key: '9f68eae3200bc928e3693545ec1ae778',
		      q: 'http://allrecipes.com/recipe/8765/smothered-bacon-chicken/'

			}
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});*/

		this.getRecipes();
	}

	getRecipes() {
		axios.get('/HackUCI2018/	api/user/1')
		.then((response) => {
			this.setState({recipes: response['data']});
		})
		.catch(function (error) {
			console.log(error);
		});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7fcfd2d545943ed909ea530696e6172ef33d1a99
=======
>>>>>>> 7fcfd2d545943ed909ea530696e6172ef33d1a99
=======
>>>>>>> 7fcfd2d545943ed909ea530696e6172ef33d1a99
=======
>>>>>>> 7fcfd2d545943ed909ea530696e6172ef33d1a99
	}
	
	render() {
		console.log(this.state.recipes);
		return (
			<div id="home">
				<Banner />
				<div className="content container">
	            <div className="row recipes">
	            	{this.state.recipes.map((recipe) => <RecipeCard recipe={recipe} key={recipe['id']}/>)}	                
	            </div>

	            <div id ="addRecipes"> 
	                <i className="fas fa-plus-circle fa-3x"></i>
	            </div>
	        </div>
			</div>
		);
	}
}