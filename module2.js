// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.')
//     return
//   }

//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.')
//     return
//   }
//   console.log('Операция снятия средств проведена.')
// }

// withdraw(0, 300) // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300) // Недостаточно средств на счету.
// withdraw(100, 300) // Операция снятия средств проведена.

// Задача 2: проверка пароля (ранний возврат)
// Задание
// Функция checkPassword получает пароль пользователя в параметр password,
//     проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации
// Тесты
// Объявлена функция checkPassword(password)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam'

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!'
//   }
//   return 'Access denied, wrong password!'
// }
// checkPassword('mangohackzor') //возвращает "Access denied, wrong password!"
// checkPassword('polyhax') // возвращает "Access denied, wrong password!"
// checkPassword('jqueryismyjam') //возвращает "Welcome!"

// const functionResult = checkPassword('mangohackzor')
// console.log(functionResult)

// Задача 3: склад товаров 3.0
// Задание
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// Тесты
// Объявлена функция checkStorage(available, ordered)
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(70, 0) возвращает "Your order is empty!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(150, 0) возвращает "Your order is empty!"

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!'
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!'
//   }
//   return 'The order is accepted, our manager will contact you'
// }
// const functionResult = checkStorage(200, 20)
// console.log(functionResult)

// Задание 5
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива
// Тесты
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "apple"
// Объявлена переменная secondElement
// Значение переменной secondElement это строка "plum"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "orange"

// const fruits = ['apple', 'plum', 'pear', 'orange']
// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[fruits.length - 1]

// console.log(firstElement)
// console.log(secondElement)
// console.log(lastElement)

// Задание 6
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// Тесты
// Объявлена переменная fruits
// Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]

// const fruits = ['apple', 'plum', 'pear', 'orange']
// fruits[1] = 'peach'
// fruits[3] = 'banana'

// console.log(fruits)

// Задание 7
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// Тесты
// Объявлена переменная fruitsArrayLength
// Значение переменной fruitsArrayLength это число 4

// const fruits = ['apple', 'peach', 'pear', 'banana']
// const fruitsArrayLength = fruits.length
// console.log(fruitsArrayLength)

// const fruits = ['apple', 'peach', 'pear', 'banana']
// const lastElementIndex = fruits.length - 1
// const lastElement = fruits[lastElementIndex]

// console.log(lastElementIndex)
// console.log(lastElement)

// Задание 10
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат
// разделения строки message по разделителю delimeter - массив строк.

// Тесты
// Объявлена функция splitMessage(message, delimeter)
// Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
// Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
// Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

// function splitMessage(message, delimeter) {
//   let words
//   words = message.split(delimeter)
//   return words
// }
// const functionResult = splitMessage('Mango hurries to the train', ' ')
// console.log(functionResult)

// Задача 11: гравировка украшений
// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// Тесты
// Объявлена функция calculateEngravingPrice(message, pricePerWord)
// Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

// function calculateEngravingPrice(message, pricePerWord) {
//   const messageLength = message.split(' ').length

//   const engravingPrice = messageLength * pricePerWord

//   return engravingPrice
// }
// const functionResult = calculateEngravingPrice('JavaScript is in my blood', 10)
// console.log(functionResult)

// Задание 12
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в
// переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// Тесты
// Объявлена функция makeStringFromArray(array, delimeter)
// Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
// Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")) возвращает "Mango"
// Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

// function makeStringFromArray(array, delimeter) {
//   let string
//   string = array.join(delimeter)
//   return string
// }

// const functionResult = makeStringFromArray(['top', 'picks', 'for', 'you'], '_')
// console.log(functionResult)

// Задание 13
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

//     Например, вместо того чтобы пользователь увидел в адресной строке mysite.com / posts / 1q8fh74tx, можно сделать slug из названия статьи.
// В результате адрес получится более приятным для восприятия: mysite.com / posts / arrays -for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире
// Тесты
// Объявлена функция slugify(title)
// Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
// Вызов slugify("English for developer") возвращает "english-for-developer"
// Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
// Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//   let normalizedTitle = title.toLowerCase()
//   let separateTitle = normalizedTitle.split(' ')
//   let slugTitle = separateTitle.join('-')

//   return slugTitle
// }

// const functionResult = slugify('How to become a JUNIOR developer in TWO WEEKS')
// console.log(functionResult)

// Задание 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana']

// const firstTwoEls = fruits.slice(0, 2)
// const nonExtremeEls = fruits.slice(1, fruits.length - 1)
// const lastThreeEls = fruits.slice(-3)

// console.log(nonExtremeEls)

// Задание 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi']
// const newClients = ['Peach', 'Houston']

// const allClients = oldClients.concat(newClients)
// console.log(allClients)

// Задание 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// Тесты
// Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
// Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
// Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает[]

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray).slice(0, maxLength)

//   return newArray
// }

// const allClients = makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)
// console.log(allClients)

// Задание 17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3
// const end = 7

// for (let i = start; i <= end; i += 1) {
//   console.log(i)
// }

// Задача 18 сумма чисел (цикл for)

