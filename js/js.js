$(document).ready(function() {
	$(".circle").click(function() {
		$('.hero .container').slideUp(1000).animate({
			opacity: "0", top: "-20px"}, { duration: 500, queue: false });
		$('.circle img').fadeOut(1000);
		$('.circle .page-title').fadeIn(1500);
		setTimeout(function(){
			$('.circle').animate({
			opacity: "0"}, { duration: 100, queue: false }).animate({
			left: "-400px"}, { duration: 200, queue: false });
		},2000);
		setTimeout(function(){
			$('.hero').slideUp(200);
			$.ajax({
			  url: "ofirmie.html",
			  cache: false
			}).done(function( html ) {
			  $( ".main .container" ).animate({opacity: "0"}, { duration: 100, queue: true }).html(html).animate({opacity: "1"}, { duration: 100, queue: true });
			});
		},2600);
	});

	$(".left").click(function() {

		$('.hero').slideDown(300);
		$('.circle img').show();
		$('.circle .page-title').hide();
		setTimeout(function(){
			$('.circle').css("left","0px").animate({
			opacity: "1"}, { duration: 200, queue: false });
		},300);
		setTimeout(function(){
			$('.hero .container').slideDown(500).animate({
				opacity: "1", top: "0px"}, { duration: 200, queue: false });
		},1000);

	});

	$("footer").click(function() {
		$('.hero').slideDown(300);
		$('.circle .page-title').html("kontakt");
		setTimeout(function(){
			$('.circle').css("left","0px").animate({
			opacity: "1"}, { duration: 200, queue: false });
		},300);
		setTimeout(function(){
			$('.circle').animate({
			opacity: "0"}, { duration: 100, queue: false }).animate({
			left: "-400px"}, { duration: 200, queue: false });
		},3000);
		setTimeout(function(){
			$('.hero').slideUp(200);
			$.ajax({
			  url: "kontakt.html",
			  cache: false
			}).done(function( html ) {
			  $( ".main .container" ).animate({opacity: "0"}, { duration: 100, queue: true }).html(html).animate({opacity: "1"}, { duration: 100, queue: true });
			});
		},3500);
	});




});