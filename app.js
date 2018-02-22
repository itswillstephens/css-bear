$(document).ready(function() {

  $("#snout, #nose, #mouth-vertical, #mouth-horizontal-left, #mouth-horizontal-right").click(function() {
    $( "#tongue-base, #tongue-crease" ).toggle();
    });

});
