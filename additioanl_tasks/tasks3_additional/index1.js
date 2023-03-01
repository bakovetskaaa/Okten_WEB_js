console.log("Hello!");

//
// 1. Створити пустий масив та :
// let arr = [];
// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// let arr4 = [];
// //     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     arr1[i] = 2*i;
//     // console.log(arr[i]);
// }
// document.write(arr1);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     arr2[i] = 2*i + 1;
//     // console.log(arr[i]);
// }
// document.write(arr2);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     let random_number = Math.floor(Math.random() * 100);
//     arr3[i] = random_number;
// }
// document.write(arr3);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     let random_number1 = Math.floor(Math.random() * 725 + 8);
//     arr4[i] = random_number1;
// }
// document.write(arr4);
// const arr = [...arr1, ...arr2, ...arr3, ...arr4];
// document.write(arr);
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < arr.length; i++) {
// if(i % 3 === 0){
//     console.log(arr[i]);
// }
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < arr.length; i++) {
// if(i % 3 === 0 && arr[i] % 2 ===0){
//     console.log(arr[i]);
// }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//     if(i % 3 === 0 && arr[i] % 2 ===0){
//        newArray[i] = arr[i];
//         console.log(newArray[i]);
//     }
// }
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i-1]);
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let vrr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < vrr.length; i++) {
//     sum = sum + vrr[i] ;
// }
// console.log(sum);
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let sumPro = [];
// for (let i = 0; i < vrr.length; i++) {
//     sumPro[i] = vrr[i] * 5;
// }
// console.log(sumPro);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// let ooo = [1, "fhfipd", true, 2, false, 4, 5];
// let oOO = [];
// for (let i = 0; i < ooo.length; i++) {
//     if(typeof ooo[i] == "number"){
//         oOO[i] = ooo[i];
//     }
// }
// console.log(oOO);
//
//

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
// //
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .

//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

// let array =[];
// for (let i = 0; i < usersWithId.length; i++) {
//         let address = citiesWithId.find((city) => (city.user_id === usersWithId[i].id) );
//         array[i] = {...usersWithId[i], address};
//
// }
// console.log(array);

//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array =[];
// for (let i = 0; i < 10; i++) {
//     array.push(i+1);
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array =[];
// for (let i = 0; i < 10; i++) {
//     array.push(i+1);
// }
// let array1 =[];
// for (let i = 0; i < array.length; i++) {
//     array1.push(array[i]);
// }
// console.log(array1);
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
//
// for (let i = 0; i < array.length; i++) {
//
// }
// console.log(sss);
// console.log(array.join(''));
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.