//Cause you dances better than the king of pop?
var MichaelJackson = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
  this.step();
}
//Set up inheritance
MichaelJackson.prototype = Object.create(Dancer.prototype);
MichaelJackson.prototype.constructor = MichaelJackson;

//Stoe prototype step in new variable for easy calling later.
MichaelJackson.prototype.oldStep = Dancer.prototype.step;

MichaelJackson.prototype.step = function() {
  //Call inherited method first when changing method for new class.
  this.oldStep();

  //this.$node(//something to change black to white.)
};
