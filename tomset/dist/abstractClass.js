"use strict";
/**
 * an abstract class is a blueprint
 * you cannot create an object from abstract class
 */
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 5;
    }
}
class Ingram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('sepia');
    }
}
const ig = new Ingram('test', 'test', 2);
console.log(ig);
console.log(ig.getReelTime());
