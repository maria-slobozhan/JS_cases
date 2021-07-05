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

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ]

//https://goit.global/js-homework-autocheck/?token=936b5074fef07cf114655da32683ea3f0e289d02e7c7e5cc8a2036657bfa0227&block=op6789290

// const getUsersWithEyeColor = (users, color) => {
//   const filteredUsers = []
//   users.filter(user => {
//     if (user.eyeColor === color) {
//       filteredUsers.push(user.name)
//     }
//   })
//   return filteredUsers
// }

// console.log(getUsersWithEyeColor(array, 'blue')) //["Moore Hensley", "Sharlene Bush", "Carey Barr"]

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color).map(user => `${user.name}`)
// }

// console.log(getUsersWithEyeColor(array, 'blue'))

// const getUsersWithEyeColor = (users, color) => {
//   const result = users.filter(user => user.eyeColor === color)
//   const result2 = result.map(user => user.name)

//   return result
// }

// console.log(getUsersWithEyeColor(array, 'blue'))

// Задание 19
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так,
//     чтобы она возвращала массив пользователей, возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ]

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge)
// }

// console.log(getUsersWithAge(array, 20, 30))

// Задание 20
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив
// пользователей у которых есть друг с именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends.

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ]

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
// }

// console.log(getUsersWithFriend(array, 'Briana Decker'))

// Задание 21 массив без повторений
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ]

// const getFriends = users => {
//   return users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index)
// }

// console.log(getFriends(array))

// Задание 22
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ]

// const getActiveUsers = users => {
//   return users.filter(user => user.isActive)
// }

// console.log(getActiveUsers(array))

// Задание 23
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive)
// }

// console.log(getInactiveUsers(array))

// Задание 24 find
// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ]
// const BOOK_TITLE = 'Сон смешного человека'
// const AUTHOR = 'Роберт Шекли'

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE)
// const bookByAuthor = books.find(book => book.author === AUTHOR)

// console.log(bookWithTitle)

// Задание 25
// Дополни функцию getUserWithEmail(users, email) так,
//     чтобы она возвращала объект пользователя, почта которого(свойство email) совпадает со значением параметра email.

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ]

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// }

// console.log(getUserWithEmail(array, 'shereeanthony@kog.com'))

// Задание 26 EVERY
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18]
// const secondArray = [17, 61, 23]
// const thirdArray = [17, 26, 94, 61, 36, 23, 18]

// const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0)
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0)

// const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0)
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0)

// const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0)
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0)

// console.log(eachElementInFirstIsEven)
// console.log(eachElementInSecondIsOdd)
// console.log(eachElementInThirdIsEven)

// Задание 27 EVERY
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас
// активны(свойство isActive) и возвращала true или false.

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ]

// const isEveryUserActive = users => {
//   return users.every(user => user.isActive)
// }

// console.log(isEveryUserActive(array))

// Задание 28 SOME
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18]
// const secondArray = [17, 61, 23]
// const thirdArray = [17, 26, 94, 61, 36, 23, 18]

// const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0)
// const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0)

// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0)
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0)

// const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0)
// const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0)

// console.log(anyElementInFirstIsOdd)

// console.log(anyElementInSecondIsEven)

// console.log(anyElementInThirdIsOdd)

// Задача 29. Есть ли активные пользователи SOME
// Array с 27 задачи

// const isAnyUserActive = users => {
//   return users.some(user => user.isActive)
// }

// console.log(isAnyUserActive(array))

// Задание 30
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// }
// const playtimes = Object.values(players) // [1270, 468, 710, 244]
// Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, num) => {
//   return acc + num
// }, 0)

//или

// const totalPlayTime = playtimes.reduce((acc, num) => acc + num)

// const averagePlayTime = totalPlayTime / playtimes.length

// console.log(totalPlayTime)

// Задание 31
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён.
// Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ]

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed
// }, 0)

// console.log(totalAveragePlaytimePerGame)

// Задание 32
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму
// всех средств(свойство balance) которые хранят пользователи из массива users.
// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ]

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => acc + user.balance, 0)
// }

// console.log(calculateTotalBalance(array))

// Задание 33
//Array из предыдущей задачи
// Дополни функцию getTotalFriendCount(users) так,
//   чтобы она считала и возвращала общее количество друзей(свойство friends) всех пользователей из массива users.

//Решение 1

// const getTotalFriendCount = users => {
//   return users.flatMap(user => user.friends).length
// }

//Решение 2

// const getTotalFriendCount = users => {
//   return users.reduce((acc, user) => [...acc, ...user.friends], []).length
// }

//Решение 3

// const getTotalFriendCount = users => {
//   return users.reduce((allfriend, user) => {
//     allfriend.push(...user.friends)
//     return allfriend
//   }, []).length
// }

// console.log(getTotalFriendCount(array))

// Задание 34 SORT
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates,
//   а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// const authors = ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский']

// const ascendingReleaseDates = [...releaseDates].sort()

// const alphabeticalAuthors = [...authors].sort()

// Задание 35
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию.Дополни код так,
//   чтобы в переменной ascendingReleaseDates получилась
// отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997]

// const ascendingReleaseDates = [...releaseDates].sort()

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a)

// console.log(ascendingReleaseDates)
// console.log(descendingReleaseDates)

// Задание 36
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке.
// Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
//   а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский', 'Говард Лавкрафт']

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b))

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a))

// console.log(authorsInAlphabetOrder)
// console.log(authorsInReversedOrder)

// Задание 37
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ]

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author),
// )

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author),
// )

// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating)

// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating,
// )

// console.log(sortedByReversedAuthorName)

// Задание 38
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по
// возрастанию их баланса(свойство balance).

const array = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
]

// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance)
// }

// console.log(sortByAscendingBalance(array))

// Задание 39

// Array тот же (с 38 задания)
// Дополни функцию sortByDescendingFriendCount(users) так,
//   чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей(свойство friends).
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length)
// }

// console.log(sortByDescendingFriendCount(array))

// Задание 40
// Array тот же (с 38 задания)
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name))
// }

// console.log(sortByName(array))

// Задание 41
// Дополни код так, чтобы в переменной names получился
// массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ]
// const MIN_BOOK_RATING = 8

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map(book => book.author)

// console.log(names)

// Задание 42
// Array с 38
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён
// пользователей отсортированный по возрастанию количества их друзей(свойство friends).

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
// }

// console.log(getNamesSortedByFriendCount(array))

// Задание 43
// Array с 38
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей
//   (свойство friends) отсортированный по алфавиту.

// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b))
// }
// console.log(getSortedFriends(array))

// Задание 44
// Array с 38
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала
// общий баланс пользователей(свойство balance), пол которых(свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => {
//       return (acc += user.balance)
//     }, 0)
// }

// console.log(getTotalBalanceByGender(array, 'male'))
