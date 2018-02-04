import React from 'react';
import Banner from './navForTwoPages.js';
import axios from 'axios';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("SDLKFJ:SLDKFJ");
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
	}
	
	render() {
		return (
			<div id="home">
				<Banner />
				<div className="content container">
	            <div className="row recipes">
	                <div className="card" className="recipeItem">
	                    <a href=""><img className="card-img-top" src="https://s3.amazonaws.com/neopets_pictures/Meepits2.PNG" alt="Card image cap" /></a>
	                        <div> <h6 id="overlay">[Insert Prep Time]</h6></div>
	                        <div className="card-body">
	                            <h3 className="card-title">BLT Sandie<input id="toggle-heart" type="checkbox" /><label for="toggle-heart" className="float-right-ahhh">❤</label></h3>
	                            <p className="card-text">This is a recipe of a sandwich!</p>
	                        </div>
	                        
	                </div>

	                <div className="card" className = "recipeItem">
	                    <a href=""><img className="card-img-top" src="https://s3.amazonaws.com/neopets_pictures/Meepits2.PNG" alt="Card image cap" /></a>
	                    <div> <h6 id="overlay">[Insert Prep Time]</h6></div>    
	                        <div className="card-body">
	                            <h3 className="card-title">BLT Sandie<input id="toggle-heart" type="checkbox" /><label for="toggle-heart" className="float-right-ahhh">❤</label></h3>
	                            <p className="card-text">This is a recipe of a sandwich!</p>
	                        </div>
	                </div>

	                <div className="card" className = "recipeItem">
	                    <a href=""><img className="card-img-top" src="https://s3.amazonaws.com/neopets_pictures/Meepits2.PNG" alt="Card image cap" /></a>
	                    <div> <h6 id="overlay">[Insert Prep Time]</h6></div>
	                        <div className="card-body" >
	                            <h3 className="card-title">BLT Sandie<input id="toggle-heart" type="checkbox" /><label for="toggle-heart" className="float-right-ahhh">❤</label></h3>
	                            <p className="card-text">This is a recipe of a sandwich!</p>
	                        </div>
	                </div>
	            </div>

	            <div id ="addRecipes"> 
	                <i className="fas fa-plus-circle fa-3x"></i>
	            </div>
	        </div>
			</div>
		);
	}
}