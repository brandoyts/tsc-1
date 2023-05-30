// class User {
// 	email: string;
// 	name: string;
// 	private readonly city: string = '';
// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }

class User {
	protected _courseCount = 1;

	readonly city: string = '';

	constructor(public email: string, public name: string) {}

	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	get courseCount(): number {
		return this._courseCount;
	}

	set setCourseCount(courseNum: number) {
		if (courseNum <= 1) {
			throw new Error('Course count should be more than 1');
		}

		this._courseCount = courseNum;
	}

	private deleteToken(): void {
		console.log('token deleted');
	}
}

class SubUser extends User {
	isFamily: boolean = true;
	changeCourseCount() {
		this._courseCount = 4;
	}
}

const Brando = new User('brando@mail.com', 'Brando Endona');
Brando.setCourseCount = 5;
console.log(Brando);

const fam1 = new SubUser('Fam1@mail.com', 'Fam1');
fam1.changeCourseCount();
console.log(fam1);

console.log(Brando);
