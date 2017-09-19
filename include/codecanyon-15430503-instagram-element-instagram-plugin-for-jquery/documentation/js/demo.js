/*
 * Instagram Theatre
 * Version: 1.0
 *
 * Author: Chris Rivers
 * http://chrisriversdesign.com
 *
 *
 * Changelog: 
 * Version: 1.0
 *
 */


$(document).ready(function(){
	// UI
	prettyPrint();
	
	// Events
	$(".start-demo").click(function(){
		$("html, body").animate({
			scrollTop : "300px" 
		}, 1000);
	});
});