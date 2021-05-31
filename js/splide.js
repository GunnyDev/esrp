var splide = new Splide('#secondary-slider', {
    //fixedWidth : 350,
    heightRatio: 0.5,
    arrows: false,
    interval: 7000,
	perPage    : 2,
    gap        : 10,
    type        : 'loop',
    autoplay    : true,
    pauseOnHover: false,
	height     : '25rem',
	cover      : true,
	breakpoints: {
		height: '6rem',
	}
} );

splide.mount();