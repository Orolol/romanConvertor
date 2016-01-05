#!javascript

exports.romanConvertor = function(input){


	if(isNaN(parseFloat(input)) || input > 9999 || input < 1){
		result = 'Error wrong input';
	} else {

	var diviseurs = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
	 symboles = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ],
	 result = '';

	for ( var i = 0; i < diviseurs.length; ++i ){
		var x = input / diviseurs[i];
		input = input % diviseurs[i];

		for (var x ; x >= 1; x--){
			result += symboles[i];
		}
	}
}

	return result;
}

