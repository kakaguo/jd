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

$(function(){
	$(".slides").slidesjs({
		width: 730,
		height: 454,
		navigation: {
			active: false,
		},
		pagination: {
			active: false
		},
		play: {
			auto: true,
			interval: 2000,
			pauseOnHover: true
		}
	});
});