package com.hackuci.models;

import java.util.List;

public class RequestWrapper {
	
	// Properties
	private Recipe rcpe;
	private List<Ingredient> ingrdnts;
	
	// Constructors
	RequestWrapper() {
		rcpe = null;
		ingrdnts = null;
	}
	
	RequestWrapper(Recipe rcpe, List<Ingredient> ingrdnts) {
		this.rcpe = rcpe;
		this.ingrdnts = ingrdnts;
	}
	
	// Methods
	public Recipe getRcpe() {
		return rcpe;
	}

	public void setRcpe(Recipe rcpe) {
		this.rcpe = rcpe;
	}

	public List<Ingredient> getIngrdnts() {
		return ingrdnts;
	}

	public void setIngrdnts(List<Ingredient> ingrdnts) {
		this.ingrdnts = ingrdnts;
	}
	
}
