const Blues = {
  model: 'Blu',
  power: 200, 
  batterySize: 2100,
  workTime: 45,
};

const Musuk = {
  model: 'Mus',
  power: 200, 
  batterySize: 2100,
  workTime: 45,

  startWipe: function () {
    console.log('afsdfsdf');
  }

  // __proto__: VacuumCleaner,
};

Object.setPrototypeOf(Blues, Musuk);

