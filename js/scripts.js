$(document).ready(function() {
  console.log("Document ready");

  // Défilement doux pour tous les liens ancrés
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');

    // Vérifie si href n'est pas vide
    if (target && target !== '#') {
      // Vérifie si l'élément cible existe
      if ($(target).length) {
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 500, 'linear');
      } else {
        console.log("Element cible non trouvé : " + target);
      }
    }
  });

  // Détecter quand la section est dans la vue
  $(window).on('scroll', function() {
    $('.section').each(function() {
      if (isElementInViewport($(this))) {
        $(this).addClass('in-view');
      } else {
        $(this).removeClass('in-view'); // Supprimer la classe si la section n'est plus dans la vue
      }
    });
  });

  // Fonction pour vérifier si un élément est visible dans la fenêtre
  function isElementInViewport(elem) {
    var $elem = $(elem);
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom > viewportTop && elemTop < viewportBottom;
  }
});
