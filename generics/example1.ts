type Coordinates<T> = {
	longitude: T;
	latitude: T;
};

type CurrentLocation = {
	address: string;
	coordinates: Coordinates<number>;
};

interface Device<T> {
	id: T;
	isOnline: boolean;
	location: CurrentLocation;
}

const device1: Device<string> = {
	id: '23212f2g',
	isOnline: true,
	location: {
		address: 'ascension avenue',
		coordinates: {
			longitude: 14.252451,
			latitude: 21.295,
		},
	},
};

const device2: Device<number> = {
	id: 3320000,
	isOnline: false,
	location: {
		address: 'ascension avenue',
		coordinates: {
			longitude: 14.252451,
			latitude: 21.295,
		},
	},
};

function echo<T>(arg: T): T {
	return arg;
}

echo<string>('tests');
echo<number>(2023);

const getCurrentDevice = <T>(arg: Device<T>): Device<T> => {
	return arg;
};

const myCurrentDevice = getCurrentDevice<string>(device1);
const backupDevice = getCurrentDevice<number>(device2);

console.log(myCurrentDevice);
console.log(backupDevice);
