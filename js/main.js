//首页顶部固定浮动 S
$(function(){
	$(window).scroll(function() {
		var topToolbar = $("#topToolbar");
		var headerH = $("#header").outerHeight();
		var scrollTop = $(document).scrollTop();
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
			if( scrollTop >= headerH ){
				topToolbar.show();
			}else if( scrollTop < headerH ){
				topToolbar.hide();
			}
		}else{
			if( scrollTop >= headerH ){
				topToolbar.stop(false,true).animate({ 'top':0 });
			}else if( scrollTop < headerH ){
				topToolbar.stop(false,true).animate({ 'top':-40 });
			}
		};
	});
});
//首页顶部固定浮动 E

//首页导航 S
jQuery(document).ready(function(){
	var qcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').each(function(){
		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
		});
		$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').removeClass('nav-up-selected');
		$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});
});
//首页导航 E



//仿H123左侧浮动导航 S
$(document).ready(function(){
	// 更多新闻
	function ml_close_demo() {
		$('.float-news').animate({
	      	left: '-450px'
	    }, 300, function(){
	      	$('.float-open').delay(50).animate({
	        	left: '-2px'
	      	}, 300);
	    });
	}
	function ml_open_demo() {
		$('.float-open').animate({
	      	left: '-70px'
	    }, 100, function(){
	      	$('.float-news').delay(50).animate({
	        	left: '0px'
	      	}, 300);
	    });
	}
	
	$('.float-close').click(function(){
	    ml_close_demo();
	    return false;
	});
	$('.open-btn').click(function(){
	    ml_open_demo();
	    return false;
	});
	
	setTimeout(function(){ml_open_demo()});
	//setTimeout(function(){ml_close_demo()},1000);
	
});
//仿H123左侧浮动导航 E

//火箭 S
$(function() {
	var e = $("#rocket-to-top"),
	t = $(document).scrollTop(),
	n,
	r,
	i = !0;
	$(window).scroll(function() {
		var t = $(document).scrollTop();
		t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
			marginTop: "-1000px"
		},
		"normal",
		function() {
			e.css({
				"margin-top": "-125px",
				display: "none"
			}),
			i = !0
		})) : e.fadeIn("slow")
	}),
	e.hover(function() {
		$(".level-2").stop(!0).animate({
			opacity: 1
		})
	},
	function() {
		$(".level-2").stop(!0).animate({
			opacity: 0
		})
	}),
	$(".level-3").click(function() {
		function t() {
			var t = e.css("background-position");
			if (e.css("display") == "none" || i == 0) {
				clearInterval(n),
				e.css("background-position", "0px 0px");
				return
			}
			switch (t){
			case "0px 0px":
				e.css("background-position", "-298px 0px");
				break;
			case "-298px 0px":
				e.css("background-position", "-447px 0px");
				break;
			case "-447px 0px":
				e.css("background-position", "-596px 0px");
				break;
			case "-596px 0px":
				e.css("background-position", "-745px 0px");
				break;
			case "-745px 0px":
				e.css("background-position", "-298px 0px");
			}
		}
		if (!i) return;
		n = setInterval(t, 50),
		$("html,body").animate({scrollTop: 0},"slow");
	});
});
//火箭 E


//顶部二维码关注 S
$("#guanzhu").click(function(a){$("#erweima").fadeIn();a.stopPropagation()});$("#erweima a").click(function(){$("#erweima").fadeOut()});$("#erweima img").click(function(a){a.stopPropagation()});
$(document).click(function(){if($("#erweima").is(":visible")){$("#erweima").fadeOut()}});
//顶部二维码关注 E
