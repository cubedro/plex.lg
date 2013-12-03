/*
 * PLEX Library function
 *
 * Copyright (c) 2013 Simon J. Hogan
 * 
 * Modified: 2013/12/2
 *
 * Version:  0.1
 *
 */

function Library()
{

};

/* Configuration & Settings */
Library.prototype.setServerUrl = function(url) {
	localStorage.setItem("serverUrl", url); 
};

Library.prototype.getServerUrl = function() {
	return localStorage.getItem("serverUrl");    
};

Library.prototype.removeServerUrl = function() {
	localStorage.removeItem("serverUrl");    
};

Library.prototype.getLibraryServer = function(callback) {
	$.get(this.getServerUrl(), callback);
};

Library.prototype.showDialog = function(ref) {
	$(ref).fadeIn();
};

Library.prototype.hideDialog = function(ref) {
	$(ref).fadeOut();
};

Library.prototype.scanNetwork = function(ip, callback) {
	var url = "";
	
	for (i = 0; i <= 255; i++) {
		url = "http://" + ip.substr(0, ip.lastIndexOf(".")+1) + i.toString() + ":32400";
		$.get(url, callback);	
	}
};

/* Loader functions */
Library.prototype.showLoader = function(message) {
	$("#message").text(message);
	$("#loader").show();
};

Library.prototype.hideLoader = function() {
	$("#loader").hide();
};

/* Filter functions */
Library.prototype.toggleFilter = function() {
	$("#sectionFilter").toggle();
};

Library.prototype.showFilter = function() {
	$("#sectionFilter").show();
};

Library.prototype.hideFilter = function() {
	$("#sectionFilter").hide();
};


/* Movie functions */
Library.prototype.getSections = function(callback) {
	$.get(this.getServerUrl() + "/library/sections", callback);
};

Library.prototype.getSectionOptions = function(id, callback) {
	var url = this.getServerUrl() + "/library/sections/" + id;
	$.get(url, callback);
};

Library.prototype.getAllSectionMediaItems = function(id, callback) {
	var url = this.getServerUrl() + "/library/sections/" + id + "/all";
	$.get(url, callback);
};

Library.prototype.getSectionCategoryItems = function(id, category, callback) {
	var url = this.getServerUrl() + "/library/sections/" + id + "/" + category;
	$.get(url, callback);
};

Library.prototype.getSectionCategoryMediaItems = function(id, category, categoryId, callback) {
	var url = this.getServerUrl() + "/library/sections/" + id + "/" + category + "/" + categoryId;
	if (category == "folder") {
		url = this.getServerUrl() + "/library/sections/" + id + "/" + category + "?parent=" + categoryId;
	} 
	$.get(url, callback);
};

Library.prototype.getMediaItem = function(id, callback) {
	var url = this.getServerUrl() + "/library/metadata/" + id;	
	$.get(url, callback);
};

Library.prototype.getChildrenMediaItems = function(id, callback) {
	var url = this.getServerUrl() + "/library/metadata/" + id + "/children";	
	$.get(url, callback);
};
