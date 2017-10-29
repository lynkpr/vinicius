$('document').ready(function() {
	var owl = $('.owl-carousel');

	owl.owlCarousel({
		items:3,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:4000,
		responsive: {
			0: {
				items:1,
			}
		}

	});

	$('.navbar a').on('click', function(event){
		if (this.hash !== "") {
			var hash = this.hash;
			event.preventDefault();

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				}, 700, function(){window.location.hash= hash;}
			);
		}
	});
})
