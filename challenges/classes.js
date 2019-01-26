// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(cuboidAttrs) {
//     this.length = cuboidAttrs.length;
//     this.width = cuboidAttrs.width;
//     this.height = cuboidAttrs.height;
//   }
// CuboidMaker.prototype.volume = function(length,width,height) {
//     return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function(length,width,height) {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }
class CuboidMaker {
    constructor(cuboidAttrs) {
        this.length = cuboidAttrs.length;
        this.width = cuboidAttrs.width;
        this.height = cuboidAttrs.height;
    }
    volume(length, width, height) {
        return this.length * this.width * this.height;
    }
    surfaceArea(length, width, height) {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(cubeAttrs) {
        super(cubeAttrs);
        this.edge = cubeAttrs.edge;
    }
    volume(edge) {
        return this.edge * this.edge * this.edge;
    }
    surfaceArea(edge) {
        return 6 * (this.edge * this.edge);
    }
}

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3,
    edge: 3,
});

console.log(cube.volume(`${this.edge}`));
console.log(cube.surfaceArea(`${this.edge}`));