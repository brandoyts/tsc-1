const scores: Array<number> = [];
const names: Array<string> = [];

interface Bottle {
	brand: string;
	type: number;
}

const identity = <Bottle>(b: Bottle): Bottle => {
	return b;
};

console.log(identity({ brand: '2232' }));
