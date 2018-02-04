package com.hackuci.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMethod;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@Controller
public class Root {
    @RequestMapping(value = "/*")
    public String index() 
    {
        return "index";
    }

    // Get recipes for a specific event
    @RequestMapping(value = "/events/{eid}", method = RequestMethod.GET)
    @ResponseBody 
    public String getRecipesForEvent(
    		@PathVariable("eid") long eid) 
    {
    	System.out.println("Get all recipes for event #" + eid);
    	return "Get all recipes for event #" + eid + "\n";
    }
    
    public void queryForRecipesForEvent(long eid)
    {
    	Connection conn = null;
    	Statement stmt = null;
    	ResultSet rs = null;
    	
    	// TODO: This doesn't work on my computer for some reason - debug - Trevor
    	try {
    	    conn = DriverManager.getConnection("jdbc:mysql://localhost/events/" + eid);

    	    stmt = conn.createStatement();
    	    rs = stmt.executeQuery("SELECT recipeID FROM recipesAtEvents WHERE eventID = '" + eid + "'");
    	    
    	    if (stmt.execute("SELECT recipeID FROM recipesAtEvents WHERE eventID = '" + eid + "'"))
    	    {
    	    	rs = stmt.getResultSet();
    	    }
    	    
    	    // TODO: print all of the items in result set

    	   
    	} catch (SQLException ex) {
    	    // handle any errors
    	    System.out.println("SQLException: " + ex.getMessage());
    	    System.out.println("SQLState: " + ex.getSQLState());
    	    System.out.println("VendorError: " + ex.getErrorCode());
    	}
    }
}