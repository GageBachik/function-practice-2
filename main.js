function getName(human){
	console.log(human.name);
}

function totalLetters(strings){
	var total = 0;
	strings.map(function(index){
		total += index.length;
	});
	console.log(total);
}

function keyValue(key, value){
	var object = {};
		object[key] = value;
	console.log(object);
}

function negativeIndex(array, num){
	var value;
	value = array[array.length + num];
	console.log(value);
}

function removeM(string){
	console.log(string.split('m').join(''));
}

function printObject(object){
	for(var key in object){
		console.log(key + ' is ' + object[key]);
	}
}

function vowels(string){
	var vowels = []
	var character = string.toLowerCase().split('')
	character.map(function(index){
		if (index === 'a' || index === 'e' || index === 'i' || index === 'o' || index === 'u' ) {
			vowels.push(index);
		};
	});
	console.log(vowels);
}

function twins(array){
	var test = array.map(function(value, index){
		if (array[index+1] === value){
			return true;
		}else{
			return false;
		}
	});

	for (var i = 0; i < test.length; i++) {
		if (test[i] === test[i+1]){
			return false
		}
	}

	return true;
}

function or(array){
	for (var i = 0; i < array.length; i++) {
		if(array[i]) return true;
	}
	return false;
}

function unique(strings){
	uniqueArray = strings.filter(function(elem, pos) {
		console.log(strings.indexOf(elem), pos);
		return strings.indexOf(elem) === pos;
	});
	console.log(uniqueArray);
}

