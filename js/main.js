// main.js

// 스크롤이벤트
$(document).ready(function(){
		$('.portfolio').click(function(){
			var offset = $('#main_portfolio').offset(); 
	        $('html').animate({scrollTop : offset.top}, 600);
		});
		$('.about').click(function(){
			var offset = $('#main_about').offset(); 
	        $('html').animate({scrollTop : offset.top}, 600);
		});
		$('.contact').click(function(){
			var offset = $('#main_contact').offset(); 
	        $('html').animate({scrollTop : offset.top}, 600);
		});
	});


// 팝업
$(function(){
	$('.web_1').click(function(){
		$('#pop_up_web1').show();
	})
})