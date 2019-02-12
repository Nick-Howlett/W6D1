const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./utils.js");

window.MovingObject = MovingObject; 
window.Asteroid = Asteroid;
window.Util = Util;

document.addEventListener("DOMContentLoaded", function (event) {
  let canvas = document.getElementById("game-canvas");
  canvas.getContext("2d"); 
});

console.log("Webpack is working!"); 
