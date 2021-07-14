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

  $('.projects__cards-sort button').on('click', function() {
    var i = $(this).parent().index() + 1;

    if($(this).data('order')) {
      var currentOrder = $(this).data('order');
      var newOrder = currentOrder == 'asc' ? 'desc' : 'asc';
    } else {
      var newOrder = 'asc';
    }

    $('.projects__cards-sort button').removeClass('selected asc desc');
    if(newOrder == 'desc') {
      $('.projects__cards').addClass('desc');
    } else {
      $('.projects__cards').removeClass('desc');
    }


    $(this).data('order',newOrder);
    $(this).addClass('selected ' + newOrder);
    sortProjectList(i);
  });

  function sortProjectList(col) {
    var fb = "";
    var sortText = [],
        sortElements = [];

    var animals = ['Elephant','monkey','dog','cat'];
    animals.splice(1,0,'Chicken','giraffe');

    $('.projects__cards .project-card').each(function() {
      var content = $('.project-card__content', this),
          text = getProjectContent(content,col),
          sorting = true,
          i=0,
          p=0;

      while(sorting) {
        sorting = i <= sortText.length && text > sortText[i];
        p=i;
        i++;
      }
      sortText.splice(p,0,text);
      sortElements.splice(p,0,$(this));
    });

    for(i=0;i<sortElements.length;i++) {
      sortElements[i].css({'order':i});
    }
  }

  function getProjectContent(content,col) {
    if( col == 1 ) {
      var sortText = $('h2 a', content).text();
    } else {
      var sortText = $(':nth-child('+col+') li:first-child a', content).text();
    }
    return sortText;
  }
})(jQuery);
