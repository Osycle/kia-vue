
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


		/* bootstrap tooltip*/		
		$('[data-toggle="tooltip"]').tooltip({
			html: true
		})
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


		$(".bnr-carousel-items.owl-carousel").owlCarousel({
			nav: true,
			loop: true,
			//items: 3,
			dots: true,
			dotsEach: false,
			//autoplay: true,
			//autoplayTimeout: 7000,
			autoheight: true,
			touchDrag: true,
			mouseDrag: true,
			//smartSpeed: 0,
			responsive:{
				0:{items:1},
				991:{items:1}
			},
			navText : owlBtn,
			margin: 0
    });
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
		var configCrs = $(".config-variants-items.owl-carousel").owlCarousel({
				nav: true,
				loop: false,
				items: 2,
				dots: false,
				dotsEach: false,
				//slideBy: 2,
				autoplay: false,
				autoplayTimeout: false,
				autoWidth: true,
				touchDrag: false,
				mouseDrag: false,
				center: false,
				autoheight: true,
				merge: true,
				responsive:{
	        678:{
	            mergeFit:true
	        }
				},
				navText : owlBtn,
				margin: 0
		});
		var configTableCrs = $(".owl-table.owl-carousel").owlCarousel({
				nav: false,
				loop: false,
				items: 2,
				dots: false,
				dotsEach: false,
				//slideBy: 2,
				autoplay: false,
				autoplayTimeout: false,
				autoWidth: true,
				touchDrag: false,
				mouseDrag: false,
				center: false,
				autoheight: true,
				merge: true,
				responsive:{
	        678:{
	            mergeFit:true
	        }
				},
				navText : owlBtn,
				margin: 0
		});


		configCrs.find(".owl-next").on('click', function(event) {
			configTableCrs.trigger('next.owl.carousel');
		})
		configCrs.find(".owl-prev").on('click', function(event) {
			configTableCrs.trigger('prev.owl.carousel');
		})


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







		$('[data-toggle="click"]').on("click", function(e){
			var that = $(this);
			e.preventDefault();
			that.closest(that.attr("href")).toggleClass("active");
		})

		$('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 30
    });

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







		// Scroll events
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		var staffProgressStatus = false;
		var scrollTop;
		$(window).on("scroll", function(e) {
			scrollTop = $(window).scrollTop();
			//Адаптация хедера при скролинге
			if (scrollTop > 250 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled");

			} else if (scrollTop < 250 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta

			if( scrollTop > 170 && scrollTop < ($(".services-content").height()-200) ){
				if(!$(".services-nav").hasClass("scrolled"))
					$(".services-nav").addClass("scrolled");
			}else{
				if($(".services-nav").hasClass("scrolled"))
					$(".services-nav").removeClass("scrolled");
			}
			if(scrollTop > $(".services-content").height()-250){
				//$(".services-nav").css("bottom", $(".services-content").height());
				//$(".services-nav").addClass("end");
			}
			else{
				$(".services-nav").removeClass("end");
			}

		});
		$(window).trigger("scroll");


		var optionsRecon = $(".scroll-options-recon");
		$(window).on("scroll", function(e) {
			var el = $("#footer");
			var docViewTop = $(window).scrollTop(),
				docViewBottom = docViewTop + $(window).height(),
				elTop = $(el).offset().top,
				elBottom = elTop + $(el).height() / 1.8;
			//console.log(elBottom, docViewBottom, elTop, docViewTop);
			if( scrollTop > 600 && docViewBottom <= elTop){
				optionsRecon.addClass("options-recon");
			}else{
				optionsRecon.removeClass("options-recon");
			}
		})
		var wheelup = $(".scrolled-up");
		$(window).on('mousewheel', function(e) {
			//console.log(e);
			if($(e.target).closest(".config-filter-items").length)
				return;
			if (e.originalEvent.wheelDelta >= 0) {
				wheelup.removeClass("up")
			}else{						
				wheelup.addClass("up")
			}
		});
		//config options
		$(".config-details .item")
			.removeClass("active")
			.eq(0)
			.add($(".config-details .item").eq(2))
			.addClass("active");



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





		//subdown
		$("[subdown-click]").on("click", function(){
			var that = $(this)
			var num = that.attr("subdown-click");
			($("[subdown]")).removeClass("subdown-active");
			if(that.hasClass("bg-shadow")){
				console.log(that);
				$("a[subdown-click='"+num+"']").trigger("click");
				return;
			}
			if(!that.hasClass("subdown-active")){
				$("a[subdown-click]").removeClass("subdown-active");
				that.add($("[subdown="+num+"]")).addClass("subdown-active");
				$("body").addClass("subdown-active");
			}else{
				that.add($("[subdown="+num+"]")).removeClass("subdown-active");
				$("body").removeClass("subdown-active");
			}
		})
		$(".subdown-wrapper").on("click", function(e){
			if($(e.target).hasClass("subdown-wrapper"))
				$("[subdown-click].subdown-active").trigger("click");
		})


		if ($(".carousel-article").length >= 0) {
			window.carouselArticle = function() {
				var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

				for (var i = 0; i < carouselMain.length; i++) {
					var crs = $(carouselMain)
						.eq(i)
						.flickity({
							imagesLoaded: true,
							prevNextButtons: false,
							cellAlign: "center",
							bgLazyLoad: 1,
							//friction: 1,
							//selectedAttraction: 1,
							initialIndex: 1,
							draggable: false,
							contain: true,
							pageDots: false
						});
					var flkty = crs.data("flickity");

					$(carouselNav).eq(i).flickity({
						imagesLoaded: true,
						initialIndex: 1,
						asNavFor: $(carouselMain)[i],
						prevNextButtons: false,
						draggable: true,
						percentPosition: true,
						//wrapAround: true,
						cellAlign: "center",
						adaptiveHeight: true,
						//contain: true,
						pageDots: false
					});
          $("[data-fancybox]").fancybox({
            afterShow: function(instance, current) {
              this.$content.find(".carousel-main").flickity("resize");
              this.$content.find(".carousel-nav").flickity("resize");
            }
          });
				}
			}
		};
		carouselArticle();
		



	
}