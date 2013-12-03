/*
 * Arrow Key Navigation - jQuery plugin for arrow navigation
 *
 * Copyright (c) 2013 Simon J. Hogan
 * 
 * Modified: 2013/12/2
 *
 * Version:  0.1
 *
 */

(function ( $ ) { 
    $.fn.arrowNavigation = function() { 
        $(this).keydown(function(e) {   
    		if (e.keyCode == 461) {
    			history.go(-1);
    		}
        	
	        if ($("a:focus").length > 0) { 
	            var x = $("a:focus").data("index").substr(0, $("a:focus").data("index").indexOf("_")); 
	            var y = $("a:focus").data("index").substr($("a:focus").data("index").indexOf("_")+1); 
	                                        
                if (e.keyCode == 39) { 
                    $item = $("a[data-index='" + (parseInt(x)+1) + "_" + y + "']").filter(":visible").filter(":first").focus();                           
                    if($item.length == 0) { 
                    	$("a[data-index^='" + (parseInt(x)+1) + "_']:first").focus(); 
                    } 
                    e.preventDefault();                  
                } 
                
                if (e.keyCode == 37) {       
                    $item = $("a[data-index='" + (parseInt(x)-1) + "_" + y + "']").filter(":visible").filter(":first").focus();               
                    if($item.length == 0) { 
                    	$("a[data-index^='" + (parseInt(x)-1) + "_']").focus(); 
                    }  
                    e.preventDefault();                                          
                } 
                          
                if (e.keyCode == 40) {       
                    $item = $("a[data-index='" + x + "_" + (parseInt(y)+1) + "']").filter(":visible").filter(":first").focus();           
                    if($item.length == 0) { 
                    	$("a[data-index$='_" + (parseInt(y)+1) + "']").focus(); 
                    }  
                    e.preventDefault();        
                } 
                
                if (e.keyCode == 38) {       
                    $item = $("a[data-index='" + x + "_" + (parseInt(y)-1) + "']").filter(":visible").filter(":first").focus();         
                    if($item.length == 0) { 
                    	$("a[data-index$='_" + (parseInt(y)-1) +  "']").focus(); 
                    }  
                    e.preventDefault();            
                } 
                
                $("#message").text($("a:focus").data("index")); 
	        } else {
	        	$("a:first").focus();
	        }
        }); 
    }; 
}(jQuery));
