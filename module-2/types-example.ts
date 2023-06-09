/* 
	core types:
	number
	string
	boolean
	object
*/

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;

	if (showResult) {
		console.log(phrase + result);
	} else {
		return n1 + n2;
	}
}

const number1 = 5;
const number2 = 2.5;
const printResult = false;
const resultPhrase = 'The result is: ';

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);
