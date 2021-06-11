// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// TASK 2
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// TASK 3
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// function getRoot(arr) {
//   const newArr = []
//   for (let number of arr) {
//     if (number % Math.sqrt(number) === 0) {
//       newArr.push(Math.sqrt(number))
//     }
//   }
//   return newArr
// }

// console.log(getRoot(arr))

// TASK 4

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
// }

// formatMessage("Curabitur ligula sapien", 16); //возвращает 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //возвращает 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //возвращает 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.

// TASK 6

// даны 2 массива
// const nums = [1, "b", 3, "d", 5];
// const strs = ["a", 2, "c", 4, "e"];

// Напишите функцию которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// TASK 8

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// const array = ['Джаз', 'Блюз']

// const newArray = array.push('Рок - н - ролл')
// console.log(array)

// const newArray2 = array.splice(array.length / 2, 1, 'Классика')
// console.log(array)

// const newArray3 = array.shift()
// console.log(newArray3)

// const newArray4 = array.unshift('Рэп', 'Регги')
// console.log(array)

// TASK 9
// привести массив к одному уровню

// const tryThis = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "some str",
//   [777, "word", ["Привет", ["как сюда добраться"]]],
// ];