//     Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и
// возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// Тесты
// Объявлена функция calculateTotal(number)
// Вызов функции calculateTotal(1) возвращает 1
// Вызов функции calculateTotal(3) возвращает 6
// Вызов функции calculateTotal(7) возвращает 28
// Вызов функции calculateTotal(18) возвращает 171
// Вызов функции calculateTotal(24) возвращает 300

// function calculateTotal(number) {
//   let total = 0

//   for (let i = 0; i <= number; i += 1) {
//     total += i
//   }
//   return total
// }

// const functionResult = calculateTotal(1)
// console.log(functionResult)

// Задание 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// Тесты
// Объявлена переменная fruits
// Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]

// const fruits = ['apple', 'plum', 'pear', 'orange']

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i]
//   console.log(fruit)
// }

// Задача 20: подсчёт суммы покупки
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
//     и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total,
//         которая возвращается, как результат работы функции.

// Тесты
// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116

// function calculateTotalPrice(order) {
//   let total = 0
//   for (i = 0; i < order.length; i += 1) total += order[i]
//   return total
// }

// const result = calculateTotalPrice([12, 85, 37, 4])
// console.log(result)

// Задача 21: поиск самого длинного слова
// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из
// слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force

// function findLongestWord(string) {
//   let array = string.split(' ')
//   let longestWord = array[0]
//   for (const word of array) {
//     if (word.length > longestWord.length) longestWord = word
//   }
//   return longestWord
// }

// const result = findLongestWord('The quick brown fox jumped over the lazy dog')
// console.log(result)

// Задание 22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// Тесты
// Объявлена функция createArrayOfNumbers(min, max)
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]

// function createArrayOfNumbers(min, max) {
//   const numbers = []
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//   return numbers
// }
// const result = createArrayOfNumbers(1, 3)
// console.log(result)

// Задача 23: фильтрация массива чисел
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив,
//     в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

// Тесты
// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]

// function filterArray(numbers, value) {
//   let newArray = []
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number)
//     }
//   }
//   return newArray
// }

// const result = filterArray([12, 24, 8, 41, 76], 38)
// console.log(result)

// Задание 24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// Тесты
// Объявлена функция checkFruit(fruit)
// Вызов checkFruit("plum") возвращает true
// Вызов checkFruit("mandarin") возвращает false
// Вызов checkFruit("pear") возвращает true
// Вызов checkFruit("Pear") возвращает false
// Вызов checkFruit("apple") возвращает true

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange']
//   return fruits.includes(fruit)
// }

// const result = checkFruit('mandarin')
// console.log(result)

// Задача 25: общие элементы
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

//     Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
//     и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Тесты
// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []

// function getCommonElements(array1, array2) {
//   let array3 = []
//   for (const number of array1) {
//     if (array2.includes(number)) array3.push(number)
//   }

//   return array3
// }
// const result = getCommonElements([1, 2, 3], [2, 4])
// console.log(result)

// Задание 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Тесты
// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice([]) возвращает 0

// function calculateTotalPrice(order) {
//   let total = 0

//   for (const itemPrice of order) {
//     total += itemPrice
//   }

//   return total
// }
// const result = calculateTotalPrice([412, 371, 94, 63, 176])
// console.log(result)

// Зачада 27: фильтрация массива чисел 2.0
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Тесты
// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]

// function filterArray(numbers, value) {
//   const filteredNumbers = []

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   }
//   return filteredNumbers
// }
// const result = filterArray([12, 24, 8, 41, 76], 20)
// console.log(result)

// Задание 28 Остаток от числа

// Тесты
// Значение переменной a это число 0
// Значение переменной b это число 1
// Значение переменной c это число 3
// Значение переменной d это число 5
// Значение переменной e это число 2

// const a = 3 % 1
// const b = 4 % 3
// const c = 11 % 4
// const d = 12 % 7
// const e = 8 % 3
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// Задача 29: чётные числа
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// Тесты
// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []

// function getEvenNumbers(start, end) {
//   let evenNumbers = []
//   for (let i = start; i <= end; i += 1) {
//     const number = i

//     if (number % 2 === 0) {
//       evenNumbers.push(number)
//     }
//   }
//   return evenNumbers
// }
// const result = getEvenNumbers(6, 12)
// console.log(result)

// Задание 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// Тесты
// Объявлена переменная start со значением 6
// Объявлена переменная end со значением 27
// Объявлена переменная number без инициализации
// Итоговое значение переменной number равно 10

// const start = 6
// const end = 27
// let number

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i
//     break
//   }
// }

// Задание 31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number
// Тесты
// Объявлена функция findNumber(start, end, divisor)
// Вызов findNumber(2, 6, 5) возвращает 5
// Вызов findNumber(8, 17, 3) возвращает 9
// Вызов findNumber(6, 9, 4) возвращает 8
// Вызов findNumber(16, 35, 7) возвращает 21

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i
//     }
//   }
// }

// const result = findNumber(8, 17, 3)
// console.log(result)

// Задача 32: функция includes()
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) -
//     проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Тесты
// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes

// function includes(array, value) {
//   let result
//   for (let item of array) {
//     if ((result = item === value)) {
//       break
//     }
//   }
//   return result
// }

// const result = includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')
// console.log(result)
