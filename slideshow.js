var slideIndex = [1,1,1]; // TAMBAH "1" SETIAP ADA TAMBAHAN SLIDESHOW
var slideId = ["Show1", "Show2","Show3"] // TAMBAH "Show[no]" SETIAP ADA TAMBAHAN SLIDESHOW
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
// TAMBAH "showSlides(1,[no])" SETIAP ADA TAMBAHAN SLIDESHOW

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}