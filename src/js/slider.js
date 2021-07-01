(function($) {
  $('.natoli-slider').each(function() {
    var thisID = '#'+$(this).prop("id");
    var options = $(this).data('options');
    console.log(options);
    var slider = tns(options);
  });
})(jQuery);
