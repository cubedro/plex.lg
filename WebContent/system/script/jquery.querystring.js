/*
 * Querystring - jQuery plugin for querystring access
 *
 * Copyright (c) 2013 Simon J. Hogan
 * 
 * Modified: 2013/12/2
 *
 * Version:  0.1
 *
 */

jQuery.extend({
  querystring: function(){
    var nvpair = {};
    var qs = window.location.search.replace('?', '');
    var pairs = qs.split('&');
    $.each(pairs, function(i, v){
      var pair = v.split('=');
      nvpair[pair[0]] = pair[1];
    });
    return nvpair;
  }
});