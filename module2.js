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
