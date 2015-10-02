

var numofclicks = 0;

$('button').on('click', function(e) {

	numofclicks = (numofclicks +1);
	
	$('.count').text(numofclicks);
	
	
	if (numofclicks % 2 == 0) {
		$('body').css('background', 'yellow');
		$('h1').html('Its so bright in here!');
	}
	
	else {
		$('body').css('background', 'black');
		$('h1').html('Hey, who turned off the lights?');		
	}
	
	
	
	
});
