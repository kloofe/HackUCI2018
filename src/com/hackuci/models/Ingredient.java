package com.hackuci.models;

public class Ingredient {
	
	// Properties
	private String iname;
	private String quantity;
	
	// Constructors
	Ingredient() {
		iname = null;
		quantity = null;
	}
	
	Ingredient(String iname, String quantity) {
		this.iname = iname;
		this.quantity = quantity;
	}
	
	// Methods
	
	public String getIname() {
		return iname;
	}
	public void setIname(String iname) {
		this.iname = iname;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
}
