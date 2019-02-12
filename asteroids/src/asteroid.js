const MovingObject = require("./moving_object.js");

function Asteroid(opts) {
  let ourOpts = {color: "grey", radius: 10, pos: opts.pos}
  MovingObject.call(ourOpts); 
  this.vel = Util.randomVec(20); 
} 

module.exports = Asteroid;