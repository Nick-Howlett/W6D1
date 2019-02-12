// Function.prototype.inherits = function(parent) {
//   const Surrogate = function(){};
//   console.log(this);
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype); 
  this.prototype.constructor = this;
};

function MovingObject() { 
  this.info = "I am not a ship!"
}

MovingObject.prototype.move = function () {
  console.log("I'm moving!");
};

function Ship() { 
}
Ship.inherits(MovingObject);
Ship.prototype.shoot = function(){
  console.log("pew pew pew");
};


function Asteroid() { 

}

Asteroid.inherits(MovingObject);
Asteroid.prototype.breaking = function () {
  console.log("Crumble crumble");
}



let mo = new MovingObject();
let s = new Ship();
let ast = new Asteroid();
mo.move();
s.shoot();
ast.breaking();
s.move();
ast.move();
