
$(function() {


    $(".aside-nav").on("click","a", function (event) {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 70}, 1000);
        $('.menu-icon').toggleClass("active");
        $('aside').slideToggle(function(){
			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
				}
		});
    });


    $('.menu-icon').on('click', function() {
		$(this).toggleClass("active");
		
		$('aside').slideToggle(function(){
			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
				}
		});
		
	});


});