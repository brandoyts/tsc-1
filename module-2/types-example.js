function add(n1, n2, showResult, phrase) {
	var result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return n1 + n2;
	}
}
var number1 = 5;
var number2 = 2.5;
var printResult = true;
var resultPhrase = 'The result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
