(function($) {
  $('.natoli-slider').each(function() {
    var thisID = '#'+$(this).prop("id");
    var options = $(this).data('options');
    var slider = tns(options);

    var sliderNav = $(this).parents('.tns-outer').siblings('.natoli-slider-nav');
    $('button', sliderNav).on('click', function() {
      var i = $(this).index();
      slider.goTo(i);
      slider.pause();
    });
  });
})(jQuery);
