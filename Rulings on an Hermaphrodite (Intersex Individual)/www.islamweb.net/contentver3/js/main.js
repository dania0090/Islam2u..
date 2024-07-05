/*
function makeFixedHeader(){var element = jQuery(".header.willfix");if(element.hasClass("makefixed"))return false;element.addClass("makefixed");element.children("div").addClass("animated bounceInDown");}
function removeFixedHeader(){var element = jQuery(".header.willfix");if(!element.hasClass("makefixed"))return false;element.removeClass("makefixed");element.children("div").removeClass("animated bounceInDown");}
jQuery(window).resize(function() {var htop = $(".header.willfix").height()+100;if(jQuery(window).scrollTop() >= htop){makeFixedHeader();}else{removeFixedHeader();}});
jQuery(window).scroll(function() {var htop = $(".header.willfix").height()+100;if(jQuery(window).scrollTop() >= htop){makeFixedHeader();}else{removeFixedHeader();}});




jQuery(document).ready(function() {
	var str=location.href.toLowerCase();
		$(".wrapper li a").each(function() {
			if (str.indexOf(this.href.toLowerCase()) > -1) {
			$("li.active").removeClass("active");
			$(this).parent().addClass("active");
			}
		});
	
	
	
	

		
	if($(window).width() > 999)
	{
		new WOW().init();
		
		$(".header li>ul").each(function() {
			$(this).parent().addClass("submenu");
		});
	}else {
	}
	
	$(".amobile").click(function(){
		$(".header > .wrapper > section > ul").toggle("slow");
	});
		
	
});
*/
jQuery(document).ready(function() {
	
	$('.sitems input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parents(".sitems").addClass("sitemschecked");
    } else {
        $(this).parents(".sitems").removeClass("sitemschecked");
    }
	});

	$( ".namelist" ).hover(
	  function() {
		$(this).find('.overrwaya').show();
	  }, function() {
		$(this).find('.overrwaya').hide();
	  }
	);

	
	$(".opensearch").click(function(){
		$(this).toggleClass( "openedsearch" );
		$(this).parent().toggleClass("openedsearch");
		$(".searchbar").toggleClass( "openedsearch" );
	});
	$("#search-clear").click(function(){
		$(".search-options").removeClass( "showSearch" );
	
	});
	
	if($(window).width() > 1024)
	{
		new WOW().init();
		
		function makeFixedHeader(){var element = jQuery(".header.willfix");if(element.hasClass("makefixed"))return false;element.addClass("makefixed");element.children("div").addClass("animated bounceInDown");}
		function removeFixedHeader(){var element = jQuery(".header.willfix");if(!element.hasClass("makefixed"))return false;element.removeClass("makefixed");element.children("div").removeClass("animated bounceInDown");}
		jQuery(window).resize(function() {var htop = $(".header.willfix").height()+100;if(jQuery(window).scrollTop() >= htop){makeFixedHeader();}else{removeFixedHeader();}});
		jQuery(window).scroll(function() {var htop = $(".header.willfix").height()+100;if(jQuery(window).scrollTop() >= htop){makeFixedHeader();}else{removeFixedHeader();}});

		$('.scrollup').click(function() {      // When arrow is clicked
			$('body,html').animate({
				scrollTop : 0                       // Scroll to top of body
			}, 500);
		});

	}else {
	}
	
	$(".amobile").click(function(){
		$(this).toggleClass('open', 200000);
		$(this).next(".menu").toggle("slow");
	});
	
		
	
	$('.mainslider').owlCarousel({
		items:1,
		rtl:true,
	    loop:true,
		nav:true,
		dots:true,
		mouseDrag:false,
		autoplay:true, autoplayHoverPause:true,
		navText:["<i class='fa fa-chevron-right'></i>" , "<i class='fa fa-chevron-left'></i>"]
	});
	
	$('.twoslid').owlCarousel({
		items:1,
		rtl:true,
	    loop:true,
		nav:true,
		dots:true,
		mouseDrag:false,
		autoplay:true, 
		autoHeight:true,
		autoplayHoverPause:true,
		responsive:{
			360:{
				items:1
			},
			375:{
				items:1
			},
			376:{
				items:1
			},
			414:{
				items:1
			},
			450:{
				items:1
			},
			667:{
				items:1
			}},
		// navText:["<i class='fa fa-chevron-right'></i>" , "<i class='fa fa-chevron-left'></i>"]
	});
	
	
	
	$('.icosectionsslid').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items:4,
		rtl:true,
	    loop:true,
		nav:true,
		dots:false,
		mouseDrag:false,
		autoplay:false, autoplayHoverPause:false,
		navText:["<i class='fa fa-chevron-right'></i>" , "<i class='fa fa-chevron-left'></i>"],
		responsive:{
			360:{
				items:1
			},
			375:{
				items:1
			},
			376:{
				items:1
			},
			414:{
				items:1
			},
			450:{
				items:1
			},
			667:{
				items:2
			},
			768:{
				items:2
			},
			1024:{
				items:4
			}
		}
	});
	$('.bnewsslid').owlCarousel({
		animateOut: 'fadeDown',
		animateIn: 'fadeUp',
		items:1,
		rtl:true,
	    loop:true,
		nav:true,
		dots:false,
		mouseDrag:false,
		autoplay:true, autoplayTimeout:6000, autoplayHoverPause:true,
		navText:["<i class='fa fa-chevron-right'></i>" , "<i class='fa fa-chevron-left'></i>"]
	});
	$('.hgallery').owlCarousel({
		items:1,
		rtl:true,
	    loop:true,
		nav:true,
		dots:false,
		mouseDrag:false,
		autoplay:true, autoplayTimeout:2000, autoplayHoverPause:true,
		navText:["<i class='fa fa-chevron-right'></i>" , "<i class='fa fa-chevron-left'></i>"]
	});
	$('.hdeaf').owlCarousel({
		items:1,
		rtl:true,
	    loop:true,
		nav:true,
		dots:false,
		mouseDrag:false,
		autoplay:true, autoplayTimeout:10000, autoplayHoverPause:true,
		navText:["<i class='fa fa-chevron-right'></i>" , "<i class='fa fa-chevron-left'></i>"]
	});
	
	$('.articlemain').owlCarousel({
		items:1,
		rtl:true,
	    loop:true,
		nav:true,
		dots:false,
		mouseDrag:false,
		autoplay:true, autoplayTimeout:10000, autoplayHoverPause:true,
		navText:["<i class='fa fa-chevron-right'></i>" , "<i class='fa fa-chevron-left'></i>"]
	});
	
	

	
