$("#arrow-down-first").click(function(){
	$("body").scrollTo("#step2");
});


$( "#button" ).click(function() {
      $("#effect").effect("pulsate", {}, 10000, callback);
      return false;
    });

function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };