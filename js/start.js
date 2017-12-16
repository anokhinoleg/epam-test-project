var gallerySlider = document.querySelector(".gallery_slider");
var slides = gallerySlider.children;
var galleryDots = document.querySelector(".gallery_dots");
var dots = galleryDots.querySelectorAll("button");
var i = 0;
var multiplier = 1;

function autoSlide() {
	var width = slides[i].querySelector("img").offsetWidth;
	if ( i == slides.length-1 ) {
		width = 0;			
		gallerySlider.style.transform = "translate("+ width +"px)";
		slides[i].classList.remove("current");
		dots[i].classList.remove("active");
		i = 0;
		multiplier = 1;
		slides[i].classList.add("current"); 
		dots[i].classList.add("active"); 
		return;
	}
	slides[i+1].classList.add("current");
	dots[i+1].classList.add("active");
	slides[i].classList.remove("current"); 
	dots[i].classList.remove("active"); 
	width = width*multiplier;
    gallerySlider.style.transform = "translate(-"+ width +"px)";
	i++;
	multiplier++;	
}

var interval = setInterval(autoSlide, 4000);


function currentSlide(e){
	var target = e.target;
	if ( target.tagName != "BUTTON" || target.classList[0] == "active" ) { 
		return; 
	}
	if (target.getAttribute("data-slide") > i) {
		console.log(target.getAttribute("data-slide") + " " + i);
		e.preventDefault();
		var pos = gallerySlider.style.transform.replace(/[^0-9.-]/g, '');
		var width = slides[i].querySelector("img").offsetWidth;

		pos = pos - width*((target.getAttribute("data-slide")-i));
		pos = pos + "";
		gallerySlider.style.transform = "translate("+ pos +"px)";

		clearInterval(interval);

		slides[(target.getAttribute("data-slide"))].classList.add("current");
		dots[(target.getAttribute("data-slide"))].classList.add("active");
		slides[i].classList.remove("current"); 
		dots[i].classList.remove("active"); 
		multiplier = +target.getAttribute("data-slide") + 1;
		i = +target.getAttribute("data-slide");
		
		interval = setInterval(autoSlide, 4000);
	}

	if (target.getAttribute("data-slide") < i) {
		e.preventDefault();
		var pos = gallerySlider.style.transform.replace(/[^0-9.-]/g, '');		
		var width = slides[i].querySelector("img").offsetWidth;

		pos = +pos;
		pos = pos + width*((i-target.getAttribute("data-slide")));
		pos = pos + "";
		gallerySlider.style.transform = "translate("+ pos +"px)";

		clearInterval(interval);
		
		slides[(target.getAttribute("data-slide"))].classList.add("current");
		dots[(target.getAttribute("data-slide"))].classList.add("active");
		slides[i].classList.remove("current"); 
		dots[i].classList.remove("active"); 
		i = +target.getAttribute("data-slide");
		multiplier = +target.getAttribute("data-slide") + 1;

		interval = setInterval(autoSlide, 4000);
	}
	console.log('lol');		
}

galleryDots.addEventListener("click", currentSlide, false);


var nextButton = document.querySelector("button.next");
var previousButton = document.querySelector("button.previous");

function nextSlide(e) {
	e.preventDefault();
	if ( i == slides.length-1 ) {		
		width = 0;			
		gallerySlider.style.transform = "translate("+ width +"px)";
		slides[i].classList.remove("current");
		dots[i].classList.remove("active");
		i = 0;
		multiplier = 1;
		slides[i].classList.add("current"); 
		dots[i].classList.add("active"); 
		return;
	}

	var pos = gallerySlider.style.transform.replace(/[^0-9.-]/g, '');
	pos = +pos;
	var width = slides[i].querySelector("img").offsetWidth;
	pos = pos - width;
	pos = pos + "";
	gallerySlider.style.transform = "translate("+ pos +"px)";

	clearInterval(interval);

	slides[i+1].classList.add("current");
	dots[i+1].classList.add("active");
	slides[i].classList.remove("current"); 
	dots[i].classList.remove("active"); 
	i++;
	multiplier++;

	interval = setInterval(autoSlide, 4000);		
}


function previousSlide(e) {
	e.preventDefault();
	if ( i == 0 ) { 
		return;
	}
	var pos = gallerySlider.style.transform.replace(/[^0-9.-]/g, '');
	pos = +pos;
	var width = slides[i].querySelector("img").offsetWidth;
	pos = pos + width;
	pos = pos + "";
	gallerySlider.style.transform = "translate("+ pos +"px)";

	clearInterval(interval);
	interval = setInterval(autoSlide, 4000);
	
	slides[i-1].classList.add("current");
	dots[i-1].classList.add("active");
	slides[i].classList.remove("current"); 
	dots[i].classList.remove("active"); 
	i--;
	multiplier--;
}

nextButton.addEventListener("click", nextSlide, false);
previousButton.addEventListener("click", previousSlide, false);


var rightBanner = document.querySelector(".banners img[src='img/1_right_banner.jpg']");
if (window.innerWidth < 1024) {
	rightBanner.setAttribute("src", "img/2_right_banner.jpg")
} 
window.onresize = function () {
	if (window.innerWidth < 1024) {
		rightBanner.setAttribute("src", "img/2_right_banner.jpg")
	} else {
		rightBanner.setAttribute("src", "img/1_right_banner.jpg")
	}
}