$('#tabs h1').click(function() {
    var tab = $('.tab_' + $(this).attr('tab'));
    if (tab.length) {
        // Hide active tab & selected style:
        $('#tab_container .tab_active').removeClass('tab_active');
        $('#tabs .active').removeClass('active');

        // Show clicked tab content
        tab.addClass('tab_active');
        $(this).addClass('active');

        tab.show("slide", {
            direction: "down"
        }, 1000);
        $(this).show("puff", {}, 10);
    }
	
});
$('#tabstwo h1').click(function() {
    var tab = $('.tabstwo_' + $(this).attr('tab'));
    if (tab.length) {
        // Hide active tab & selected style:
        $('#contabstwo .tab_active').removeClass('tab_active');
        $('#tabstwo .active').removeClass('active');

        // Show clicked tab content
        tab.addClass('tab_active');
        $(this).addClass('active');

        tab.show("slide", {
            direction: "down"
        }, 1000);
        $(this).show("puff", {}, 10);
    }
});

/*******************Update Mobile View ***********************/
$('#btn-search-booklist').click(function() {
   $(".booklist-search").toggleClass("showSearch");
   $(".title-booklist").toggleClass("showSearch");
   $(this).children("img").hide()

});
$('#btn-close-search').click(function() {
	$(".booklist-search").removeClass("showSearch");
	$(".title-booklist").addClass("showSearch");
	$("#btn-search-booklist img").show()
 
 });
 
 $('.fatCatleft').click(function() {
	if($(window).width() < 767) {


	$(this).children("ul").toggle();
	$(this).toggleClass("changeStyle")
}

 
 });
 $('.leftaudios').click(function() {
	if($(window).width() < 767) {


	$(this).children("ul.items-suggest").toggle();
	$(this).toggleClass("changeStyle")
}
});

 $('.mostviewleft').click(function() {
	if($(window).width() < 767) {


	$(this).children("ul").toggle();
	$(this).toggleClass("changeStyle")
}

 
 });
 $('.sub-cat li').click(function() {
	$(this).children(".items").toggle();
 
 });
	/*
var currTab = 0;
var totalTabs = $("#tabs h1").length;
function cycle() {
    $("#tabs h1").eq(currTab).click();
    currTab++;
    if (currTab == totalTabs) {
        currTab = 0;
    }
}
var i = setInterval(cycle, 5000);
	*/
});

$(document).ready(function() { 


	
	
	$('#collapseSearch').on('show.bs.collapse', function() {
		$(".btns").toggle();
		$(".action-login").toggle()
	
	});
	$('#collapseSearch').on('hide.bs.collapse', function() {
		$(".btns").toggle();
		$(".action-login").toggle()
	})

	$('.nav-tfserhadith').click(function() {
	    $("#nav-tfserhadith-tab").tab('show');
			 
	 });
	 $('.nav-trgmahadith').click(function() {
	    $("#nav-trgmahadith-tab").tab('show');
			 
	 });
	 $('.nav-treehadith').click(function() {
	    $("#nav-treehadith-tab").tab('show');
			 
	 });
	 $('.nav-tkhreghadith').click(function() {
	    $("#nav-tkhreghadith-tab").tab('show');
			 
	 });
	 $('.nav-tkhreghadithsharh').click(function() {
		//alert('clicked');
	    $("#nav-tkhreghadithsharh-tab").tab('show');
			 
	 });

	 $('.bookindex-action').click(function() {
	if($(window).width() > 767) {
	    $("#books_index_right").toggle();
		$(".book-right-nav").toggleClass("w-100")
		

	
	}
	else {
	    $("#books_index_right").show();

	}
			 
	 });
	 $('.close-bookindex').click(function() {
	    $("#books_index_right").hide();
			 
	 });
	 $("#SearchOption").change(function(){
		if($(this).val() == "EmailId") {
		   $('.nomail').addClass('d-none');
		} else {
		   $('.nomail').removeClass('d-none');
		}
	});
 });
 