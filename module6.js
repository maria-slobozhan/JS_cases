// Задание 1 forEach
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
// и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0

//   orderedItems.forEach(function (item) {
//     totalPrice += item
//   })

//   return totalPrice
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

// Задача 2. Фильтрация массива чисел forEach
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = []

//   numbers.forEach(function (number, index, numbers) {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   })

//   return filteredNumbers
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// Задача 3. Общие элементы forEach
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray,
//     и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = []

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element)
//     }
//   })

//   return commonElements
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// Задание 4. Стрелочная функция

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem
// }

// Задание 5. Неявный возврат в стрелочной функции

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Задание 6. Стрелочные функции

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0

//   orderedItems.forEach(item => (totalPrice += item))

//   return totalPrice
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))

// Задача 7. Фильтрация массива чисел 2.0 со стрелками
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// const filterArray = (numbers, value) => {
//   const filteredNumbers = []

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   })

//   return filteredNumbers
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20))

// Задача 8. Общие элементы 2.0 о стрелками
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = []

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element)
//     }
//   })

//   return commonElements
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// Задание 9
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//     значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала,
//     наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   let newArray = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value)
//     } else {
//       newArray.push(numbers[i])
//     }
//   }
//   return newArray
// }

// console.log(changeEven([17, 24, 68, 31, 42], 100))

// Задание 10 MAP
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер']
// const planetsLengths = planets.map(planet => planet.length)
// console.log(planetsLengths)

// Задание 11 MAP
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ]

// const titles = books.map(book => book.title)

// console.log(titles)

// Задание 12 FLATMAP
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ]

// const genres = books.flatMap(book => book.genres)
// console.log(genres)

// Задача 13 -14. Имена пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// const array = [
//   //передается как параметр user ф-ии
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ]

// const getUserNames = users => users.map(user => user.name)

// const getUserEmails = users => users.map(user => user.email)

// console.log(getUserNames)

// console.log(getUserEmails)

// Задание 15 FILTER
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
//     а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73]

// const evenNumbers = numbers.filter(number => number % 2 === 0)
// const oddNumbers = numbers.filter(number => number % 2 !== 0)

// console.log(evenNumbers)
// console.log(oddNumbers)

// Задача 16 Фильтрация уникальных элементов

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres)
// из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ]

// const allGenres = books.flatMap(book => book.genres)
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index)
// console.log(uniqueGenres)

// Задача 17  Filter
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ]

// const MIN_RATING = 8
// const AUTHOR = 'Бернард Корнуэлл'

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING)
// const booksByAuthor = books.filter(book => book.author === AUTHOR)

// console.log(topRatedBooks)
// console.log(booksByAuthor)
