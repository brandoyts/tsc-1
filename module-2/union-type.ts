/**
 * a union type accepts multiple types not just a single type
 *
 */

// this function uses a union type for parameter
// it accepts either number or string
function combine(input1: number | string, input2: number | string) {
	let result;

	if (typeof input1 === 'number' && typeof input2 === 'number') {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	return result;
}

const combinedAges = combine(25, 26);

console.log(combinedAges);

const combinedNames = combine('Brando', 'Endona');

console.log(combinedNames);
