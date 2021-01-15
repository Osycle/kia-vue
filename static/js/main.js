
export default function(){



	var isWebkit = /Webkit/i.test(navigator.userAgent),
			isChrome = /Chrome/i.test(navigator.userAgent),
			isMac = /Mac/i.test(navigator.userAgent),
			isMobile = !!("ontouchstart" in window),
			isAndroid = /Android/i.test(navigator.userAgent),
			isEdge = /Edge/i.test(navigator.userAgent);


	// COMMON FUNCTION

	function checkSm() {
		return $(document).width() <= 991;
	}

	function checkMd() {
		return $(document).width() < 1199 && !checkSm();
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function getRandomIntFloat(min, max) {
		return Math.random() * (max - min) + min;
	}

	function onResized(f) {
		if (typeof f === "function") f();
		$(window).on("resize", function(e) {
			if (typeof f === "function") f();
		});
		return this;
	}

	function scrolledDiv(el) {
		try {
			var docViewTop = $(window).scrollTop(),
				docViewBottom = docViewTop + $(window).height(),
				elTop = $(el).offset().top + 100,
				elBottom = elTop + $(el).height() / 1.8;
		} catch (err) {
			console.error();
		}

		return elBottom <= docViewBottom && elTop >= docViewTop;
	}

	function roundFix( num, cnt ){
		num = num+""
		cnt = cnt + (/./.test(num) || null ? 1 : 0);
		return num.substring( 0,  cnt)*1
	}


	function spaceBetweenNum(str, char) {
		str = str+"";
		char = char || ","
		var pattern = /(-?\d+)(\d{3})/;
		while (pattern.test(str))
			str = str.replace(pattern, "$1"+char+"$2");
		return str;
	}


	$("[scrollf]").map((i, el)=>{
		el = $(el)
		console.log(el);
		window.ol = el;
		$(window).on("scroll", (e)=>{
			var docViewBottom = $(window).scrollTop() + $(window).height();
			var elBottom = $(el).offset().top + $(el).height();
				if(docViewBottom > elBottom){
					el.addClass("is-scrollf")
				}else{
					el.removeClass("is-scrollf")
				}
		})
	})
	

	
	if( $('[header-opacity]').length ){
		$(".header-parent").addClass("header-op")
		$(".header").removeClass("white-style")
	}else{
		$(".header-parent").removeClass("header-op")
		$(".header").addClass("white-style")
	}



		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				minimumResultsForSearch: Infinity,
				allowClear: false
			});
		

			$(".js-range-slider").ionRangeSlider({
				type: "double",
				min: 0,
				max: 1000,
				from: 200,
				to: 500,
				grid: false
			});



		/*Owl carousel*/
		window.owlBtn = [
			'<span class="owl-btn previous">'+
				'<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
					'<path d="M6 3L2 7l4 4M2.333 7h12.334" stroke="currentColor" stroke-width="1.5"></path>'+
				'</svg>'+
			'</span>', 
			'<span class="owl-btn next">'+
				'<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="">'+
    			'<path d="M9 11l4-4-4-4M12.667 7H.333" stroke="currentColor" stroke-width="1.5"></path>'+
				'</svg>'+
			'</span>'
		]



		
		

		//card Carousel
		if(checkSm()){
			$(".card-media-imgs.tab-content")
				.add(".card-tech .tab-content")
				.addClass("owl-carousel");
			$(".card-media-imgs .tab-pane")
				.add(".card-tech .tab-content .tab-pane")
				.addClass("active in")
			$(".card-media-imgs.tab-content")
				.add(".card-tech .tab-content")
				.owlCarousel({
					nav: !checkSm(),
					loop: false,
					//items: 3,
					dots: true,
					dotsEach: false,
					slideBy: 2,
					//autoHeight: true,
					autoplay: false,
					//autoplayTimeout: 5400,
					touchDrag: checkSm(),
					//center: true,
					responsive:{
						0:{items:1},
						991:{items:4}
					},
					navText : owlBtn,
					margin: 30
				})

			var cardVideoUl = $(".card-video .short-models-nav ul");
			cardVideoUl.addClass("owl-carousel");
			cardVideoUl.owlCarousel({
				nav: false,
				loop: false,
				//items: 3,
				dots: true,
				dotsEach: false,
				slideBy: 2,
				autoplay: false,
				autoplayTimeout: 5400,
				touchDrag: true,
				mouseDrag: true,
				center: true,
				responsive:{
					0:{items:2},
					//991:{items:2}
				},
				navText : owlBtn,
				margin: 10
			});
			cardVideoUl.find("li").on("click", function(){
				var that = $(this);
				var index = that.closest(".owl-item").index();
				cardVideoUl.find("li").removeClass("active");
				that.addClass("active");
				var tabPane = that.closest(".card-video").find(".tab-pane").removeClass("in active");
				tabPane.eq(index).addClass("in active");
				cardVideoUl.find(".owl-dot").eq(index).trigger("click");
				console.log(index);
			})
		}

		$(".short-news .short-news-items.owl-carousel").owlCarousel({
			nav: !checkSm(),
			loop: false,
			//items: 3,
			dots: false,
			dotsEach: false,
			slideBy: 2,
			autoplay: false,
			autoplayTimeout: 5400,
			touchDrag: checkSm(),
			//center: true,
			responsive:{
				0:{items:1},
				991:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});
		$(".news-article .short-news-items.owl-carousel").owlCarousel({
			nav: true,
			loop: false,
			//items: 3,
			dots: false,
			dotsEach: false,
			slideBy: 2,
			autoplay: false,
			autoplayTimeout: 5400,
			touchDrag: false,
			//center: true,
			responsive:{
				0:{items:1},
				991:{items:3}
			},
			navText : owlBtn,
			margin: 30
		});

		$(".card-video-items.owl-carousel").map(function(i, el){
			el = $(el);
			var figLen = (el.find("figure").length <= 3);
			el.owlCarousel({
				nav: true,
				loop: false,
				//items: 3,
				dots: false,
				dotsEach: true,
				//slideBy: 5,
				autoplay: false,
				autoplayTimeout: 5400,
				touchDrag: checkSm(),
				//center: figLen,
				responsive:{
					0:{items:1},
					991:{items:4}
				},
				navText : owlBtn,
				margin: 30
			});
		});
		$(".kiaworld-other-items.owl-carousel").owlCarousel({
				nav: true,
				loop: false,
				//items: 3,
				dots: false,
				dotsEach: false,
				//slideBy: 2,
				autoplay: false,
				autoplayTimeout: 5400,
				touchDrag: true,
				center: false,
				autoheight: true,
				responsive:{
					0:{items:1},
					991:{items:3},
					1600:{items:3}
				},
				navText : owlBtn,
				margin: 30
		});



		$(".design-inter-items.owl-carousel").owlCarousel({
				nav: false,
				loop: false,
				//items: 3,
				dots: true,
				dotsEach: false,
				//slideBy: 2,
				autoplay: false,
				//autoplayTimeout: 5400,
				touchDrag: true,
				center: false,
				autoheight: true,
				responsive:{
					0:{items:1},
				},
				navText : owlBtn,
				margin: 30
		});







		$(document).on('click', '[tc]', function(e){
			e.preventDefault();
			var that = $(this);
			var toggleClassName = that.attr("tc") || "active";
			var toggleEl = $(that.attr("href"));
			console.log(toggleEl, toggleClassName);
			if( typeof that.attr("tc-closest") == "string" )
				that.closest(toggleEl).toggleClass(toggleClassName);
			else
				$(toggleEl).toggleClass(toggleClassName);
		})

		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				toolbar : true,
				keyboard : true,
				thumbs : {
					autoStart   : false
				},
				touch : false,
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		// SMOTHSCROLL-LINK
		if( "smoothScroll" in window )
			smoothScroll.init({
				easing: 'easeInOutCubic',
				offset: 10
			});
		/*ELEVATEZOOM*/
		if ( !checkSm() && $("[data-zoom-image]:not([group])").length )
			var x = $("[data-zoom-image]:not([group])").elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				//cursor: 'pointer', 
				tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				//zoomType        : "lens",
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: true,
				easing: true
			});






		// Адаптация хедера при скролле
		window.minMenu = $(".header-scroll");
		window.headerRange = false;
		// Scroll events
		$(window).on("scroll", function(e) {
			
			var scrollTop = $(window).scrollTop();
			if (scrollTop > 250 && headerRange == false) {
				headerRange = true;
				minMenu.addClass("scrolled");
			} else if (scrollTop < 250 && headerRange == true) {
				headerRange = false;
				minMenu.removeClass("scrolled");
			}


		});
		$(window).trigger("scroll");


		// var optionsRecon = $(".scroll-options-recon");
		// $(window).on("scroll", function(e) {
		// 	var el = $("#footer");
		// 	var docViewTop = $(window).scrollTop(),
		// 		docViewBottom = docViewTop + $(window).height(),
		// 		elTop = $(el).offset().top,
		// 		elBottom = elTop + $(el).height();
		// 	//console.log(elBottom, docViewBottom, elTop, docViewTop);
		// 	if( scrollTop > 750 && docViewBottom <= elTop){
		// 		optionsRecon.addClass("options-recon");
		// 	}else{
		// 		optionsRecon.removeClass("options-recon");
		// 	}
		// })

		$('*').contents().each(function() {
      if(this.nodeType === Node.COMMENT_NODE) {
        if( $(this)[0] == '<!---->'){
          //$(this).remove();
        }
      }
    });


		var wheelup = $(".scrolled-down");
		window.scrollYCurrent = 0;
		$(window).on('mousewheel DOMMouseScroll MozMousePixelScroll', (e)=>{
			
			if(window.scrollY == scrollYCurrent){
				return;
			}
			scrollYCurrent = window.scrollY;
			if (e.originalEvent.wheelDelta >= 0) {
				wheelup.removeClass("down")
			}else{						
				wheelup.addClass("down")
			}
			

		});



		//dealers
		$(document).on("click", "[toggle-class-wrapper] a", function(){
			var that = $(this);
			that.closest("[toggle-class-wrapper]").toggleClass(that.attr("toggle-class"));
		})

		//focused input
		$(".placeholder-focus .form-control").on("change", function(e){
			var that = $(this);
			if(that.val().length > 0){
				that.addClass("focused");
			}else{
				that.removeClass("focused");
			}
		})

		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"wrapper-bg", // wrapper-bg black
				//"theme-dark",
				"theme-white",
				//"fullscreen",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: ""
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});







		



	
}