!(function () {
	$('.i-close').on('click', function () {
		$('.siteBanner').fadeOut();
	});

	$('.location-list').on('click', 'a', function () {
		var text = $(this).text();
		$(this).addClass('selected')
			.parent().siblings().children().removeClass('selected');
		$('#location-hock').text(text);
	});

})();