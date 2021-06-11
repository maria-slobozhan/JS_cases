// Задание 1 Creating an object
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// }

// Задание 2 Object in object
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// }

// Задание 3 console.log to Object property
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// Задание 4
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// }

// const ownerName = apartment.owner.name
// const ownerPhone = apartment.owner.phone
// const ownerEmail = apartment.owner.email
// const numberOfTags = apartment.tags.length
// const firstTag = apartment.tags[0]
// const lastTag = apartment.tags[apartment.tags.length - 1]

// Задание 5
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment
// используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// }

// const aptRating = apartment['rating']
// const aptDescr = apartment['descr']
// const aptPrice = apartment['price']
// const aptTags = apartment['tags']

// Задание 6
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// }

// apartment.price = 5000
// apartment.rating = 4.7
// apartment.owner.name = 'Henry Sibola'
// apartment.tags.push('trusted')

// Задание 7
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// }

// apartment.area = 60
// apartment.rooms = 3

// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// }

// console.log(apartment.location)

// Задание 8
// Дополни код объявления объекта так, чтобы у него были свойства name, price,
//     image и tags со значениями из переменных с аналогичными именами.Обязательно используй синтаксис коротких свойств.
// onst name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
// name,
//   price,
//   image,
//   tags,

// };

// Задание 9
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password,
//     имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = 'email'
// const passwordInputName = 'password'

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// }
// const keys = []
// const values = []
// // Change code below this line
// for (const key in apartment) {
//   console.log(key)
// }

// for (const values in apartment) {
//   console.log(apartment[values])
// }

// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   rating: 8.38,
// }

// for (const key in book) {
//   // Ключ
//   console.log(key)
//   // Значение свойства с таким ключом
//   console.log(book[key])
// }

// Задание 10 for in
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// }
// const keys = []
// const values = []
// for (const key in apartment) {

//   keys.push(key)
//   values.push(apartment[key])
// }

// Задание 11 hasOwnProperty(key) ???????????????????????????????????
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const keys = []
// const values = []
// const advert = {
//   service: 'apt',
// }
// const apartment = Object.create(advert)
// apartment.descr = 'Spacious apartment in the city center'
// apartment.rating = 4
// apartment.price = 2153

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key)
//     values.push(apartment[key])
//   }
// }

// Задача 12. Подсчёт свойств
// Задание
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.
// Тесты
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps{ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

// function countProps(object) {
//   let propCount = 0
//   const keys = []
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       keys.push(key)
//       propCount = keys.length
//     }
//   }
//   return propCount
// }
// console.log(countProps({ name: 'Mango', age: 2 }))

// Задание 13
// Перебери объект apartment используя метод Object.keys() и цикл for...of.
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ['descr', 'rating', 'price'].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ['Spacious apartment in the city center', 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// }
// const values = []
// // Change code below this line
// const keys = Object.keys(apartment)

// for (const key of keys) {
//   console.log(keys)
//   values.push(apartment[key])
// }

// console.log(values)

// Задача 14. Подсчёт свойств 2.0
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// Тесты
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

// function countProps(object) {
//   let propCount = 0

//   const keys = Object.keys(object)

//   for (const key of keys) {
//     propCount += 1
//   }
//   return propCount
// }

// Задание 15 Object.values
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в
// переменную values массив всех значений его свойств.Используй методы Object.keys() и Object.values().

// Тесты
// Значение переменной keys это массив ["descr", "rating", "price"]
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// }
// const keys = Object.keys(apartment)
// const values = Object.values(apartment)

// console.log(values)

// Задача 16. Расходы на зарплату
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// Тесты
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400

// function countTotalSalary(salaries) {
//   let totalSalary = 0
//   const values = Object.values(salaries)

//   for (const value of values) {
//     totalSalary += value
//   }
//   return totalSalary
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// Задание 17
// Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// Тесты
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ]

// const hexColors = []
// const rgbColors = []

// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }

// console.log('rgbColors :>> ', rgbColors)

// Задача 18. Поиск объекта по значению свойства ?????????????????
// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.

// Тесты
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price
//     }
//   }
//   return null
//   // перенесла нул на строку ниже, хотя в вс-коде работало. почему бот не принимает?
// }

// console.log(getProductPrice('Engine'))

// Задача 19. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function getAllPropValues(propName) {
//   const values = []
//   for (const product of products) {
//     const keys = Object.keys(product)
//     for (key of keys) {
//       if (key === propName) {
//         values.push(product[propName])
//       }
//     }
//   }

//   return values
// }

// console.log(getAllPropValues('category'))
