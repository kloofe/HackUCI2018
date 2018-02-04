package com.hackuci.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class RecipedbDao {
    @Autowired
    private JdbcTemplate connection;    
    
    public List<Recipe> eventRecipesQuery(long eid) {
    	System.out.println("Getting recipe list");
    	List<Recipe> recipes = new ArrayList<Recipe>();
    	
    	List<Map<String, Object>> item = connection.queryForList(
    			"SELECT r.rname, r.recipepic, r.prepTime, r.cookTime, r.totalTime, r.steps, rae.recipeID " + 
    			"FROM recipe AS r, recipesAtEvents as rae " + 
    			"WHERE rae.eventID = " + eid + " AND r.rid = rae.recipeID;");
    	
    	for(Map<String, Object> row : item ) {
    		Recipe temp = new Recipe();
    		
    		temp.setRecipeName((String)(row.get("rname")));
    		temp.setRecipePic((String)(row.get("recipepic")));
    		temp.setPrepTime((String)(row.get("prepTime")));
    		temp.setCookTime((String)(row.get("cookTime")));
    		temp.setTotalTime((String)(row.get("totalTime")));
    		temp.setSteps((String)(row.get("steps")));
    		
    		recipes.add(temp);
    	}
    	
    	return recipes;
    }
    
    public List<Recipe> userRecipesQuery(long uid) {
    	System.out.println("Getting recipe list");
    	List<Recipe> recipes = new ArrayList<Recipe>();
    	
    	List<Map<String, Object>> item = connection.queryForList(
    			"SELECT r.rid, r.rname, r.recipepic, r.prepTime, r.cookTime, r.totalTime, r.steps, ur.recipeID " +
    			"FROM recipe as r, usersRecipes as ur " +
    			"WHERE ur.userID = " + uid + " and r.rid = ur.recipeID;");
    	
    	for(Map<String, Object> row : item ) {
    		Recipe temp = new Recipe();
    		
    		temp.setRecipeName((String)(row.get("rname")));
    		temp.setRecipePic((String)(row.get("recipepic")));
    		temp.setPrepTime((String)(row.get("prepTime")));
    		temp.setCookTime((String)(row.get("cookTime")));
    		temp.setTotalTime((String)(row.get("totalTime")));
    		temp.setSteps((String)(row.get("steps")));
    		
    		recipes.add(temp);
    	}
    	
    	return recipes;
    }
    
    public List<Ingredient> recipeIngredientsQuery(long rid) {
    	System.out.println("Getting recipe list");
    	List<Ingredient> ingredients = new ArrayList<Ingredient>();
    	
    	List<Map<String, Object>> item = connection.queryForList(
    			"SELECT i.iname, i.quantity, iir.ingredientid " + 
    			"FROM ingredient as i, ingredientsInRecipe as iir " + 
    			"WHERE iir.recipeID = " + rid + " and i.iid = iir.ingredientid;");
    	
    	for(Map<String, Object> row : item ) {
    		Ingredient temp = new Ingredient();

    		temp.setIname((String)(row.get("iname")));
    		temp.setQuantity((String)(row.get("quantity")));
    		
    		ingredients.add(temp);
    	}
    	
    	return ingredients;
    }
}
