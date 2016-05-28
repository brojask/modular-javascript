// video #1

/*var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function(){
	people.push( $('#peopleModule').find('input').val() );
	$('#peopleModule').find('input').val('');
	var data = {
		people: people,
	};
	$('#peopleModule').find('ul').html( Mustache.render(template, data) );
});

$('#peopleModule').find('ul').delegate('i.del','click', function(e){
	var $remove = $(e.target).closest('li');
	var i = $('#peopleModule').find('ul').find('li').index($remove);

	$remove.remove();
	people.splice(i, 1);
});*/

/*object literal model
all is accesible*/

var myModule = {
	name: 'Bryan',
	age: 26,
	sayName: function(){
		alert( this.name );
	},
	setName: function(newName){
		this.name = newName;
	}
}

myModule.sayName();

// revealing model pattern
var people = (function(){
	//self executing anonimous function

	var name = 'Will';

	function sayName = function() {
		alert(name);
	}

	return {
		sayName: sayName,
		name: 'bob'
	}


})()