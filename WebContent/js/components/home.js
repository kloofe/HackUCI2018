import React from 'react';
import Banner from './navForTwoPages.js';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div id="home">
				<Banner />
				<div className="content container">
	            <div className="row recipes">
	                <div className="card" id ="recipeItem">
	                    <a href=""><img className="card-img-top" src="/Users/brookely/Downloads/sandwich.jpg" alt="Card image cap" /></a>
	                        <div> <h6 id="overlay">[Insert Prep Time]</h6></div>
	                        <div className="card-body">
	                            <h3 className="card-title">BLT Sandie<input id="toggle-heart" type="checkbox" /><label for="toggle-heart" className="float-right-ahhh">❤</label></h3>
	                            <p className="card-text">This is a recipe of a sandwich!</p>
	                        </div>
	                        
	                </div>

	                <div className="card" id = "recipeItem">
	                    <img class="card-img-top" src="/Users/brookely/Downloads/sandwich.jpg" alt="Card image cap" />
	                    <div> <h6 id="overlay">[Insert Prep Time]</h6></div>    
	                        <div class="card-body">
	                            <h3 class="card-title">BLT Sandie<input id="toggle-heart" type="checkbox" /><label for="toggle-heart" className="float-right-ahhh">❤</label></h3>
	                            <p class="card-text">This is a recipe of a sandwich!</p>
	                        </div>
	                </div>

	                <div class="card" id = "recipeItem">
	                    <img class="card-img-top" src="/Users/brookely/Downloads/sandwich.jpg" alt="Card image cap" />
	                    <div> <h6 id="overlay">[Insert Prep Time]</h6></div>
	                        <div class="card-body" >
	                            <h3 class="card-title">BLT Sandie<input id="toggle-heart" type="checkbox" /><label for="toggle-heart" className="float-right-ahhh">❤</label></h3>
	                            <p class="card-text">This is a recipe of a sandwich!</p>
	                        </div>
	                </div>
	            </div>

	            <div id ="addRecipes"> 
	                <i class="fas fa-plus-circle fa-3x"></i>
	            </div>
	        </div>
			</div>
		);
	}
}