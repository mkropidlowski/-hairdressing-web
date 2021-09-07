
if(document.body.offsetWidth <= 700){

	new Splide( '#splide', {
		type   : 'loop',
		perPage: 1,
		focus  : 'center',
	}).mount();
} else {
	
	new Splide( '#splide', {
		type   : 'loop',
		perPage: 4,
		focus  : 'center',
	}).mount();
}
