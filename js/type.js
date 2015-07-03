$(document).ready(function() {
		
	//blocksit define
	$(window).load( function() {
		$('.con1').BlocksIt({
			numOfCol: 2,
		});
	});
	
	//window resize
	var currentWidth = 1100;
	$(window).resize(function() {
		var winWidth = $(window).width();
		var conWidth;
		if(winWidth < 660) {
			conWidth = 440;
			col = 2
		} else if(winWidth < 880) {
			conWidth = 660;
			col = 3
		} else if(winWidth < 1100) {
			conWidth = 880;
			col = 4;
		} else {
			conWidth = 1100;
			col = 5;
		}
		
		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('.con1').width(conWidth);
			$('.con1').BlocksIt({
				numOfCol: col,
				offsetX: 8,
				offsetY: 8	
			});
		}
	});
	
	$(window).load( function() {
		$('.con2').BlocksIt({
			numOfCol: 2,
		});
	});
	//window resize
	var currentWidth2 = 1100;
	$(window).resize(function() {
		var winWidth2 = $(window).width();
		var conWidth2;
		if(winWidth2 < 660) {
			conWidth2 = 440;
			col2 = 2
		} else if(winWidth2 < 880) {
			conWidth = 660;
			col2 = 3
		} else if(winWidth2 < 1100) {
			conWidth2 = 880;
			col2 = 4;
		} else {
			conWidth2 = 1100;
			col2 = 5;
		}
		
		if(conWidth2 != currentWidth2) {
			currentWidth2 = conWidth2;
			$('.con2').width(conWidth2);
			$('.con2').BlocksIt({
				numOfCol: col2,
				offsetX: 8,
				offsetY: 8	
			});
		}
	});
	
});