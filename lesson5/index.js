console.log("Hello!");
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//  let rectangle = (a, b)  => {
//      return a * b;
//  }
// console.log(rectangle(2, 4));
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//  let circle = (r) =>{
//         return 3.14 * r * r;
// }
// console.log(circle(4));
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуc r
//  let topper = (h, r) => {
//     return (2 * 3.14 * r * (r + h))
// }
// console.log(topper(1, 2));
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка приймає масив та виводить кожен його елемент
//  let array = [1, 2, 3, 4];
//  arrayEnter = (a) => {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
// console.log(arrayEnter(array));
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//  let paragraph  = (text) =>{
//     document.write(`${text}`);
// }
// paragraph("sun is shining!");
// paragraph("Lorem ipsum dolor sit amet.");
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  let threeUlLi = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<ul>`);
// }
// threeUlLi("Hello!");
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//  let threeUlLi = (text, n) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`<ul>`);
// }
// threeUlLi("It`s Ok!", 5);
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [10, 20, 30, true, "olia"];
// let primitive = () => {
//     document.write(`<ul>`);
//     for(let i = 0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// primitive(array);
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка приймає масив об'єктів з наступними полями id,
// name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//  let arrays = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div>id: ${array[i].id}; name: ${array[i].name}; age: ${array[i].age};</div>`);
//     }
// }
// (arrays([
//     {id: 111, name: "Olia", age: 19},
//     {id: 222, name: "Olha", age: 20},
//     {id: 333, name: "Olichka", age: 10},
// ]));
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію яка повертає найменше число з масиву
// let mine = [1, 2, 4, -5, 0];
//  let mins = (array) => {
//     //console.log(Math.min(...mine));
//     let min = array[0];
//     for(let i = 0; i < array.length; i++){
//         if((array[i]) < min){
//             min = array[i];
//         }
//     }
//     return min;
// }
// console.log(mins(mine));
//--------------------------------------------------------------------------------------------------------------------//
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let it = [1, 2, 10];
//  let sum = (array) => {
//      let basket = 0;
//     for (let i = 0; i < array.length; i++){
//         basket = basket + array[i];
//     }
//     return basket;
// }
// console.log(sum(it));
//--------------------------------------------------------------------------------------------------------------------//

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заначення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let array = [11, 22, 33, 44];
//  let swap = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }
// swap(array, 0, 1);
// console.log(array);
//--------------------------------------------------------------------------------------------------------------------//
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//      // let rate = currencyValues.find(foo => foo.currency === exchangeCurrency);
//     // return sumUAH / rate.value;
//     for (let i = 0; i <currencyValues.length ; i++) {
//         if (exchangeCurrency === currencyValues[i].currency) {
//             return sumUAH / currencyValues[i].value;
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));

let  exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i <currencyValues.length ; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));