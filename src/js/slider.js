(function($) {
  $('.natoli-slider').each(function() {
    var thisID = '#'+$(this).prop("id");
    var options = $(this).data('options');
    var slider = tns(options);
  });
})(jQuery);
