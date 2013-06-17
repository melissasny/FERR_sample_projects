$(document).ready(function(){

	$('h1').text("Color Palette Builder");
	$('h3').hide();

	alert("Welcome to the color palette builder. Enter one or more colors, separated by a comma and a space, to create your palette.\n\nSelect a color box and press 'delete' or 'backspace' to delete the box.\n\nClick the arrows to move the selected box to the right or left.");

	$('#colors_string').focus();

	$('#add').click(function(){
		var colorsInput = $('#colors_string').val().split(', ');

		//create color boxes for each color entered
		$.each(colorsInput,function(i){
			$('#colors').append('<div class="color new"></div>');
			$('.new').css("background-color", colorsInput[i]);
			$('.color').removeClass('new');
		});

		//apply border to the selected color box		
		$('.color').click(function(){
			$('.color').removeClass('selected');
			$(this).addClass('selected');
		});	

		//change input box background-color to match color box when user hovers over the box
		$('.color').hover(
			function(){
			var selectedColor = $(this).css('background-color');
			$('#colors_string').css('background-color', selectedColor);
			$('#colors_string').css('color', '#FFF');
			$('h1').css('color', selectedColor);
			},
			function(){
			$('#colors_string').css('background-color', '#FFF');
			$('#colors_string').css('color', '#252525');
			$('h1').css('color', '#252525');	
			}
		);

		//hit backspace key or delete key to delete the selected color box
		$(document).keyup(function(event){
			if(event.which === 8 || event.which === 46){
				$('.selected').remove();
			}
		});

		$('#colors_string').focus();

	});	

//move selected color box to the right when the right arrow is clicked
	$('#right').click(function(){
		var selectedColor = $('.selected').css('background-color');
		var nextColor = $('.selected').next().css('background-color');
		$('.selected').css('background-color', nextColor);
		$('.selected').addClass('temp');
		$('.selected').next().css('background-color', selectedColor);
		$('.selected').next().addClass('selected');
		$('.color.selected.temp').removeClass('selected');
		$('.color.temp').removeClass('temp');
	});

//move selected color box to the left when the left arrow is clicked
	$('#left').click(function(){
		var selectedColor = $('.selected').css('background-color');
		var prevColor = $('.selected').prev().css('background-color');
		$('.selected').css('background-color', prevColor);
		$('.selected').addClass('temp');
		$('.selected').prev().css('background-color', selectedColor);
		$('.selected').prev().addClass('selected');
		$('.color.selected.temp').removeClass('selected');
		$('.color.temp').removeClass('temp');
	});

});