import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Welcome to the Party", "Have a drink", "Click below to create a cocktail"],
    typeSpeed: 90,
    loop: true
  });
}

const goToTop = () => {
  (function ($) {

  /*--Scroll Back to Top Button Show--*/

  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#back-to-top').fadeIn();
      } else {
          $('#back-to-top').fadeOut();
      }
  });

  //Click event scroll to top button jquery

  $('#back-to-top').click(function(){

      $('html, body').animate({scrollTop : 0},600);
      return false;
  });

  })(jQuery);
}


export { loadDynamicBannerText, goToTop };
