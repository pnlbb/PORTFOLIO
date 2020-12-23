$(document).ready(function(){
	$('.home').click(function(){
		$('.clear').removeClass('on');
		$('#content2').fadeOut(200);
		$('#content3').fadeOut(200);
		$('#content5').fadeOut(200);
		$('#content6').fadeOut(200);
		$('#content1').fadeIn(200);
	});

	$('.first').click(function(){
		$('.clear').removeClass('on');
		$('.first').addClass('on');
		$('#content1').fadeOut(200);
		$('#content3').fadeOut(200);
		$('#content5').fadeOut(200);
		$('#content6').fadeOut(200);
		$('#content2').fadeIn(200);
	});

	$('.second').click(function(){
		$('.clear').removeClass('on');
		$('.second').addClass('on');
		$('#content1').fadeOut(200);
		$('#content2').fadeOut(200);
		$('#content5').fadeOut(200);
		$('#content6').fadeOut(200);
		$('#content3').fadeIn(200);
	});

	$('.fourth').click(function(){
		$('.clear').removeClass('on');
		$('.fourth').addClass('on');
		$('#content1').fadeOut(200);
		$('#content2').fadeOut(200);
		$('#content3').fadeOut(200);
		$('#content6').fadeOut(200);
		$('#content5').fadeIn(200);
	});

	$('.fifth').click(function(){
		$('.clear').removeClass('on');
		$('.fifth').addClass('on');
		$('#content1').fadeOut(200);
		$('#content2').fadeOut(200);
		$('#content3').fadeOut(200);
		$('#content5').fadeOut(200);
		$('#content6').fadeIn(200);
	});


	$('#content2 .btn_arrow.arrow_right').click(function(){
		$('#content2 .btn_arrow.arrow_left').fadeIn(200);
		$('#content2 .btn_arrow.arrow_right').fadeOut(200);
		$('#content2').css({'background':'#ade9fb'});
		$('#content2 .silde_1').fadeOut(200);
		$('#content2 .silde_2').fadeIn(200);
	});

	$('#content2 .btn_arrow.arrow_left').click(function(){
		$('#content2 .btn_arrow.arrow_left').fadeOut(200);
		$('#content2 .btn_arrow.arrow_right').fadeIn(200);
		$('#content2').css({'background':'#4a4750'});
		$('#content2 .silde_2').fadeOut(200);
		$('#content2 .silde_1').fadeIn(200);
	});
	/////////////////////////////////////////////////////////con2

	//1>2
	$('#content3 .btn_arrow.arrow_right.right1').click(function(){
		$('#content3 .btn_arrow.arrow_left.left1').fadeIn(200);
		$('#content3 .btn_arrow.arrow_left.left2').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left3').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right2').fadeIn(200);
		$('#content3 .btn_arrow.arrow_right.right3').fadeOut(200);
		$('#content3').css({'background':'#e5e1df'});
		$('#content3 .silde_1').fadeOut(200);
		$('#content3 .silde_3').fadeOut(200);
		$('#content3 .silde_4').fadeOut(200);
		$('#content3 .silde_2').fadeIn(200);
	});

	//2>3
	$('#content3 .btn_arrow.arrow_right.right2').click(function(){
		$('#content3 .btn_arrow.arrow_left.left1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left2').fadeIn(200);
		$('#content3 .btn_arrow.arrow_left.left3').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right2').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right3').fadeIn(200);
		$('#content3').css({'background':'#ede0d8'});
		$('#content3 .silde_2').fadeOut(200);
		$('#content3 .silde_1').fadeOut(200);
		$('#content3 .silde_4').fadeOut(200);
		$('#content3 .silde_3').fadeIn(200);
	});

	//3>4
	$('#content3 .btn_arrow.arrow_right.right3').click(function(){
		$('#content3 .btn_arrow.arrow_left.left1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left2').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left3').fadeIn(200);
		$('#content3 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right2').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right3').fadeOut(200);
		$('#content3').css({'background':'#ffedeb'});
		$('#content3 .silde_2').fadeOut(200);
		$('#content3 .silde_1').fadeOut(200);
		$('#content3 .silde_3').fadeOut(200);
		$('#content3 .silde_4').fadeIn(200);
	});

	//2>1
	$('#content3 .btn_arrow.arrow_left.left1').click(function(){
		$('#content3 .btn_arrow.arrow_left.left1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left2').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left3').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right1').fadeIn(200);
		$('#content3 .btn_arrow.arrow_right.right2').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right3').fadeOut(200);
		$('#content3').css({'background':'#cdd8d5'});
		$('#content3 .silde_2').fadeOut(200);
		$('#content3 .silde_3').fadeOut(200);
		$('#content3 .silde_4').fadeOut(200);
		$('#content3 .silde_1').fadeIn(200);
	});

	//3>2
	$('#content3 .btn_arrow.arrow_left.left2').click(function(){
		$('#content3 .btn_arrow.arrow_left.left1').fadeIn(200);
		$('#content3 .btn_arrow.arrow_left.left2').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left3').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right2').fadeIn(200);
		$('#content3 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right3').fadeOut(200);
		$('#content3').css({'background':'#e5e1df'});
		$('#content3 .silde_1').fadeOut(200);
		$('#content3 .silde_3').fadeOut(200);
		$('#content3 .silde_4').fadeOut(200);
		$('#content3 .silde_2').fadeIn(200);
	});

	//4>3
	$('#content3 .btn_arrow.arrow_left.left3').click(function(){
		$('#content3 .btn_arrow.arrow_left.left1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_left.left2').fadeIn(200);
		$('#content3 .btn_arrow.arrow_left.left3').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right3').fadeIn(200);
		$('#content3 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content3 .btn_arrow.arrow_right.right2').fadeOut(200);
		$('#content3').css({'background':'#ede0d8'});
		$('#content3 .silde_1').fadeOut(200);
		$('#content3 .silde_2').fadeOut(200);
		$('#content3 .silde_4').fadeOut(200);
		$('#content3 .silde_3').fadeIn(200);
	});
	//////////////////////////////////////////////////////content3

	$('#content5 .btn_arrow.arrow_right').click(function(){
		$('#content5 .btn_arrow.arrow_left').fadeIn(200);
		$('#content5 .btn_arrow.arrow_right').fadeOut(200);
		$('#content5').css({'background':'#e2f6fb'});
		$('#content5 .silde_1').fadeOut(200);
		$('#content5 .silde_2').fadeIn(200);
	});

	$('#content5 .btn_arrow.arrow_left').click(function(){
		$('#content5 .btn_arrow.arrow_left').fadeOut(200);
		$('#content5 .btn_arrow.arrow_right').fadeIn(200);
		$('#content5').css({'background':'#dae6fc'});
		$('#content5 .silde_2').fadeOut(200);
		$('#content5 .silde_1').fadeIn(200);
	});
	////////////////////////////////////////////////////content5

	//1>2
	$('#content6 .btn_arrow.arrow_right.right1').click(function(){
		$('#content6 .btn_arrow.arrow_left.left1').fadeIn(200);
		$('#content6 .btn_arrow.arrow_left.left2').fadeOut(200);
		$('#content6 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content6 .btn_arrow.arrow_right.right2').fadeIn(200);
		$('#content6').css({'background':'#dddddd'});
		$('#content6 .silde_1').fadeOut(200);
		$('#content6 .silde_3').fadeOut(200);
		$('#content6 .silde_2').fadeIn(200);
	});

	//2>3
	$('#content6 .btn_arrow.arrow_right.right2').click(function(){
		$('#content6 .btn_arrow.arrow_left.left1').fadeOut(200);
		$('#content6 .btn_arrow.arrow_left.left2').fadeIn(200);
		$('#content6 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content6 .btn_arrow.arrow_right.right2').fadeOut(200);
		$('#content6').css({'background':'#d5d6d8'});
		$('#content6 .silde_2').fadeOut(200);
		$('#content6 .silde_1').fadeOut(200);
		$('#content6 .silde_3').fadeIn(200);
	});

	//2>1
	$('#content6 .btn_arrow.arrow_left.left1').click(function(){
		$('#content6 .btn_arrow.arrow_left.left1').fadeOut(200);
		$('#content6 .btn_arrow.arrow_left.left2').fadeOut(200);
		$('#content6 .btn_arrow.arrow_right.right1').fadeIn(200);
		$('#content6 .btn_arrow.arrow_right.right2').fadeOut(200);
		$('#content6').css({'background':'#d9d9d9'});
		$('#content6 .silde_2').fadeOut(200);
		$('#content6 .silde_3').fadeOut(200);
		$('#content6 .silde_1').fadeIn(200);
	});

	//3>2
	$('#content6 .btn_arrow.arrow_left.left2').click(function(){
		$('#content6 .btn_arrow.arrow_left.left1').fadeIn(200);
		$('#content6 .btn_arrow.arrow_left.left2').fadeOut(200);
		$('#content6 .btn_arrow.arrow_right.right2').fadeIn(200);
		$('#content6 .btn_arrow.arrow_right.right1').fadeOut(200);
		$('#content6').css({'background':'#dddddd'});
		$('#content6 .silde_1').fadeOut(200);
		$('#content6 .silde_3').fadeOut(200);
		$('#content6 .silde_2').fadeIn(200);
	});
	///////////////////////////////////////////////////content6





	$('.slide').mouseenter(function(){
		$('.hover').stop().fadeIn(300);
	});

	$('.slide').mouseleave(function(){
		$('.hover').stop().fadeOut(300);
	});


	$('.close').click(function(){
		$('.more').fadeOut(200);
	});










	/*more*/
	$('#content3 .silde_1').click(function(){
		$('.cont3_1').fadeIn(200);
	});
	$('#content3 .silde_2').click(function(){
		$('.cont3_2').fadeIn(200);
	});
	$('#content3 .silde_3').click(function(){
		$('.cont3_3').fadeIn(200);
	});
	$('#content3 .silde_4').click(function(){
		$('.cont3_4').fadeIn(200);
	});
	$('#content5 .silde_1').click(function(){
		$('.cont5_1').fadeIn(200);
	});
	$('#content5 .silde_2').click(function(){
		$('.cont5_2').fadeIn(200);
	});
	$('#content6 .silde_1').click(function(){
		$('.cont6_1').fadeIn(200);
	});
	$('#content6 .silde_2').click(function(){
		$('.cont6_2').fadeIn(200);
	});
	$('#content6 .silde_3').click(function(){
		$('.cont6_3').fadeIn(200);
	});







	//m_btn
	$('.menu_btn').click(function(){
		$(this).toggleClass('btn_close');
		$('header ul').toggleClass('menu_open');
	});

	$('header li').click(function(){
		$('header ul').removeClass('menu_open');
		$('.menu_btn').removeClass('btn_close')
	});

	$('header h2').click(function(){
		$('header ul').removeClass('menu_open');
		$('.menu_btn').removeClass('btn_close')
	});
});