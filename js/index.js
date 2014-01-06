$("#arrow-down-whoami").click(function(){
	$("body").scrollTo("#whoami-scroll");
});

$("#arrow-down-skills").click(function(){
	$("body").scrollTo("#skills-scroll");
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$("#menu-scroll").toggle("visible");
   }   // esc
});

$("#arrow-down-whoami").click(function(){
	$("body").scrollTo("#whoami-scroll");
});

$("#arrow-down-moreaboutme").click(function(){
	$("body").scrollTo("#moreabuotme-scroll");
});

$("#button-menu-scroll").click(function(clicked){
	$("#menu-scroll").toggle("visible");
});


// $("*").click(function(clicked, ev){
	
// 	clicked.preventDefault();
// 	console.log(clicked.currentTarget);

// 	if (! (clicked.currentTarget.id == "button-menu-scroll")) {
// 	// if (("#menu-scroll").hidden == true)
// 		console.log("Rentre");
// 	}
// });


function callback() {
	setTimeout(function() {
		$( "#effect" ).removeAttr( "style" ).hide().fadeIn();
	}, 1000 );
};

