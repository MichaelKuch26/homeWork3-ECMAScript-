const VacuumCleaner = {
  model: 'VC',
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,

  startCleaning: function () {
    this.counterOfStarts++;
    console.log('I am the method of VC');
    console.log('I am cleaning ... I have been started: ', this.counterOfStarts, 'times.');
  },

  goCharge: function () {
    console.log('I am the method of VC');
    console.log('I am going to charge...');
  }
};

