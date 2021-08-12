(function($) {
  $(".main-header__toggle").on("click",function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  });

  // Scroll to correct section on About page
  if( $('body > main').hasClass('parent-page') ) {
    var currentPage = $('#page-'+$('body').data('page-name'));
    var headerHeight = $('.main-header').height();
    var scrollTo = currentPage.offset().top - headerHeight;
    window.scrollTo( 0, scrollTo );

    windowResize();
    // windowScroll();

    $(window).load(function() {
      windowResize();
      windowScroll();
      var scrollTo = currentPage.offset().top - headerHeight;
      window.scrollTo( 0, scrollTo );
    });

    $('.jump-nav a').on('click',function(e) {
      e.preventDefault();
      var h = $($(this).attr('href'));
      var o = h.offset().top - $('.main-header').height();
      h.focus();
      $("html, body").animate({ scrollTop: o }, 1000);
    });
  }



  $(window).scroll(function() {
    windowScroll();
  });

  $(window).resize(function() {
    windowResize();
  });

  function windowScroll() {
    var s = $(window).scrollTop();

    if( $('body > main').hasClass('parent-page') ) {
      var c = 0;
      var fb = '';

      for(var i = 1; i < $sectionOffsets.length; i++) {
        if(s <= $sectionOffsets[i].sectPos) {
          break;
        }
      }

      fb += i;
      $('.jump-nav a').removeClass('current');
      $('.jump-nav li:eq('+(i-1)+') a').addClass('current');
      $('#feedback').html(fb);
    }
  }

  function windowResize() {
    if( $('body > main').hasClass('parent-page') ) {
      var headerHeight = $('.main-header').height();
      $sectionOffsets = [];
      $('.page').each(function() {
        var o = $(this).offset().top - headerHeight - 100;
        var id = $(this).prop('id');
        var url = $(this).data('url');
        $sectionOffsets.push({sectPos:o, id:id, url:url});
      });

      console.log($sectionOffsets);

    }
  }
})(jQuery);
