(function($) {
  var slidersInit = false;
  initSliders();

  function initSliders() {
    var w = $(window).width();
    $('.natoli-slider').each(function() {
      var thisSlider = $(this);

      if( !thisSlider.hasClass('desktop-only') || (thisSlider.hasClass('desktop-only') && w >= 768) ) {
        var thisID = '#'+thisSlider.prop("id");
        var options = thisSlider.data('options');
        var slider = tns(options);

        var sliderNav = thisSlider.parents('.tns-outer').siblings('.natoli-slider-nav');
        $('button', sliderNav).on('click', function() {
          var i = $(this).index();
          slider.goTo(i);
          slider.pause();
        });
      }

    });
  }
})(jQuery);
