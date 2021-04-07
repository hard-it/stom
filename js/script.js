$(document).ready(function(){
	$('.content-services__list').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		nextArrow: '<div class="arrow-next"><span class="fa fa-angle-right" aria-hidden="true"></span></div>',
		prevArrow: '<div class="arrow-prev"><span class="fa fa-angle-left" aria-hidden="true"></span></div>',
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a class="dot"></a>';
		},
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
})
