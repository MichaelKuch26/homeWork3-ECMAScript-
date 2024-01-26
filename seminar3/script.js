// 1. Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.

// const module1 = {
//   name: '111',
// };
// const module2 = {
//   name: '222',
//   __prototype__: module1,
// };
// const module3 = {
//   name: '333',
//   __prototype__: module2,
// };

// function getPrototypeChain(obj) {
//   let arr = [];
//   while (obj != null) {
//     arr.push(obj);
//     obj = Object.getPrototypeOf(obj);
//   }
//   return arr;
// }
// console.log(getPrototypeChain(module3));

// 2. Напишите конструктор объекта Person, который принимает два аргумента: 
// name (строка) и age (число). Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример: 
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// class Person  {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`Меня зовут ${[this.name]} и мне ${this.age} лет.`)
//   }
// }
// const person1 = new Person("John", 25);
// person1.introduce(); 

// 3. Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным. Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч."

// Пример:
// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.


// class Animal {
//   constructor (name){
//     this.name = name;
//   }
//   speak() {
//     console.log(`${[this.name]} издает звук`);
//   }
// }

// class Dog extends Animal{
//   constructor (name, breed) {
//     super (name);
//     this.breed = breed;
//   }
//   fetch() {
//     console.log(`Собака ${[this.name]} принесла мяч.`);
//   }
// }

// const animal1 = new Animal("Животное");
// animal1.speak();
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.


//5. Создать класс "Калькулятор" с приватными полями "последний результат" и "текущее значение". Класс должен иметь публичные методы "сложить", "вычесть", "умножить" и "разделить", которые будут изменять значение текущего значения в соответствии с выбранной операцией. Также класс должен иметь статическое поле "точность", которое будет задавать количество знаков после запятой при выводе результата.

// приватные поля
// class Calculator {
//   #result; // приватность делается именно так
//   constructor(result) {
//     this.#result = result;
//   }
//   getResult() {
//     return this.#result;
//   }
// }
// const abc = new Calculator(100);
// console.log(abc.getResult());
// console.log();


// статичные поля
class Calculator1 {
  #lastResult = 0;
  #currentValue = 0;
  static #precision = 2;

  sum(value){
    this.#lastResult = this.#currentValue;
    this.#currentValue +=value;
  }
  sub(value){
    this.#lastResult = this.#currentValue;
    this.#currentValue -=value;
  }
  multi(value) {
    this.#lastResult = this.#currentValue;
    this.#currentValue *=value;
  }
  div(value) {
    if (value === 0) {
      throw new Error(`На ноль делить нельзя`);
    } else {
      this.#lastResult = this.#currentValue;
      this.#currentValue /=value;
    }
  }
  getResult() {
    return Number(this.#currentValue.toFixed(Calculator1.#precision));
  }
  getLastResult() {
    return this.#lastResult;
  }
}
const number = new Calculator1();
number.sum(6);
console.log(number);
number.sub(3);
console.log(number);
number.multi(3);
console.log(number);
number.div(0.443);
console.log(number);
console.log(number.getResult());
console.log(number.getLastResult());