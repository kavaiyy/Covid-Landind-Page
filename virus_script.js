// *	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*
// SLIDERS
// *	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*
// - - - - - - - - - - - -
// JavaScript: Slider1
const slider1_track = document.querySelector('.js-slider1__container-slides');
const slider1_slides = Array.from(slider1_track.children);
const slider1_NUMBER_OF_SLIDES = slider1_slides.length - 1
const slider1_SLIDE_WIDTH = 12 + slider1_slides[0].scrollWidth;
// const SLIDE_WIDTH = slides[0].getBoundingClientRect().width + 'px';

const slider1__arrowRight = document.querySelector('.js-slider1__arrow--right');
const slider1__arrowLeft = document.querySelector('.js-slider1__arrow--left');
slider1__arrowRight.addEventListener('click', function(event) {
	// nextSlide(strClassName__FirstSlide(1))
	nextSlide('js-slider1--First-Slide', slider1_track, slider1_slides, slider1_NUMBER_OF_SLIDES, slider1_SLIDE_WIDTH)
 	console.log(event.type)
})
slider1__arrowLeft.addEventListener('click', function(event) {
	// prevSlide(strClassName__FirstSlide(1))
	prevSlide('js-slider1--First-Slide', slider1_track, slider1_slides, slider1_NUMBER_OF_SLIDES, slider1_SLIDE_WIDTH)
 	console.log(event.type)
})
// - - - - - - - - - - - -
// JavaScript: Slider2
const slider2_track = document.querySelector('.js-slider2__container-slides');
const slider2_slides = Array.from(slider2_track.children);
const slider2_NUMBER_OF_SLIDES = slider2_slides.length - 1
const slider2_SLIDE_WIDTH = 12 + slider2_slides[0].scrollWidth;
// const SLIDE_WIDTH = slides[0].getBoundingClientRect().width + 'px';

// const strClassNameOfFirstSlide2="js-slider1--First-Slide"
// alert(slider1_slides[0].classList.contains(strClassNameOfFirstSlide2))

const slider2__arrowRight = document.querySelector('.js-slider2__arrow--right');
const slider2__arrowLeft = document.querySelector('.js-slider2__arrow--left');
slider2__arrowRight.addEventListener('click', function(event) {
	// nextSlide(strClassName__FirstSlide(2))
	nextSlide('js-slider2--First-Slide', slider2_track, slider2_slides, slider2_NUMBER_OF_SLIDES, slider2_SLIDE_WIDTH)
 	console.log(event.type)
 	// alert(slider2_slides)
})
slider2__arrowLeft.addEventListener('click', function(event) {
	// prevSlide(strClassName__FirstSlide(2))
	prevSlide('js-slider2--First-Slide', slider2_track, slider2_slides, slider2_NUMBER_OF_SLIDES, slider2_SLIDE_WIDTH)
	console.log(event.type)
 	// alert(event.type)
})

function strClassName__FirstSlide(slider_num) {
	return 'js-slider' + slider_num + '--First-Slide'
}
// strClassNameOfFirstSlide = "js-slider1--First-Slide" or "js-slider2--First-Slide"
function nextSlide(strClassNameOfFirstSlide, atrack, aslides, NUMBER_OF_SLIDES, SLIDE_WIDTH) {
	// Find which slide now is showed
	// alert(strClassNameOfFirstSlide)
	let i_firstslide = 0
	while(!aslides[i_firstslide].classList.contains(strClassNameOfFirstSlide)) {
		i_firstslide=i_firstslide+1;
	}
	if (i_firstslide+2 < NUMBER_OF_SLIDES) {
		atrack.style.transform = 'translateX(-'+(i_firstslide+1)*SLIDE_WIDTH+'px)';
		aslides[i_firstslide].classList.remove(strClassNameOfFirstSlide);
		aslides[i_firstslide+1].classList.add(strClassNameOfFirstSlide);
	};
}
function prevSlide(strClassNameOfFirstSlide, atrack, aslides, NUMBER_OF_SLIDES, SLIDE_WIDTH) {
	// Find which slide now is showed
	let i_firstslide = 0
	while(!aslides[i_firstslide].classList.contains(strClassNameOfFirstSlide)) {
		i_firstslide=i_firstslide+1;
	}
	if (i_firstslide!=0) {
		atrack.style.transform = 'translateX(-'+(i_firstslide-1)*SLIDE_WIDTH+'px)';
		aslides[i_firstslide].classList.remove(strClassNameOfFirstSlide);
		aslides[i_firstslide-1].classList.add(strClassNameOfFirstSlide);
	};
}
// *	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*
// TOGGLE: toggle On and Off nav elements of .nav__group1
// *	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*	*
const track__navToggle = document.querySelector('.nav__nav-toggle');
const track__nav_group1 = document.querySelector('.nav__group1');
track__navToggle.addEventListener('click', function(event) {
	track__nav_group1.classList.toggle('nav__group1-toggleOff');
})

















// TRASH: To Delete
function nextSlide2() {
	// Find which slide now is showed
	let i_firstslide = 0
	while(!slides[i_firstslide].classList.contains('js-slider1--First-Slide')) {
		i_firstslide=i_firstslide+1;
	}
	// alert(element);
	// alert(this);
	// var text = clickedElement.textContent;
	// alert(text);
	// console.log(text);
	if (i_firstslide+2 < NUMBER_OF_SLIDES) {
		track.style.transform = 'translateX(-'+(i_firstslide+1)*SLIDE_WIDTH+'px)';
		slides[i_firstslide].classList.remove('js-slider1--First-Slide');
		slides[i_firstslide+1].classList.add('js-slider1--First-Slide');
	};
}

function prevSlide2() {
	// Find which slide now is showed
	let i_firstslide = 0
	while(!slides[i_firstslide].classList.contains('js-slider1--First-Slide')) {
		i_firstslide=i_firstslide+1;
	}
	// alert(i_firstslide);
	if (i_firstslide!=0) {
		track.style.transform = 'translateX(-'+(i_firstslide-1)*SLIDE_WIDTH+'px)';
		slides[i_firstslide].classList.remove('js-slider1--First-Slide');
		slides[i_firstslide-1].classList.add('js-slider1--First-Slide');
	};
}

const track = document.querySelector('.js-slider1__container-slides');
const slides = Array.from(track.children);
const NUMBER_OF_SLIDES = slides.length - 1
// const SLIDE_WIDTH = slides[0].getBoundingClientRect().width + 'px';
const SLIDE_WIDTH = 12 + slides[0].scrollWidth;
// console.log(NUMBER_OF_SLIDES);

