
$(document).ready(function(){
	
	//Slider
  $(function() {
    $(".rslides").responsiveSlides({
			auto: false,
			pager: true,
			nav: true
		});
  });
	
	//menu jumping
  $('a[href="#reg_form"]').click(function(){
  var el = $(this).attr('href');
  $('html, body').animate({
  scrollTop: $(el).offset().top}, 1000);
  return false;
  });
	
	
});

