(function($) {
  $('.news__list h2 a').on('click', function(e) {
    e.preventDefault();
    var h = $(this).prop('href');
    var main = $('#news-main');

    main.addClass('loading');
    setTimeout(function() {
      $.ajax({
        url: h,
        data: {
          ajax: true
        },
        method: 'POST'
      }).done(function( data ) {
        main.html(data);
        setTimeout(function() {
          main.removeClass('loading');
        },400);
      });
    },400);

  })
})(jQuery);
