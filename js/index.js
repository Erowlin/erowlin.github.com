$("#arrow-down-first").click(function(){
	$("body").scrollTo("#whoami");
});


$("body").click(function(){
	console.log($("#menu-scroll"));
	if (("#menu-scroll").hidden == true)
		$("#menu-scroll").hide();
});

$("#button-menu-scroll").click(function(){
	$("#menu-scroll").toggle("visible");
});


function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };

