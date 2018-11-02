///Articles fade///
$(function($) {
	setTimeout(function() {
        $('h1').css("color", "black");
    }, 3000);
});

$(function($) {
	setTimeout(function() {
        $('h2').css("color", "black");
    }, 3000);
});

$(function($) {
	setTimeout(function() {
        $('h3').css("color", "black");
    }, 3000);
});

///Images Appear///
$(document).ready(function(){
    $("#iceberg").mouseenter(function(){
        $("#iceberg").fadeOut();
    });
    $("#iceberg").mouseleave(function(){
        $("#iceberg").fadeIn();
    });
});

$(document).ready(function(){
    $("#yemen").mouseenter(function(){
        $("#yemen").fadeOut();
    });
    $("#yemen").mouseleave(function(){
        $("#yemen").fadeIn();
    });
});

$(document).ready(function(){
    $("#caravan").mouseenter(function(){
        $("#caravan").fadeOut();
    });
    $("#caravan").mouseleave(function(){
        $("#caravan").fadeIn();
    });
});

///Alert///
$('h1').click(function(){
    alert("are you sure?");
});

$('h2').click(function(){
    alert("are you sure?");
});

$('h3').click(function(){
    alert("are you sure?");
});

///Video-BUTTONS///
$(function($) {
	setTimeout(function() {
        $('#button').show();
    }, 10000);
});

$(function($) {
	setTimeout(function() {
        $('#button_two').show();
    }, 10400);
});

$(function($) {
	setTimeout(function() {
        $('#button_three').show();
    }, 10800);
});

$(function($) {
	setTimeout(function() {
        $('#button_four').show();
    }, 11200);
});

$(function($) {
	setTimeout(function() {
        $('#button_five').show();
    }, 11600);
});

$(function($) {
	setTimeout(function() {
        $('#button_six').show();
    }, 12000);
});

$(function($) {
	setTimeout(function() {
        $('#button_seven').show();
    }, 12400);
});

$('#button').on('click', function() {
	$('#button').hide();
});

$('#button_two').on('click', function() {
	$('#button_two').hide();
});

$('#button_three').on('click', function() {
	$('#button_three').hide();
});

$('#button_four').on('click', function() {
	$('#button_four').hide();
});

$('#button_five').on('click', function() {
	$('#button_five').hide();
});

$('#button_six').on('click', function() {
	$('#button_six').hide();
});

$('#button_seven').on('click', function() {
	$('#button_seven').hide();
});
///Video-IMAGE///
$('#iceberg').on('click', function() {
	$('#not').fadeIn();
});

$('#yemen').on('click', function() {
	$('#not').fadeIn();
});

$('#caravan').on('click', function() {
	$('#not').fadeIn();
});

$('#not').on('click', function() {
	$('#not').hide();
});

