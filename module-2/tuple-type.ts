/**
 *
 */

const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // this is a tuple
} = {
	name: 'Brando',
	age: 24,
	hobbies: ['Play guitar', 'Play video games'],
	role: [2, 'admin'],
};

console.log(person);
