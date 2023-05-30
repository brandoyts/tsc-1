interface ILocation {
	address: string;
	coordinates: TCoordinates<string>;
}

type TCoordinates<T> = {
	longitude: T;
	latitude: T;
};

interface IBranch {
	branchName: string;
	branchCode: string;
	isOpen: boolean;
	location: ILocation;
}

class Branch {
	constructor(public document: IBranch) {}
}

const branch1Data: IBranch = {
	branchName: 'Branch 1',
	branchCode: '3222',
	isOpen: false,
	location: {
		address: 'Ascension Avenue',
		coordinates: {
			latitude: '14.200312332',
			longitude: '121.22213122',
		},
	},
};

const branch1 = new Branch(branch1Data);

console.log(branch1);

class Vehicle {
	constructor(public location: ILocation) {}

	get getCoordinates(): TCoordinates<string> {
		return this.location.coordinates;
	}

	set updateCoordinates(newCoordinates: TCoordinates<string>) {
		this.location.coordinates = newCoordinates;
	}
}

const truck = new Vehicle({
	address: 'Ascension Avenue',
	coordinates: {
		latitude: '14.200312332',
		longitude: '121.22213122',
	},
});

console.log(truck);
console.log(truck.getCoordinates);

truck.updateCoordinates = {
	latitude: '14.000920132',
	longitude: '121.00000000',
};

console.log(truck.getCoordinates);
