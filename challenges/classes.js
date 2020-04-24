// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{ 
    constructor(attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  
 job(){
   return 'volume of leghth is  ${this.length} , of width is ${this.width} , of height is ${this.height}';
  }
}
  CuboidMaker.prototype.surfaceArea = function(){
    console.log ('surface area of length is ${this.length} , of width is  ${this.width} ,  of hight is ${this.height}');
  }

  const cuboidUser =  CuboidMaker({
    length: 10,
    width : 20,
    height: 10,
 });

 cuboidUser.volume();
cuboidUser.surfaceArea();

  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.