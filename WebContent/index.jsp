<html>
<head>
<style>
	@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto: :300,400');
	#home {
		background-color: #F4F4F4; 
		font-family: 'Abril Fatface'; 
		letter-spacing: 1.5px;
	}
	
	p {
		font-family: 'Roboto', sans-serif;
		letter-spacing: 0.5px;
		font-weight: 300;
	}
	
	.profile-img {
		text-align: center; 
		padding: 75px 0px 50px;
	}
	
	.profile-overlay {
		position: absolute;
	  	top: 0;
	  	bottom: 0;
	  	left: 0;
	  	right: 0;
	  	opacity: 0;
	  	transition: .5s ease;
	  	background-color: #008CBA;
	}
	
	.profile-img:hover .overlay{
		opacity: 1;
	}
	
	.text {
		color: white;
	  	font-size: 20px;
	  	position: absolute;
	  	top: 50%;
	  	left: 50%;
	  	transform: translate(-50%, -50%);
	    -ms-transform: translate(-50%, -50%);
	  	text-align: center;
	}
	
	hr {
		width: 90%;
	}
	
	/* @Navigation Bar */
	#navigation .navbar-nav { 
	  width: 100%;
	  text-align: center;
	  padding-top: 15px;
	  display: inline-block;
	}
	
	#navigation .navbar-nav li {
	  display: inline-block;
	  float: none;
	  font-size: 1.2em;
	
	}
	
	#navigation .navbar-nav li > a {
	  color: black;
	  padding-left: 45px;
	  padding-right: 45px;
	}
	
	.recipes {
		text-align: center;
	}
	
	#recipeItem  {
		width: 20rem; border: 0; 
		background-color: #F4F4F4;
		margin: 1.5rem;
	}
	
	.card-body {
		background-color: white;
	}
	
	#toggle-heart{
		position: absolute;
	  	left: -100vw;
	}
	
	input[id=toggle-heart]:checked + label {
	 
	    color: #e2264d;  
	}
	
	[for='toggle-heart'] {
	    align-self: center;
	    color: #aab8c2;
	    font-size: 1em;
	    cursor: pointer;
	}
	
	#overlay {
		padding: 3px 0px;
		color: white; 
		background-color: #E79A8E;
	}
	
	#addRecipes {
		float: right;
		background-color: #F4F4F4;
	}





</style>
</head>
<body>
    <div id="react"></div>
    <script src="./built/bundle.js"></script>
</body>
</html>