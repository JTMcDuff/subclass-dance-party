//var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;

  //blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //blinkyDancer.$node.toggle();
  //};

  //return blinkyDancer;
//};

//Pseudo-classical implementation of BlinkyDancer class.
var BlinkyDancer = function(top,left, timeBetweenSteps) {
  //console.log(Dancer)
  Dancer.call(this,top,left,timeBetweenSteps);
  this.step();
  //onsole.log("oldstep:"+this.oldStep);
};

//Set up Inheritance.
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

//Save step as oldStep.
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

//Pseudo-classical implementation of methods.
BlinkyDancer.prototype.step = function() {
  //console.log("oldstep:"+this.oldStep);
  //console.log("this.$node:"+this.$node);
  this.oldStep();
  this.$node.toggle();
};


