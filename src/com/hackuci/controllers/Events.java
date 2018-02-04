package com.hackuci.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hackuci.models.RecipedbDao;

@Controller
public class Events {
    @Autowired
    private RecipedbDao db;
    
    @RequestMapping(value = "/welcome", method = RequestMethod.GET)
    @ResponseBody
    public void foo() {
        db.query("cry");
    }
}
