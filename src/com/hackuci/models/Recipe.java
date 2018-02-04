package com.hackuci.models;

public class Recipe {
	
	// Properties
	private String recipeName;
	private String recipePic;
	private String prepTime;
	private String cookTime;
	private String totalTime;
	private String steps;
	private int id;
	
	// Constructor
	
	Recipe(String recipeName, String recipePic, String prepTime, 
				String cookTime, String totalTime, String steps, int id)
	{
		this.recipeName = recipeName;
		this.recipePic  = recipePic;
		this.prepTime   = prepTime;
		this.cookTime   = cookTime;
		this.totalTime  = totalTime;
		this.steps		= steps;
		this.id         = id;
	}

	public Recipe() {
		
	}

	public String getRecipeName() {
		return recipeName;
	}

	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}

	public String getRecipePic() {
		return recipePic;
	}

	public void setRecipePic(String recipePic) {
		this.recipePic = recipePic;
	}

	public String getPrepTime() {
		return prepTime;
	}

	public void setPrepTime(String prepTime) {
		this.prepTime = prepTime;
	}

	public String getCookTime() {
		return cookTime;
	}

	public void setCookTime(String cookTime) {
		this.cookTime = cookTime;
	}

	public String getTotalTime() {
		return totalTime;
	}

	public void setTotalTime(String totalTime) {
		this.totalTime = totalTime;
	}

	public String getSteps() {
		return steps;
	}

	public void setSteps(String steps) {
		this.steps = steps;
	}

	public int getId() {
	    return id;
	}

	public void setId(int id) {
	    this.id = id;
	}
}
