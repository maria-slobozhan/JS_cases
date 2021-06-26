// function Person(obj) {
//   //   this = {}
//   const { firstName, lastName, age, gender, interests } = obj
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.gender = gender
//   this.interests = interests
//   // return this
// }

// // console.log(`Person`, Person.prototype);

// Person.prototype.greeting = function () {
//   console.log(`Привет я ${this.firstName} ${this.lastName}`)
// }

// Person.prototype.bio = function () {
//   console.log(`Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`)
// }

// const user = new Person({
//   firstName: 'Bob',
//   lastName: 'Dou',
//   age: 21,
//   gender: 'male',
//   interests: 'football',
// })
// // console.log(Person.prototype)

// const user2 = new Person({
//   firstName: 'Jack',
//   lastName: 'Dou',
//   age: 35,
//   gender: 'male',
//   interests: 'basketball',
// })

// function Teacher(obj) {
//   const { subject } = obj
//   // this = {}
//   Person.call(this, obj)
//   this.subject = subject
// }

// Teacher.prototype = Object.create(Person.prototype)
// Teacher.prototype.constructor = Teacher

// Teacher.prototype.greeting = function () {
//   console.log('I am teacher method')
// }

// const teacher1 = new Teacher({
//   firstName: 'Bob',
//   lastName: 'Dou',
//   age: 45,
//   gender: 'male',
//   interests: 'football',
//   subject: 'Math',
// })

// console.log(`teacher1`, teacher1)
// teacher1.greeting()

// function Student(obj) {
//   const { firstName, lastName, age, gender, interests } = obj
//   Person.call(this, { firstName, lastName, age, gender, interests })
// }

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

// Student.prototype.greeting = function () {
//   console.log('I am student method')
// }

// const student1 = new Student({
//   firstName: 'Masha',
//   lastName: 'Smith',
//   age: 25,
//   gender: 'female',
//   interests: 'swimming',
// })

// console.log('student1 :>> ', student1)

// Задача 1 Прототипы база

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// }

// const child = Object.create(parent)

// child.name = 'Jason'
// child.age = 27

// Задание 2
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// }

// const parent = Object.create(ancestor)
// parent.name = 'Stacey'
// parent.surname = 'Moore'
// parent.age = 54

// const child = Object.create(parent)
// child.name = 'Jason'
// child.age = 27

// Задание 3
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price,
//     значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// function Car(brand, model, price) {
//   this.brand = brand
//   this.model = model
//   this.price = price
// }

// const car1 = new Car('Audi', 'Q3', 36000)
// console.log('car1 :>> ', car1)

// Задание 4 Объект в параметрах функции-конструктора
// Выполни рефакторинг функции - конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price.
// Деструктуризируй объект в сигнатуре(подписи) функции.

// function Car({ brand, model, price }) {
//   this.brand = brand
//   this.model = model
//   this.price = price
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log('car1 :>> ', car1)

// Задание 5 Методы в прототипе
// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// function Car({ brand, model, price }) {
//   this.brand = brand
//   this.model = model
//   this.price = price
// }

// Car.prototype.getPrice = function () {
//   return this.price
// }

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log(car1.getPrice())

// car1.changePrice(50000)
// console.log(car1.getPrice())

// Задача 6. Хранилище
// Задание
// С помощью Function Declaration напиши функцию - конструктор Storage, которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.

// function Storage(items) {
//   this.items = items
// }

// Storage.prototype.getItems = function () {
//   return this.items
// }

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem)
// }

// Storage.prototype.removeItem = function (item) {
//   let index = this.items.indexOf(item)

//   if (!this.items.includes(item)) {
//     return
//   } else {
//     this.items.splice(index, 1)
//   }
//   return this.items
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор'])
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид')
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер')
// console.log(storage.getItems()) // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Задание 7. Конструктор строк
// С помощью Function Declaration напиши функцию - конструктор StringBuilder,
//     которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.

// function StringBuilder(baseValue) {
//   this.value = baseValue
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value
// }

// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str
// }

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value
// }

// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.')
// console.log(builder.getValue()) // '.'
// builder.padStart('^')
// console.log(builder.getValue()) // '^.'
// builder.padEnd('^')
// console.log(builder.getValue()) // '^.^'
// builder.padBoth('=')
// console.log(builder.getValue()) // '=^.^='

// Задание 9 Классы. Начало
// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand
//     this.model = model
//     this.price = price
//   }
// }

// Задание 10
// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand
//     this.model = model
//     this.price = price
//   }

//   getPrice() {
//     return this.price
//   }

//   changePrice(newPrice) {
//     this.price = newPrice
//   }
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log(car1.getPrice())

// car1.changePrice(50000)
// console.log(car1.getPrice())

// Задание 11
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса,
//     для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// class Car {
//   #brand

//   constructor({ brand, model, price }) {
//     this.#brand = brand
//     this.model = model
//     this.price = price
//   }

