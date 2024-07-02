$(document).ready(function() {
  console.log("Document ready");
 // Ajoute un défilement doux à tous les liens ancrés
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600, 'linear'); // Durée et style d'animation
  });
});