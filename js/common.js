$(function() {

	'use strict';

	// superhover effect

	var HOVER = document.querySelectorAll('.superhover');

	for (var i = 0; i < HOVER.length; i++) {
		HOVER[i].onmousemove = function (e) {
			var x = e.pageX - e.target.offsetLeft;
			var y = e.pageY - e.target.offsetTop;

			e.target.style.setProperty('--x', x + 'px');
			e.target.style.setProperty('--y', y + 'px');
		};
	}

	jQuery("a[href^='#']").click(function() {
        var elementClick =  jQuery(this).attr("href")
        var destination =  jQuery(elementClick).offset().top+1;
        jQuery("html, body").animate({
            scrollTop: destination
        }, 1000);
        return false;
     });
    

});
