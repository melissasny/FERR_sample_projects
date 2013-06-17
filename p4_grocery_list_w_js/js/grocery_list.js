var list = [];
var food_item;
var found = false;
var response = prompt('(a)dd item or (q)uit?');

	while(response === 'a'){
		food_item = prompt('What do you need to add');
		for (var i = 0; i<list.length; i++){
			if(list[i] === food_item ){
				found = true;
				alert('This item is already on the list');
				break;
			}
		}
		if (!found){
			list.push(food_item);
		}
		found = false;
		response = prompt('(a)dd item or (q)uit?');
	}

$(document).ready(function(){
	$('h1').text('My Shopping List');
	$('p').hide();
	$('h1').after('<ul>');

	for(var i = 0; i<list.length;i++){
		$('ul').append('<li>' + list[i] + '</li>');
	}
	
	$('li').css("list-style-type", "inherit");

});