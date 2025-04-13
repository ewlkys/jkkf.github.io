document.addEventListener('DOMContentLoaded', function() {
  // Simula um evento falso
  var fakeEvent = { currentTarget: document.createElement("div") };
  
  // Abre a aba de privacidade por padrão
  openTab(fakeEvent, 'privacidade');
});

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function(event) {
    const adjustSVGOnScroll = function() {
      const windowWidth = window.innerWidth;
      const section = document.getElementById('carousel_2e70');
      const svg = section.querySelector('.u-shape-svg');

      // Verifica se a largura da janela é de 575px ou menos
      if(windowWidth <= 575) {
        const sectionTop = section.offsetTop + 150;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = 400 + sectionTop + sectionHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          let moveDistance = (scrollPosition - sectionTop) / 2;
          svg.style.transform = `translateY(+${moveDistance}px)`;
          svg.style.visibility = 'visible';
        }
      } else {
        // Reseta o estilo do SVG ao sair do modo smartphone
        svg.style.transform = '';
      }
    };

    // Ouvinte de eventos para scroll
    window.addEventListener('scroll', adjustSVGOnScroll);

    // Ouvinte de eventos para resize
    window.addEventListener('resize', adjustSVGOnScroll);

    // Chama a função no carregamento da página para ajuste inicial
    adjustSVGOnScroll();
});



