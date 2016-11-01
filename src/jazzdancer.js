var JazzDancer = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="jazzdancer"></span>');
  console.log("creating node: "+this.$node);
  this.step();
  this.setPosition(top,left);
}

//Set up Object Inheritance for Pseudoclassical.
JazzDancer.prototype = Object.create(Dancer.prototype);
JazzDancer.prototype.constructor = JazzDancer;

//Store step as oldStep for later.
JazzDancer.prototype.oldStep = Dancer.prototype.step;

JazzDancer.prototype.step = function() {
  //Invoke old method first when reimplementing new method.
  this.oldStep();
  //Do something with the node.
  this.$node.toggle();
};
