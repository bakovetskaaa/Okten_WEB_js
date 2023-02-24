// console.log(("Hello!"));

// --створити масив з:
//     - з 5 числових значень
// let arr = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
// let arr1 = ["1", "2", "3", "4", "5"];
// - з 5 значень стрічкового, числового та булевого типу
// let arr2 = [1, "hi", true, 2, "qq"];
// - та вивести його в консоль
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.dir([]);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = [];
// arr[0] = 2;
// console.log((arr[0]));
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i = 0;
// while ( i < arr.length){
//     document.write(`${arr[i]} `);
//     i++;
// }
//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]} `);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while(i < arr.length){
//     document.write(`${arr[i]} `);
//     i += 2;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < arr.length; i+=2) {
//     document.write(`${arr[i]} `);
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while(i < arr.length){
//     if(arr[i] % 2 === 0){
//         document.write(`${arr[i]} `);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         document.write(`${arr[i]} `);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 3 === 0){
//         arr[i] = "okten";
//         document.write(`${arr[i]} `);
//     }
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = [arr.length-1]; i >= 0 ; i--) {
//     document.write(`${arr[i]} `)
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (із заду на перед)
// 9.1 --створити масив з:
//     - з 5 числових значень
// let arr = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
// let arr1 = ["1", "2", "3", "4", "5"];
// - з 5 значень стрічкового, числового та булевого типу
// let arr2 = [1, "hi", true, 2, "qq"];
// - та вивести його в консоль
// for (let i = [arr.length-1]; i >= 0 ; i--){
//     console.log(arr[i]);
// }
// for (let i = [arr1.length-1]; i >= 0 ; i--){
//     console.log(arr1[i]);
// }
// for (let i = [arr2.length-1]; i >= 0 ; i--){
//     console.log(arr2[i]);
// }
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// for (let i = [arr.length-1]; i >= 0 ; i--){
//     console.log(arr[i]);
// }
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i = arr.length - 1;
// while ( i >= 0){
//     document.write(`${arr[i]} `);
//     i--;
// }
//     2. перебрати його циклом for
// for (let i = arr.length - 1; i >= 0; i--) {
//     document.write(`${arr[i]} `);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = arr.length -1 ;
// while(i >= 0){
//     document.write(`${arr[i]} `);
//     i -= 2;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = arr.length - 1; i >= 1; i-=2) {
//     document.write(`${arr[i]} `);
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = arr.length - 1;
// while(i >= 0 ){
//     if(arr[i] % 2 === 0){
//         document.write(`${arr[i]} `);
//     }
//     i--;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = arr.length-1; i >= 0; i--) {
//     if(arr[i] % 2 === 0){
//         document.write(`${arr[i]} `);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] % 3 === 0) {
//         arr[i] = "okten";
//         document.write(`${arr[i]} `);
//     }
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [1, "q", true, 2, "w", false, 3, "e", true, 4];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
// let arr = [1, "q", true, 2, "w", false, 3, "e", true, 4];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "boolean"){
//         console.log(arr[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи
// let arr = [1, "q", true, 2, "w", false, 3, "e", true, 4];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "number"){
//         console.log(arr[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
// вивести тільки рядкові елементи
// let arr = [1, "q", true, 2, "w", false, 3, "e", true, 4];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "string"){
//         console.log(arr[i]);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// arr[6] = 7;
// arr[7] = 8;
// arr[8] = 9;
// arr[9] = 10;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
// for (let i = 1; i < 11; i++) {
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
// for (let i = 1; i < 101; i++) {
//     console.log(i);
//     document.write(`${i} `);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log
// та document.write
// for (let i = 1; i < 101; i += 2) {
//     console.log(i);
//     document.write(`${i} `);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log +
// document.write
// for (let i = 0; i < 101; i +=2) {
//     console.log(i);
//     document.write(`${i} `);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log +
// document.write
// for (let i = 1; i < 101; i +=2) {
//     console.log(i);
//     document.write(`${i} `);
// }
//
//

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let array = [
//     {name: "Twilight", numberOfLists: 500, author: ["Stephenie Mayer"], genre: ["romance"]},
//     {name: "Gray's Anatomy", numberOfLists: 900, author: ["Henry Gray"], genre: ["science"]},
//     {name: "Eclipse", numberOfLists: 700, author: ["Stephenie Mayer", "Henry Gray"],  genre: ["nature", "romance"]},
// ]
// -знайти найбільшу книжку.
// let arrayNumberOfLists = array.map (elements => {
//     return elements.numberOfLists;
// });
//
// let maxNumber = Math.max(...arrayNumberOfLists);
// document.write(maxNumber);

// - знайти книжку/ки з найбільшою кількістю жанрів
// let max = array[0].genre.length;
// for (let i = 0; i < array.length; i++) {
//     if (max < array[i].genre.length){
//         max = array[i].genre.length;
//     }
// }
// console.log(array[max]);
// - знайти книжку/ки з найдовшою назвою
// let arrayName = array.map (elements => {
//     return elements.name;
// });
// let  lgth = 0;
// let longestString;
// for (let i = 0; i < arrayName.length; i++) {
//     if (arrayName[i].length > lgth) {
//          lgth = arrayName[i].length;
//         longestString = arrayName[i];
//     }
// }
// document.write(`${longestString} `);

// - знайти книжку/ки які писали 2 автори
// for (let i = 0; i < array.length; i++) {
//     if(array[i].author.length === 2){
//         console.log(array[i]);
//     }
// }
//
// // - знайти книжку/ки які писав 1 автор
// for (let i = 0; i < array.length; i++) {
//     if(array[i].author.length === 1){
//         console.log(array[i]);
//     }
// }

