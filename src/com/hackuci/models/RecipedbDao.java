package com.hackuci.models;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

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
    
    public List<Eevent> allEventsQuery() {
    	System.out.println("Querying all events");
    	List<Eevent> events = new ArrayList<Eevent>();
    	
    	List<Map<String, Object>> item = connection.queryForList(
    			"SELECT e.ename, e.location, e.edate " + 
    			"FROM event as e;");
    	
    	for(Map<String, Object> row : item ) {
    		Eevent temp = new Eevent();

    		temp.setEname((String)(row.get("ename")));
    		temp.setLocation((String)(row.get("location")));
    		temp.setEdate((Timestamp)(row.get("edate")));
    		
    		events.add(temp);
    	}
    	
    	return events;
    	
    }
    
    public void recipeInsertion(RequestWrapper requestWrapper) {
    	
    	String sql = "INSERT INTO recipe (rname, recipepic, prepTime, cookTime, totalTime, steps) VALUES(" + requestWrapper.getRcpe().getRecipeName() + ", " 
    																									   + requestWrapper.getRcpe().getRecipePic()  + ", "
    																									   + requestWrapper.getRcpe().getPrepTime()   + ", "
    																									   + requestWrapper.getRcpe().getCookTime()   + ", "
    																									   + requestWrapper.getRcpe().getTotalTime()  + ", "
    																									   + requestWrapper.getRcpe().getSteps()      + ");";
    	KeyHolder holder = new GeneratedKeyHolder();
    	
    	// Is not working rn
    	connection.update(new PreparedStatementCreator() {           
    	    @Override
    	    public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
    	        PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
    	        ps.setString(1, templateRequest.getTitle());
    	        ps.setString(2, templateRequest.getDecription());        
    	        return ps;
    	    }
    	}, holder);
    	 
    	Long request_id = holder.getKey().longValue();
    	
    	for(int i = 0; i < requestWrapper.getIngrdnts().size(); i++)
    	{
    		connection.update("INSERT INTO ingredient (iname, quantity) VALUES(" + requestWrapper.getIngrdnts().get(i).getIname() + ", "
    																			 + requestWrapper.getIngrdnts().get(i).getQuantity() + ");");
    		
    	}
    	
    }
}
