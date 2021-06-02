/*!
 * Javascript Developed for Natoli
 *
 * Developed by Adam Fitzgarrald
 *
 * Designed by Wyman Projects / www.wymanprojects.com
 * 
 */
(function($,natoli){
	var oldIE = $('html').is('.ie6, .ie7, .ie8');

	natoli.scrollTop = function(){
		$("html,body").animate({scrollTop:0}, 500);
	};

	function build_next_cookie(gridView) {
		var $root = gridView ? $("#project-grid") : $("#project-list");
		var list = [];
		
		$root.find(".next-link").each(function(){
			list.push($(this).data("project-id"));
		});

		$.cookie("next_project_order", list.join(), { path: '/' }); 
	}

	function list_sort(attributeName, invert) {
		var items = [];
		var $tbody = $("#project-list tbody");
		
		$tbody.children().each(function(){
			items.push($(this));
		});
		
		if( invert ) {
			items.sort(function($a, $b){
				return $b.attr("data-sort-" + attributeName).localeCompare($a.attr("data-sort-" + attributeName));
			});
		} else {
			items.sort(function($a, $b){
				return $a.attr("data-sort-" + attributeName).localeCompare($b.attr("data-sort-" + attributeName));
			});
		}
		
		$.each(items, function(index, item){
			item.appendTo($tbody);
		});
	}
	
	function list_sort_click(event) {
		event.preventDefault();

		var $element = $(this);
		var attributeName = $element.data('sort-by');
		var invert = $element.hasClass("descending");

		list_sort( attributeName, invert );

		$("#project-list th a").removeClass("selected descending");
		$element.addClass("selected");
		if(!invert )
		{
			$element.addClass("descending");
		}
		
		$.cookie("project-sort", attributeName, { path: '/' });
		$.cookie("project-sort-direction", invert ? "" : "descending", { path: '/' });
		
		build_next_cookie(false);
	}
		
	$.fn.natoliSlideSize = function() {
		var $this = $(this);
		
		var $header = $("#header");
		var $footer = $("#menu-mobile-footer");
		var $body = $("html");
		
		function resize(){
			$this.css({height: $body.height() - $header.outerHeight() - 30});
		}
		$(window).resize(resize);
		$(window).load(resize);
		resize();
	}

	$.fn.natoliImageConstrain = function() {
		var $images = $(this);
		function resizeImages(){
		    $images.each(function(){
		    	var $image = $(this);

		        var $parent = $image.parent();
		        var focalX = $image.data("focalx");
		        var focalY = $image.data("focaly");
		        
		        var parentWidth = $parent.outerWidth() || $parent.parent().outerWidth();
		        var parentHeight = $parent.outerHeight() || $parent.parent().outerHeight();
		        var ratio = $image.data("ratio");
		        
		        var height = ratio * parentWidth;
		        var width = parentWidth;
		        
		        //
		        // If 100% width does not fill our height, use height instead
		        //
		        if( height < parentHeight )
		        {
		        	height = parentHeight;
		        	width = parentHeight / ratio;
		        }
				
	        	$image.css({height: height,
	        				width: width});
        		
        		if( focalX == "left" )
        		{
					$image.css("left", 0);
				}
				else if( focalX == "right" )
				{
					$image.css("left", parentWidth - width );
				}	        			
				else
				{
					$image.css("left", (parentWidth - width) / 2 );
				}

        		if( focalY == "top" )
        		{
					$image.css("top", 0);
				}
				else if( focalY == "bottom" )
				{
					$image.css("top", parentHeight - height );
				}	        			
				else
				{
					$image.css("top", (parentHeight - height) / 2 );
				}
		    });
		}
		$(window).resize(resizeImages);
		resizeImages();
	}

	/*
	 * Load content through ajax
	 */
	$.fn.natoliNewsChange = function(target, mobileTarget) {
		var $all = this;
		var $target = $(target);
		var idSuffix = 0;
		
		var $originalSelected = $all.filter(".selected");
		
		$all.each(function(){
			var $this = $(this);
			
			if( !$this.attr("id") ) {
				idSuffix++;
				$this.attr("id", "ajax_id_" + idSuffix);
			}
		});
		
		//
		// Normal page loads if history is not supported
		//
		var History = window.History;
		if(!History.enabled) {
			return;
		}
		
		History.Adapter.bind(window,'statechange',function(){
			var state = History.getState();
			
			if( typeof state.data.linkId === "undefined" )
			{
				state.data.linkId = $originalSelected.attr("id");
			}
			var $link = $("#" + state.data.linkId);
			
			var $previous = $target.children();
			
			//
			// Change selected item
			//
			$all.filter(".selected").removeClass("selected");
			$link.addClass("selected");
			
			$target.css("height", $previous.outerHeight());
			$previous.css("position", "absolute");
			$previous.fadeOut(500, function(){$previous.remove()});
			
			var content;
			
			if( $link.length )
			{
				content = $link.parent().parent().find(".news-content").html();
			}
			else
			{
				content = $(".original .news-content").html();
			}
			
			$target.append("<div class='ajax-content'>" + content + "</div>");
			$target.css("height", "auto");
			
			var $content = $target.children(":last-child");
			$content.fadeIn( 500 );
			
			var $iframe = $target.find("iframe");
			
			if( $iframe.length )
			{
				sizeIframe( $iframe, ".ajax-content", $iframe.attr("height") / $iframe.attr("width") );
			}
		});
		
		$all.click(function(e){
			e.preventDefault();
			
			var $link = $(this);
			
			//
			// Already selected, do nothing
			//
			if( $link.hasClass("selected") )
			{
				return;
			}
			
			//
			// Change state to trigger load
			//
			History.pushState({linkId:$link.attr("id")},$link.data('title'),$link.attr("href"));
		});
		
		return this;
	};

	/*
	 * Watch for the mobile view to be trigger, called on an item that
	 * will disappear in mobile only view.
	 */
	var masonryInitialized = false;
	$.fn.natoliProjectMobileWatch = function(url) 
	{
		var $this = this;
		var inMobile = false;
		function check() {
			if( !inMobile && !$this.is(":visible") ) 
			{
				//
				// If a url was provided
				//
				if( url != null ) 
				{
					document.location.href = url;
					return;
				}
				
				//
				// Remove masonry
				//
				if( masonryInitialized )
				{
					$("#project-grid").masonry("destroy");
				}
				masonryInitialized = true;
				inMobile = true;
				$("#project-filters .inner-filters").hide();
			}
			else if( inMobile && $this.is(":visible") )
			{
				$("#project-grid").masonry({
					itemSelector: '.grid-project',
					columnWidth: document.querySelector('.grid-project')
				});
				
				inMobile = false;		

				$("#project-grid").show();
				$("#project-filters .inner-filters").show();
				filtersVisible = false;
			}
		}

		//
		// Initial check and check on resize
		//		
		check();
		$(window).resize( check );
		
		var filtersVisible = false;
		//
		// Hookup modal filter
		//
		function showHideFilters( e )
		{
			if( filtersVisible )
			{
				$("#project-grid").slideDown();
				$("#project-filters .inner-filters").slideUp();
				filtersVisible = false;
			}
			else
			{
				$("html, body").animate({ scrollTop: 0 });
				$("#project-grid").slideUp();
				$("#project-filters .inner-filters").slideDown();
				filtersVisible = true;
			}
		}

		$(".mobile-filters").click(showHideFilters);
	};

	var linkOffsets = [];

	/*
	 * Wrap default options to the cycle slideshow plugin
	 */ 
	$.fn.natoliSlideShow = function(options) {
		var defaults = {
			//autoHeight: false,
			log: false,
			swipe: true
		};
	
		$.extend( options, defaults ); 

		return this.cycle(options);
	};
	
	$.fn.natoliProjectSlideShow = function() {
		var defaults = {
			pager: "#pager",
			pagerTemplate: "",
			autoHeight: "container",
			paused: true
		};
		
		var width = this.width();
		var $images = this.children("img");
		
		//
		// Set image size based on current width of page
		//
		$images.each(function(){
			var $img = $(this);
			var ratio = $img.data("ratio");
			
			$img.css("height", ratio * width);	
		});
		
		//
		// After images are actually loaded, set height back to auto so they resize gracefully
		//
		$(window).load(function(){
			$images.css("height", "auto");
		});
		
		return this.natoliSlideShow( defaults );
	};

	function sizeIframe($this, parent, ratio){
		var $parent = $this.closest(parent);
		
		$this.css("width", $parent.width());
		$this.css("height", ratio * $parent.width() );
	}

	
	$.fn.iframeWatch = function(parent) {
		var $this = this;
		var originalHeight = $this.outerHeight();
		var originalWidth = $this.outerWidth();
		function watchit(){
		 	sizeIframe($this, parent, originalHeight / originalWidth); 
		}
		$(window).resize(watchit);
		$(window).load(watchit);
		watchit();
		
		return this;
	}
	
	/*
	 * Build a map on the targeted item 
	 */
	$.fn.natoliMap = function(lat, long) {
		var element = this[0];
		google.maps.visualRefresh = true;
		var latLong = new google.maps.LatLng(lat, long); 
		
		var mapOptions = {
			zoom: 15,
			center: latLong,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.SATELLITE] 
				},
			mapTypeControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		var map = new google.maps.Map(element, mapOptions);
		
		  var marker = new google.maps.Marker({
		      position: latLong,
		      map: map
		});
		return this;
	};
	/*
	 * Link up group page menu to scroll and update URL
	 */
	$.fn.natoliGroupMenu = function(selectedId) {
		//
		// Save aside the height of the fixed header.
		//
		var headerSize = $(".pre-header:visible").outerHeight() + $(".header").outerHeight() + parseInt($(".fixed-header").css("top"));
		var $menu = this;
		var $mainContent = $("#main_content"); 
				
		//
		// Grab all grouped pages
		//
		var $pages = $(".grouped-page");
		
		//
		// Private function to make sure the bottom section is always 1 full window in height
		// otherwise the menu will never trigger the section as current.
		//
		function autoHeightLast()
		{
			$pages.last().css("min-height", $(window).height() - headerSize - $(".footer").outerHeight() - parseInt($mainContent.css("margin-bottom")));
		}
		
		//
		// Call auto height before doing any special scrolling
		//
		autoHeightLast();
		
		//
		// Make sure we reset the last section's height on resize
		//
		$(window).resize(autoHeightLast);
		
		//
		// Automatically position to the current "page".
		//
		if( selectedId != null )
		{
			var scrollTo = $("#"+selectedId).offset().top - headerSize;
			window.scrollTo( 0, scrollTo );
		}
		
		//
		// Process the menu looking for matching pages.
		//
		$menu.find("a").each(function(){
			var targetId = null;
			var $link = $(this);
			
			//
			// Find the page that matches the current menu item iteration.
			//
			$pages.each(function(){
				var $this = $(this);
				
				//
				// Grouped pages have a data URL field that should match
				// the menu item.
				//
				if( $this.data("url") == $link.attr("href") ) {
					targetId = $this.attr("id");
					return false;
				}
			});
			
			//
			// If a linking section was found
			//
			if( targetId != null )
			{
				var $target = $("#"+targetId);
				
				//
				// Hijack the link to scroll on click to the proper page
				//
				$link.click(function(e){
					e.preventDefault();
					
					var scrollTo = $target.offset().top - headerSize + 1;
					
					$("html,body").stop().animate({
						scrollTop: scrollTo
					}, 1000);
				});
				
				//
				// Store in offsets list for changing menu highlights on scroll
				//
				linkOffsets.push({menu: $link, target: $target});
			}
		});
		
		//
		// Bind the window scroll to process position and highlight
		// the visible "page".
		//
		$(window).scroll(function(){
			//
			// Determine how far we've scrolled
			//
			var offsetTop = $(window).scrollTop() + headerSize;
			//
			// Default tot he first item if something is off
			//
			var previous = linkOffsets[0].menu;
			for (var i = 1; i < linkOffsets.length; i++)
			{
				var item = linkOffsets[i];
				//
				// Is the current item we're checking past the scroll point?
				// If so, the currently selected item was the last section we
				// processed.
				//
				if( item.target.offset().top > offsetTop ) {
					break;
				}
				
				//
				// Save aside for next loop.
				//
				previous = item.menu;
			}
			
			//
			// If the section found was not already selected
			//
			if( !previous.hasClass('current-menu-item') )
			{
				//
				// Remove highlight from the currently selected
				//
				var $previousMenu = $menu.find('.current-menu-item'); 
				$previousMenu.removeClass('current-menu-item');
				//
				// Add highlight to our class
				//
				previous.parent().addClass('current-menu-item');
				
				//
				// Update the URL on browsers that support it.
				//
				window.History.replaceState(null,$("title").text(),previous.attr("href"));
			}
		});
		
		return this;	
	};
		
	//
	// Ready hook for every page events
	//
	$(function(){
		var viewport = document.getElementById("viewport");
		if(screen.width <= 767)
		{
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) 
			{
				viewport.setAttribute("content", "width=380,user-scalable=0");
			}
			else
			{
				viewport.setAttribute("content", "width=380,minimum-scale=1,maximum-scale=1,user-scalable=0");
			}
		}
	
		//
		// Determine fixed header size
		//
		var $mainContent = $("#main_content");
		var $sideFixed = $(".side-fixed, .landscape-side-fixed");
		var $window = $(window);
		
		function pageSize()
		{
			var footerSize = $(".footer").outerHeight();
			var newHeight = $window.height();
			var headerSize = $(".pre-header:visible").outerHeight() + $(".header").outerHeight() + parseInt($(".fixed-header:visible").css("top"));
			
			$mainContent.css("min-height", newHeight - headerSize - footerSize - parseInt($mainContent.css("margin-bottom")));
			
			$sideFixed.each(function(){
				$sideFixed.css("height", newHeight - ($(this).offset().top - $window.scrollTop()) - footerSize);
			});
		}
		
		function slideShowFixed()
		{
			var newHeight = $window.height();
			var headerSize = $(".pre-header:visible").outerHeight() + $(".header").outerHeight() + parseInt($(".fixed-header:visible").css("top"));
	
			$(".slide-wrap").css("height", newHeight - headerSize - $(".footer").outerHeight());
		}
		
		//
		// Call once to initialize
		// 
		if( !oldIE )
		{
			pageSize();
		}
		else
		{
			setTimeout( pageSize, 100 );
			setTimeout( pageSize, 1000 );
			setTimeout( pageSize, 5000 );
		}
		
		//
		// Trigger on all resizes
		//
		$window.resize(pageSize);
		
		if( $("body.home").length )
		{
			slideShowFixed();
			$window.resize(slideShowFixed);
		}
		
		//
		// News page?
		//
		$("#news_list").css("width", $("#news_filters").width());
		$("#news_list ul li:last-child").addClass("last-child");
		
		//
		// Project index page?
		//
		if( $("#project_index").length )
		{
			//
			// Determine view
			//
			var $grid = $("#project-grid");

			if( $grid.length )
			{
				if( !masonryInitialized && !oldIE )
				{
					$grid.masonry({
						itemSelector: '.grid-project',
						columnWidth: document.querySelector('.grid-project')
					});
					masonryInitialized = true;
				}
				$(".overlay").hover(function(){
					var $this = $(this);
					var $image = $this.prev();
					
					$this.animate({opacity: 1});
				}, function(){
					$(this).animate({opacity: 0});
				});
				
				build_next_cookie(true);
			}
			else
			{
				$("#project-list th a").click(list_sort_click);
				
				//
				// Do initial sort
				//
				var $selected = $("#project-list th a.selected");
				
				list_sort( $selected.data("sort-by"), !$selected.hasClass("descending") );
				
			}
		}
		else if ( $("body.single-project").length )
		{
			$("#pager img:nth-child(7n+0)").addClass("n7");
			$("#pager img:nth-child(7n+1)").addClass("n7p1");
		}
	});
	
	$(window).load(function(){
		var $newsList = $("#news_list");
		
		if( $newsList.length )
		{
			var $newsFilters = $("#news_filters")
			function sizeNewsList()
			{
				$newsList.css("width", $("#news_filters").width());
			}
			$(window).resize(sizeNewsList);
			sizeNewsList();
		}
	});
	
}(jQuery, window.natoli = window.natoli || {}));