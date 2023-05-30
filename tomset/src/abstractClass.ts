/**
 * an abstract class is a blueprint
 * you cannot create an object from abstract class
 */

abstract class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {}

	// this is a signature function
	abstract getSepia(): void;

	getReelTime(): number {
		return 5;
	}
}

class Ingram extends TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter);
	}
	getSepia() {
		console.log('sepia');
	}
}

const ig = new Ingram('test', 'test', 2);

console.log(ig);

console.log(ig.getReelTime());
