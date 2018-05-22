// script belonging to slideshow on media pageX

var slideIndex = 1; // beh�ver tydligen en global f�r att r�kna vilken slide vi �r p�
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // h�mta bilderna, blir en array
  var dots = document.getElementsByClassName("dot");	// h�mta punkterna under sliden

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {	// g�m alla bilder
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {	// g�m alla punkterna, byt ut aktiv mot inget allts�
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";	// s�tter cssen till den sliden vi �r p� till visa som block, og�m dvs
  dots[slideIndex-1].className += " active";	// l�gger till active till classen p� punkten som anv�nds, mellanrum eftersom den diven har tv� classer
}