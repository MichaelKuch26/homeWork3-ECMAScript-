const DancingSeries = {
  model: 'DS',
  power: 200, 
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  isUVLamp: false,

  switchUVLamp: function () {
    console.log('I am the method of DS');
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
  },

  __proto__: VacuumCleaner, // Делаем прототип от родителя
};