//   getBrand() {
//     return this.#brand
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand
//   }
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log('car1 :>> ', car1)
// console.log(car1.getBrand())

// car1.changeBrand('Honda')
// console.log(car1.getBrand())

// Задача 12. Хранилище 2.0
// Задание
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

// class Storage {
//   #items
//   constructor(items) {
//     this.#items = items
//   }

//   getItems() {
//     return this.#items
//   }

//   addItem(newItem) {
//     this.#items.push(newItem)
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item)
//     this.#items.splice(itemIndex, 1)
//   }
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор'])
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид')
// console.log(storage.getItems()) // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер')
// console.log(storage.getItems()) // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Задача 13. Конструктор строк 2.0
// Задание
// Выполни рефакторинг заменив функцию - конструктор StringBuilder на класс с методами.
// Сделай так, чтобы свойство value было приватным.

// class StringBuilder {
//   #value
//   constructor(baseValue) {
//     this.#value = baseValue
//   }

//   getValue() {
//     return this.#value
//   }

//   padEnd(str) {
//     this.#value += str
//   }

//   padStart(str) {
//     this.#value = str + this.#value
//   }

//   padBoth(str) {
//     this.padStart(str)
//     this.padEnd(str)
//   }
// }
// const builder = new StringBuilder('.')
// console.log(builder.getValue()) // '.'
// builder.padStart('^')
// console.log(builder.getValue()) // '^.'
// builder.padEnd('^')
// console.log(builder.getValue()) // '^.^'
// builder.padBoth('=')
// console.log(builder.getValue()) // '=^.^='

// Задание 14
// Выполни рефакторинг класса Car.Сделай свойства model и price приватными, также как #brand.
// Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand,
//     model и price для взаимодействия с приватными свойствами.

// class Car {
//   #model
//   #price
//   #brand

//   constructor({ brand, model, price }) {
//     this.#brand = brand
//     this.#model = model
//     this.#price = price
//   }

//   get brand() {
//     return this.#brand
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand
//   }

//   get model() {
//     return this.#model
//   }

//   set model(newModel) {
//     this.#model = newModel
//   }

//   get price() {
//     return this.#price
//   }

//   set price(newPrice) {
//     this.#price = newPrice
//   }
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log('car1 :>> ', car1)
// console.log(car1.brand)

// car1.model = 'Q5'
// console.log(car1.model)

// Задание 15. Статическое свойство
// Выполни рефакторинг класса Car.
// Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice.Если оно больше чем MAX_PRICE, сеттер ничего не делает,
//     а если меньше или равно, то перезаписывает цену автомобиля.

// class Car {
//   static MAX_PRICE = 50000
//   #price

//   constructor({ price }) {
//     this.#price = price
//   }

//   get price() {
//     return this.#price
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return
//     }
//     this.#price = newPrice
//   }
// }

// const audi = new Car({ price: 35000 })
// console.log(audi.price) // 35000

// audi.price = 49000
// console.log(audi.price) // 49000

// audi.price = 51000
// console.log(audi.price) // 49000

// Задание 16
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля.
// Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.

// class Car {
//   static #MAX_PRICE = 50000
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.'
//     }
//     return 'Всё хорошо, цена в порядке.'
//   }
//   constructor({ price }) {
//     this.price = price
//   }
// }

// const audi = new Car({ price: 36000 })
// const bmw = new Car({ price: 64000 })

// console.log(Car.checkPrice(audi.price)) // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)) // Внимание! Цена превышает допустимую.

// Задание 17 Наследование extends
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel(уровень доступа),
//     значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.

// class User {
//   email

//   constructor(email) {
//     this.email = email
//   }

//   get email() {
//     return this.email
//   }

//   set email(newEmail) {
//     this.email = newEmail
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   }
// }

// Задание 18 super()
// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel.
// Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// class User {
//   email

//   constructor(email) {
//     this.email = email
//   }

//   get email() {
//     return this.email
//   }

//   set email(newEmail) {
//     this.email = newEmail
//   }
// }

// class Admin extends User {
//   accessLevel
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   }

//   constructor({ email, accessLevel }) {
//     super(email)
//     this.accessLevel = accessLevel
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// })

// console.log(mango.email) // mango@mail.com
// console.log(mango.accessLevel) // superuser

// Задание 19
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.
// Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список.
// Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.
// Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

// class User {
//   email

//   constructor(email) {
//     this.email = email
//   }

//   get email() {
//     return this.email
//   }

//   set email(newEmail) {
//     this.email = newEmail
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   }

//   accessLevel
//   blacklistedEmails

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email)
//     this.accessLevel = accessLevel
//     this.blacklistedEmails = blacklistedEmails
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email)
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// })

// console.log(mango.email) // mango@mail.com
// console.log(mango.accessLevel) // superuser
// mango.blacklist('poly@mail.com')
// console.log(mango.blacklistedEmails) // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')) //  false
// console.log(mango.isBlacklisted('poly@mail.com')) // true
