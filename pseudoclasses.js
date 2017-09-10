//pseudo classes

function Building (name,floors) {
  this.name = name;
  this.floors = floors;
}

Building.prototype.countFloors = function() {
  console.log(`${this.name} building has ${this.floors}`);
}

var buildingWith5Floors = new Building("LIC", 5);
buildingWith5Floors.countFloors();

module.exports = Building;
