

$(function() {
$( "#box" ).draggable({containment: "window" }); 
$("#box").css({top: $.cookie("top"), left: $.cookie("left")});

});


