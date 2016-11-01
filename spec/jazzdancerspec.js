describe('JazzDancer', function() {
  //debugger
  var jazzDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
     jazzDancer = new JazzDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jazzDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(jazzDancer.$node, 'toggle');
    jazzDancer.step();
    expect(jazzDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(jazzDancer, 'step');
      expect(jazzDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(jazzDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jazzDancer.step.callCount).to.be.equal(2);
    });
  });
});
