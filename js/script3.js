// class Counter {
//   constructor(
//     selector,
//     initialValue,
//     step,
//     incrementBtnName,
//     decrementBtnName
//   ) {
//     this.wrapper = document.querySelector(selector);
//     this.initialValue = initialValue;
//     this.incrementBtnName = incrementBtnName;
//     this.decrementBtnName = decrementBtnName;
//     this.step = step;
//     this.handleCreateCounterMarkup();
//     this.handleAddListeners();
//   }

//   handleCreateCounterMarkup = () => {
//     const markup = `
// 	  <button class="increment">${this.incrementBtnName}</button>
// 	  <span class='value'>${this.initialValue}</span>
// 	  <button class="decrement">${this.decrementBtnName}</button>
// 	  `;
//     this.wrapper.insertAdjacentHTML("beforeend", markup);
//   };

//   handleAddListeners = () => {
//     this.wrapper
//       .querySelector(".increment")
//       .addEventListener("click", this.handleIncrement);
//     this.wrapper
//       .querySelector(".decrement")
//       .addEventListener("click", this.handleDecrement);
//   };
//   handleIncrement = () => {
//     this.initialValue += this.step;
//     this.wrapper.querySelector(".value").textContent = this.initialValue;
//   };

//   handleDecrement = () => {
//     this.initialValue -= this.step;
//     this.wrapper.querySelector(".value").textContent = this.initialValue;
//   };
// }

// const counter1 = new Counter(".counterWrapper", 0, 10, "add 10", "remove 10");
// const counter2 = new Counter(
//   ".counterWrapper2",
//   1000,
//   50,
//   "increment",
//   "decrement"
// );

// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     console.log(this);
//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// Расставь отсутствующие this в методах объекта account.

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.
// const Account = function ({ login, email } = {}) {
//   (this.login = login), (this.email = email);
// };

// Account.prototype.getInfo = function () {
//   console.log(this.login);
//   console.log(this.email);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// function Account({ login, email }) {
// 	this.login = login;
// 	this.email = email;
//  }

//  Account.prototype.renderUserInfo = function () {
// 	return `
// 	<li>
// 	  <div>
// 		  <h3>${this.login}</h3>
// 		  <h3>${this.email}</h3>
// 	  </div>
// 	  </li>
// 	  `;
//  };

//  const usersArray = [
// 	{
// 	  login: 'Mangozedog',
// 	  email: 'mango@dog.woof',
// 	},
// 	{
// 	  login: 'Poly',
// 	  email: 'poly@mail.com',
// 	},
//  ];

//  const listRef = document.querySelector('.users-list');

//  const userlListMarkup = usersArray.reduce((acc, el) => acc + new Account(el).renderUserInfo(), '');

//  listRef.innerHTML = userlListMarkup;

// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   static getSpecs(car) {
//     console.log(
//       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
//     );
//   }

//   constructor({ maxSpeed, price }) {
//     this.maxSpeed = maxSpeed;
//     this._price = price;
//     this.speed = 0;
//     this.distance = 0;
//     this.isOn = false;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }
//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }
//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value >= 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(oldItem) {
    if (this.items.includes(oldItem)) {
      this.items = this.items.filter((item) => item !== oldItem);
    }
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
