$(function() {


$("#js-testimonials").slick({
  dots: false,
  arrows: false
});

$(".testimonials__controls_left").click(function(){
	$("#js-testimonials").slick("slickPrev");
});

$(".testimonials__controls_right").click(function(){
	$("#js-testimonials").slick("slickNext");
});

});
