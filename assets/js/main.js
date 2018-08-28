//parallx effect cover

var windowWidth = $(window).width();


$('.cover').mousemove(function (event) {
	// body...
	//var moveX = (($(window).width() / 2) - event.pageX) * 0.05;
	//var moveY = (($(window).height() / 2) - event.pageY) * 0.05;

	var moveX = (($(window).width() / 2) - event.pageX) * 0.05;
	var moveY = (($(window).height() / 2) - event.pageY) * 0.05;


	//element movememts
	//light color hills
	var hillsX = moveX * 0.09;
	var hillsY = moveY * 0.1;

	//dark mountain
	var darkMountainX = moveX * 0.3;
	var darkMountainY = moveY * 0.3;

	//hiker
	var hikerX = moveX * 0.1;

	//moon
	var moonX = moveX * 0.5;
	var moonX = moveX * 0.5;

	//cover-title
	var coverTitleX = moveX * 0.8;
	var coverTitleY = moveY * 0.8;

	$('.hills').css('margin-left', hillsX + 'px');
	$('.hills').css('margin-top', hillsY + 'px');
	$('.hills').css('width', '97vw');

	$('.dark-mountain').css('margin-left', darkMountainX + 'px');
	$('.dark-mountain').css('margin-top', darkMountainY + 'px');

	$('.hiker').css('margin-left', hikerX + 'px');
	//$('.hills').css('margin-top', hillsY + 'px');

	$('.moon').css('margin-left', moonX + 'px');
	$('.moon').css('margin-top', moonY + 'px');

	//$('.cover-title').css('margin-left', coverTitleX + 'em');
	//$('.cover-title').css('margin-top', coverTitleY + 'em');


})
