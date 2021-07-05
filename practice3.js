// import usersArr from './data.js'

// console.log(usersArr)
// Task1
// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// const getUserNames = users => {
//   return users.map(user => user.name)
// }
// console.log(getUserNames(usersArr))

// Task 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color)
// }

// console.log(getUsersWithEyeColor(usersArr, 'blue'))

// Task 5

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// }

// console.log(getUserWithEmail(usersArr, 'shereeanthony@kog.com'))

// Task 6

// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge)
// }

// console.log(getUsersWithAge(usersArr, 30, 40))
