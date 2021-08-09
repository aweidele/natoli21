(function($) {
  $('.front-page__slider').each(function() {
    var thisSlider = $(this);
    var options = thisSlider.data('options');
    console.log(options);
    var slider = tns(options);
  });
})(jQuery);
