// МАСИВИ ТА ОБ'ЄКТИ:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log((a[0]));
console.log((a[1]));
console.log((a[2]));
console.log((a[3]));
console.log((a[4]));
console.log((a[5]));
console.log((a[6]));
console.log((a[7]));
console.log((a[8]));
console.log((a[9]));

//--------------------------------------------------------------------------------------------------------------------//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book11 = {
    title: "Twilight",
    pageCount:  400,
    genre: "Fantasy romance",
}

let book21 = {
    title: "Anatomy",
    pageCount:  300,
    genre: "Science",
}

let book31 = {
    title: "Little book of psychology",
    pageCount:  350,
    genre: "Psychology",
}
//--------------------------------------------------------------------------------------------------------------------//
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.


let book12 = {
    title: "Twilight",
    pageCount:  400,
    genre: "Fantasy romance",
    authors:  [
        {name:  "Stephenie Meyer"},
        {age:  49}
    ],

};

let book22 = {
    title: "Anatomy",
    pageCount:  300,
    genre: "science",
    authors:  [ {name:  "James Clea"},
     {age:  37}
    ],
};

let book32 = {
    title: "Little book of psychology",
    pageCount:  350,
    genre: "psychology",
    authors:  [ {name:  "Emily Rolls"},
     {age:  51}
    ],
};

//--------------------------------------------------------------------------------------------------------------------//
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
//
let array = [{ name: "Mykola", username: "Bazilchyk", password: 1111},
    { name: "Olha", username: "Bakovetska",  password: 2222},
    { name: "Dmytro", username: "Byriy",  password: 3333},
    { name: "Denys", username: "Viytiv",  password: 4444},
    { name: "Viktoria", username: "Havryltsiv",  password: 55555},
    { name: "Oleh", username: "Havrylyk",  password: 6666},
    { name: "Anatoliy", username: "Harhash",  password: 7777},
    { name: "Artur", username: "Hromov",  password: 8888},
    { name: "Roman", username: "Zybrutskiy",  password: 9999},
    { name: "Denys", username: "Kernychnyi",  password: 10101010},
];

console.log(array[0].password);
console.log(array[1].password);
console.log(array[2].password);
console.log(array[3].password);
console.log(array[4].password);
console.log(array[5].password);
console.log(array[6].password);
console.log(array[7].password);
console.log(array[8].password);
console.log(array[9].password);
//--------------------------------------------------------------------------------------------------------------------//





//
//
// ЛОГІЧНІ РОЗГАЛУЖЕННЯ:
//     - Є змінна х, якій ви надаєте довільне числове значення.
// let x = 3;
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3
// if (x !== 0 ){
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }
//
// //----------- (1) ------------//
//  x = 1;
// if (x !== 0 ){
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }
// //----------- (0) ------------//
// x = 0;
// if (x !== 0 ){
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }
//
// //----------- (-3) ------------//
// x = -3;
// if (x !== 0 ){
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }
//--------------------------------------------------------------------------------------------------------------------//


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 2; //// random number for example

if ( time >= 0 && time < 15){
    console.log("Перша чверть");
} else if (time >= 15 && time < 30 ){
    console.log("Друга чверть");
} else if (time >= 30 && time < 45 ){
    console.log("Третя чверть");
} else if (time >= 45 && time < 59){
    console.log("Четверта чверть");
}
//--------------------------------------------------------------------------------------------------------------------//

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).

let day = 1; //// random number for example

if ( day >= 1 && day < 10){
    console.log("Перша декада");
} else if (day >= 10 && day < 20 ){
    console.log("Друга декада");
} else if (day >= 20 && day <= 31 ) {
    console.log("Третя декада");
}

//--------------------------------------------------------------------------------------------------------------------//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt("Enter number of a day:");
switch (dayOfWeek){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: {
        console.log("?????");
    }
}
//--------------------------------------------------------------------------------------------------------------------//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let r = +prompt("Enter number A: ");
let t = +prompt("Enter number B: ");

if (r < t){
    console.log(t);
} else if (r > t){
    console.log(r);
} else if(r===t){
    console.log("Number A = B = " + r);
}
//--------------------------------------------------------------------------------------------------------------------//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподібні, тобто приводиться до false)
//

let x = 1;
x = x || "default";
//  let x = !!0 ? 100 : 200;
console.log(x);

////--------------------------------------------------------------------------------------------------------------------//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
//     його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log("JavaScript Complex - Супер");
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log("Java Complex - Супер");
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log("Python Complex - Супер");
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log("QA Complex - Супер");
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log("FullStack - Супер");
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log("Frontend - Супер");
}

