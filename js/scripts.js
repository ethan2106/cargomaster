$(document).ready(function() {
  console.log("Document ready");

  // Animation de défilement doux pour tous les liens ancrés
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

  // Animation pour vérifier si la section est dans la vue
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

  // Animation de texte plat à ouvert avec Anime.js
  anime.timeline({loop: true})
    .add({
      targets: '.ml5 .line',
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700
    }).add({
      targets: '.ml5 .line',
      duration: 600,
      easing: "easeOutExpo",
      translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    }).add({
      targets: '.ml5 .ampersand',
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.ml5 .letters-left',
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
    }).add({
      targets: '.ml5 .letters-right',
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.ml5',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

  // Animation des lettres une par une de gauche à droite avec Anime.js
  var textWrapper = document.querySelector('.ml9 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1)
    }).add({
      targets: '.ml9',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
});
