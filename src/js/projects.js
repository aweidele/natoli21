(function($) {
  $('.projects__filters-toggle').on('click',function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  });

  $('.projects__view button').on('click', function(e) {
    var view = $(this).data('view');
    var wrap = $(this).parents('.projects__wrap');
    var d = new Date();
    document.cookie = 'projectView= '+view;
    if(view == 'list') {
      wrap.addClass('list-view');
      wrap.removeClass('grid-view');
    } else {
      wrap.removeClass('list-view');
      wrap.addClass('grid-view');
    }
  });

  var string1 = "Eager";
  var string2 = "Eagle";

  alert(string1 > string2);
})(jQuery);
