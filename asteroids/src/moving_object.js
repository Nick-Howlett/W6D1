function MovingObject(opts) { 
  this.pos = opts.pos; 
  this.vel = opts.vel; 
  this.radius = opts.radius; 
  this.color = opts.color; 
} 

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  )
  ctx.fill();
}

MovingObject.prototype.move = function() {
  for (let i = 0; i < vel.length; i++) {
    pos[i] += vel[i]; 
  }
}

module.exports = MovingObject; 
