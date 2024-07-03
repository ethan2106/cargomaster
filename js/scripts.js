$(document).ready(function() {
  console.log("Document ready");

  // Ajoute un défilement doux à tous les liens ancrés
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');
    
    // Vérifie si href n'est pas vide
    if (target && target !== '#') {
      // Vérifie si l'élément cible existe
      if ($(target).length) {
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 600, 'linear');
      } else {
        console.log("Element cible non trouvé : " + target);
      }
    }
  });
});
