/**
 *
 */

enum Role {
	ADMIN,
	EDITOR,
	AUTHOR,
}

const person = {
	name: 'Brando',
	age: 24,
	role: Role.AUTHOR,
};

console.log(person);
