//Cause you dances better than the king of pop?
var MichaelJackson = function(top,left,timeBetweenSteps) {
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<span class="MichaelJackson"></span>');
  this.step();
  this.setPosition(top,left);
}
//Set up inheritance
MichaelJackson.prototype = Object.create(Dancer.prototype);
MichaelJackson.prototype.constructor = MichaelJackson;

//Stoe prototype step in new variable for easy calling later.
MichaelJackson.prototype.oldStep = Dancer.prototype.step;

MichaelJackson.prototype.step = function() {

  //Call inherited method first when changing method for new class.
  this.oldStep();
  //var borderradius="border-radius";
  //Create new css settings to toggle.
  //var styleSettings = {
    //border:"10px blue",
    //width:"10px",
    //height:"10px"
  //};
  //Should be turning node black and then white the next time it's called.
  if (this.$node.css('border') === "10px solid black") {
    this.$node.css({ "border-radius":"10px", "border":"10px solid white"});
  } else {
    this.$node.removeAttr('border');
  }
};
