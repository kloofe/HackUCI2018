package com.hackuci.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Root {
    @RequestMapping(value = "/*")
    public String index() {
        return "index";
    }
}