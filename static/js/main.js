

export default ()=>{


/* COMMON FUNCTION */
window.checkSm = function(){
	return $(document).width() <= 991;
}
window.checkMd = function(){
	return $(document).width() < 1199 && !checkSm();
}
window.getRandomInt = function(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
window.getRandomIntFloat = (min, max) =>{
	return Math.random() * (max - min) + min;
}
window.scrolledDiv = function(el){
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
window.roundFix = function(num, cnt){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}
window.spaceBetweenNum = function(str, char){
	str = str+"";
	char = char || ","
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(str))
		str = str.replace(pattern, "$1"+char+"$2");
	return str;
}





/* COMMON VAREBILES */

window.isWebkit = /Webkit/i.test(navigator.userAgent),
window.isChrome = /Chrome/i.test(navigator.userAgent),
window.isMac = /Mac/i.test(navigator.userAgent),
window.isMobile = !!("ontouchstart" in window),
window.isAndroid = /Android/i.test(navigator.userAgent),
window.isEdge = /Edge/i.test(navigator.userAgent);




/* SELECT2 */
if ( $(".js-select").length )
	$(".js-select").select2({
		placeholder: true,
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
				dots: true,
				dotsEach: false,
				autoplay: false,
				touchDrag: true,
				center: false,
				autoheight: true,
				responsive:{
					0:{items:1},
				},
				navText : owlBtn,
				margin: 30
		});
    
		if(!window.mainJsActive)
			$(document).on('click.toggle', '[tc]', function(e){
				e.preventDefault();
				var that = $(this);
				var toggleClassName = that.attr("tc") || "active";
				var toggleEl = $(that.attr("href"));
				if( typeof that.attr("tc-closest") == "string" )
					that.closest(toggleEl).toggleClass(toggleClassName);
				else
					$(toggleEl).toggleClass(toggleClassName);
			})
			
		window.collapseClear = ()=>{
      $('.section-body').map((i, el)=>{
				el = $(el);
				if(el.find("li").length == 0)
					el.closest(".item").addClass("hide");				
			})
		}
		
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();

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
		window.smoothScroll = new SmoothScroll('[scroll-link]', {
			speed: 500,
			offset: 140,
			speedAsDuration: true
		});

		$(document).on("submit", "[formaj]", function(e){
			e.preventDefault();
			var that = $(this);
			console.log(this)
			var successEl = $(".form-success-block");
			var url = that.attr("action");
			var form_data = $(this).serialize(); // Собираем все данные из формы
			that.find('[type="submit"]').addClass("pe-none")
			$.ajax({
        type: "POST", // Метод отправки
        url: url, // Путь до php файла отправителя
        data: form_data,
        success: function(res) {
					that.find('[type="submit"]').removeClass("pe-none");
          // Код в этом блоке выполняется при успешной отправке сообщения
					res = JSON.parse(res);
					if (res.status == 200){
						that.addClass("hide");
						successEl.addClass("active");
					}
					console.log(res.status);
          //alert("Ваше сообщение отправлено!");
        }
      });
		})


		// Адаптация хедера при скролле
		window.headerRange = false;
		// Scroll events
		$(window).on("scroll", function(e) {
			
			var scrollTop = $(window).scrollTop();
			if (scrollTop > 250 && headerRange == false) {
				headerRange = true;
				$(".header-scroll").addClass("scrolled");
			} else if (scrollTop < 250 && headerRange == true) {
				headerRange = false;
				$(".header-scroll").removeClass("scrolled");
			}


		});
		$(window).trigger("scroll");

		$('*').contents().each(function() {
      if(this.nodeType === Node.COMMENT_NODE) {
        if( $(this)[0] == '<!---->'){
          //$(this).remove();
        }
      }
    });

		
		window.scrollYCurrent = 0;
		$(window).on('mousewheel DOMMouseScroll MozMousePixelScroll', (e)=>{
			if(window.scrollY == scrollYCurrent){
				return;
			}
			scrollYCurrent = window.scrollY;
			if (e.originalEvent.wheelDelta >= 0) {
				$(".scrolled-down").removeClass("down")
			}else{						
				$(".scrolled-down").addClass("down")
			}
		});


		$("[scrollf]").map((i, el)=>{
			el = $(el)
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
				"wrapper-bg",
				"theme-white",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});
		window.minMenu = $("#min-menu").data("mmenu");


	window.mainJsActive = true;

}