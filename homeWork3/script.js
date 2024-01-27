// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

// 1
class Employee {
  constructor(name) {
    this.name = name;
    }
    displayInfo() {
      console.log(`Name: ${this.name}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

class Manager extends Employee {
  constructor (name, department) {
    super (name);
    this.department = department;
  }
  displayInfo() {
    console.log(`Name: ${this.name} \nDepartment: ${this.department}`);
  }
}

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();


// 2
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

// 2

class Order {
  constructor (orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
    this.totalPrice = 0;
  }
  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice(){
    for (const value in this.products) {
      this.totalPrice += this.products[value].price;
    }
    return this.totalPrice;
  }
}

const order = new Order(12345);
console.log(order);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    }
}

const product1 = new Product("Phone", 500);
order.addProduct(product1);
console.log(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(product2);

console.log(order.getTotalPrice());

// 3

// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

// Пример работы кода:

// const product1 = new Product('Тетрадь', 50, 200);
// console.log(product1.name); // "Тетрадь"
// console.log(product1.price); // 50
// console.log(product1.quantity); // 200
// console.log(product1.getCost()); // 10000

// const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high" 

// 3

class Product {
  #name;
  #price;
  #quantity;
  static #maxQuantity = 5000;
  constructor (name, price, quantity) {
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
    if (Product.#maxQuantity <= this.#quantity) {
      throw new Error("Quantity is too high");
    }
  }
  getName() {
    return this.#name;
  }
  getPrice() {
    return this.#price;
  }
  getQuantity() {
    return this.#quantity;
  }

  setPrice(value) {
    return this.#price = value;
  }
  setQuantity(value) {
    return this.#quantity = value;
  }
  getCost() {
    return this.#price * this.#quantity;
  }
}

const product1 = new Product('Тетрадь', 50, 200);
console.log(product1);

console.log(product1.getName()); // "Тетрадь"
console.log(product1.getPrice()); // 50
console.log(product1.getQuantity()); // 200
console.log(product1.getCost()); // 10000

const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"

// 4

class User {
  #name;
  #age;
  #mail;
  static #maxAge = 120; 
  constructor (name, age, mail) {
    this.#name = name;
    this.#age = age;
    this.#mail = mail;
    if (User.#maxAge <= age) {
      throw new Error("Error: Age is too high");
    }
  }
  
  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  getMail() {
    return this.#mail;
  }
  setName(value) {
    return this.#name = value;
  }
  setAge(value) {
    return this.#age = value;
  }
  setMail(value) {
    return this.#mail = value;
  }
  getMaxAge() {
    return User.#maxAge;
    }
}

const user1 = new User('John', 30);

console.log(user1.getName()); // "John"
user1.setName('Mike');
console.log(user1.getName()); // "Mike"
console.log(user1.getMaxAge()); // 120

const user2 = new User('Jane', 150); // Error: Age is too high