package com.hackuci.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hackuci.models.Recipe;
import com.hackuci.models.RecipedbDao;

@Controller
public class Events {
    @Autowired
    private RecipedbDao db;
    
    // Get recipes for a specific event
    @RequestMapping(value = "/api/events/{eid}", method = RequestMethod.GET)
    @ResponseBody 
    String getRecipesForEvent(
    		@PathVariable("eid") long eid) 
    {
    	System.out.println("Get all recipes for event #" + eid);
    	
    	// Returns the first recipe of the event's name - will change!
    	return db.eventRecipesQuery(eid).get(0).getRecipeName();
    }
    
    @RequestMapping(value = "/api/user/{uid}", method = RequestMethod.GET)
    @ResponseBody 
    String getRecipesForUser(
    		@PathVariable("uid") long uid) 
    {
    	System.out.println("Get all recipes for user #" + uid);
    	
    	// Returns the first recipe of the user - will change!
    	return db.userRecipesQuery(uid).get(0).getRecipeName();
    }
    
    @RequestMapping(value = "/api/recipe/{rid}", method = RequestMethod.GET)
    @ResponseBody 
    String getIngredientsForRecipe(
    		@PathVariable("rid") long rid) 
    {
    	System.out.println("Get all ingredients for #" + rid);
    	
    	// Returns the first ingredient of the recipe - will change!
    	return db.recipeIngredientsQuery(rid).get(0).getIname();
    }
    
    
    // TODO: Method to take list of strings and add them to a recipe object
}
