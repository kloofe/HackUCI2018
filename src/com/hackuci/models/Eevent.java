package com.hackuci.models;

import java.sql.Timestamp;

public class Eevent {
	
	// Properties
	private String  ename;
	private String  location;
	private Timestamp 	edate;
	
	// Constructors
	Eevent() {
		ename = null;
		location = null;
		edate = null;
	}
	
	Eevent(String ename, String location, Timestamp edate) {
		this.ename = ename;
		this.location = location;
		this.edate = edate;
	}
	
	// Methods
	
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Timestamp getEdate() {
		return edate;
	}
	public void setEdate(Timestamp edate) {
		this.edate = edate;
	}
	
	
}
