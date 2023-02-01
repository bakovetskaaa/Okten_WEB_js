// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com','ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);

let owu = 'owu';
console.log(owu);

let com = 'com';
console.log(com);

let ua = 'ua';
console.log(ua);

let number1 = 1;
console.log(number1);

let number2 = 10;
console.log(number2);

let number3 = -999;
console.log(number3);

let number4 = 123;
console.log(number4);

let number5 = 3.14;
console.log(number5);

let number6 = 2.7;
console.log(number6);

let number7 = 16;
console.log(number7);

let t = true;
console.log(t);

let f = false;
console.log(f);



//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Olha';
let middleName = "Volodymyrivna";
let lastName = 'Bakovetska';

let person = (firstName + " " + middleName + " " + lastName);
console.log(person);
let person1 = ` ${firstName} ${middleName} ${lastName}`;
console.log(person1);


//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова, які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name1 = prompt("What`s your first name?");
let name2 = prompt("What`s your middle name?");
let age = prompt("How old are you?");

console.log("My name is" + " " + name1 + " " + name2 + ". I`m" + " " + age + " years old)" );

