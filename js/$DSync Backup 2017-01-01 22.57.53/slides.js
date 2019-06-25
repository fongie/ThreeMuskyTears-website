// script belonging to slideshow on media pageX

var slideIndex = 1; // behöver tydligen en global för att räkna vilken slide vi är på
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // hämta bilderna, blir en array
  var dots = document.getElementsByClassName("dot");	// hämta punkterna under sliden

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {	// göm alla bilder
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {	// göm alla punkterna, byt ut aktiv mot inget alltså
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";	// sätter cssen till den sliden vi är på till visa som block, ogöm dvs
  dots[slideIndex-1].className += " active";	// lägger till active till classen på punkten som används, mellanrum eftersom den diven har två classer
}