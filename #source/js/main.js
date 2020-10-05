let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");

document.addEventListener('DOMContentLoaded', function(){
	$('.btn-burger').on('click', function(event) {
	    if ($(this).is(event.target)) {
		   $('.menuMobile').fadeOut('slow');
		   $(this).find('span').removeClass('active');
	    } else {
		   $('.menuMobile').fadeIn('slow');
		   $(this).find('span').addClass('active');
	    }
	});
	let a = $('.cleaning__tarif').find('a');
	a.on('click', function(event) {
		event.preventDefault();
		a.first().removeClass('active_link');
		$('.cleaning__img').find('img')
		.attr("src", $(this).attr('href'))
		.addClass('trans');
	    if ($(this).is(event.target)) {
		   $(this).removeClass('active_link');
	    } else {
		   $(this).addClass('active_link');
	    }
	});
	$('.questions__question').find('a').on('click', function(event) {
		event.preventDefault();
		$('.answer').remove();
		let text = "Вовсе нет. Вы можете оставить клинеру ключи, и даже указать, откуда их забрать и куда вернуть.";
		$(this).parent()
		.append("<div class='answer'><div class='ans' title='Закрыть окно'><p>"+
			$(this).text()+
			"</p></div><span>"+
			text+"</span></div>");
		$('.answer').find('div').on('click', function() {
			$(this).parent().remove();
		});
	});
	$('.questions__active').on('click', function(event) {
		event.preventDefault();
		$(this).find('p').addClass('active_btn');
		$('.questions__answers').fadeIn();
		$('.questions__answer').on('click', function() {
			$('.questions__answers').fadeOut();
			$('.questions__active').find('p').removeClass('active_btn');
		});
	});
	$('.questions__others').find('a').on('click', function(event) {
    	event.preventDefault();
    	$(this).parent().remove();
		$('.others').fadeIn().css("display", "flex");
		$('.questions__answers').css("margin-top", "27.5rem");
	});
});