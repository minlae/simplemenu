const bmoSite = {};


bmoSite.hamburgerMenu = function() {
	$("#hamburger").click(function() {
		$(".menu").toggle();
		// jQuery toggle command toggles between "show" and "hide"				
	});
}

bmoSite.events = function() {
	bmoSite.hamburgerMenu();
}

bmoSite.init = function() {
	bmoSite.events();
}

$(document).ready(function() {
	bmoSite.init();
})