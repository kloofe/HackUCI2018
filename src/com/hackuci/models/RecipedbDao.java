package com.hackuci.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class RecipedbDao {
    @Autowired
    private JdbcTemplate connection;    
    
    public void query(String q) {
        System.out.println(q);
    }
}
