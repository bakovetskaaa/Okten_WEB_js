// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
//      for (let i = 0; i < str.length; i++) {
//         document.write(str[i].length);
//             document.write("</br>");
//      }
//--------------------------------------------------------------------------------------------------------------------//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let uppStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
//      for (let i = 0; i < uppStr.length; i++) {
//          document.write(uppStr[i].toUpperCase());
//          document.write("</br>");
//      }
//--------------------------------------------------------------------------------------------------------------------//
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let lowStr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//     for (let i = 0; i < lowStr.length; i++) {
//         document.write(lowStr[i].toLowerCase());
//         document.write("</br>");
//     }
//--------------------------------------------------------------------------------------------------------------------//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// document.write('"');
// document.write(str.slice(1, 13));
// document.write('"');
//--------------------------------------------------------------------------------------------------------------------//
//
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// function stringToArray(str) {
//     return str.split(" ");
// }
// console.log(stringToArray(str));
//--------------------------------------------------------------------------------------------------------------------//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити
// всі об'єкти в масиві на стрінгові.
// let numbers =  [10,8,-7,55,987,-1011,0,1050,0];
// const map1 = numbers.map( numbers => numbers.toString());
// console.log(map1);
//
//--------------------------------------------------------------------------------------------------------------------//
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//         nums.sort(function (a, b) {
//             return  a - b;
//         });
//     }
//     else if (direction === 'descending') {
//         nums.sort(function (a, b) {
//             return b - a;
//         });
//     }
//     console.log(nums);// [1, 2, 3, 4, 5]
// }
// sortNums(nums, 'ascending'); // [3,11,21]
// sortNums(nums, 'descending'); // [21,11,3]
//
//--------------------------------------------------------------------------------------------------------------------//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//--------------------------------------------------------------------------------------------------------------------//
// // -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort(function (a, b) {
//     if (a.monthDuration > b.monthDuration) {
//         return -1;
//     }
//         if (a.monthDuration < b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration === b.monthDuration)
//     return 0;
// });
// console.log(coursesAndDurationArray);
//--------------------------------------------------------------------------------------------------------------------//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// function moreThenFive(){
//     for (let i = 0; i < coursesAndDurationArray.length; i++) {
//         if (coursesAndDurationArray[i].monthDuration > 5){
//             console.log(coursesAndDurationArray[i]);
//         }
//     }
// }
// moreThenFive();
//--------------------------------------------------------------------------------------------------------------------//
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  const map1 = coursesAndDurationArray.map (function (value, index){
//      return{id: index + 1, ...value};
//  }) ;
// console.log(map1);
//--------------------------------------------------------------------------------------------------------------------//
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// let deckOfCards = [
//     {cardSuit: 'spade', status: "6", colour: 'black'},
//     {cardSuit: 'spade', status: "7", colour: 'black'},
//     {cardSuit: 'spade', status: "8", colour: 'black'},
//     {cardSuit: 'spade', status: "9", colour: 'black'},
//     {cardSuit: 'spade', status: "10", colour: 'black'},
//     {cardSuit: 'spade', status: "ace", colour: 'black'},
//     {cardSuit: 'spade', status: "jack", colour: 'black'},
//     {cardSuit: 'spade', status: "queen", colour: 'black'},
//     {cardSuit: 'spade', status: "king", colour: 'black'},
//
//     {cardSuit: 'clubs', status: "6", colour: 'black'},
//     {cardSuit: 'clubs', status: "7", colour: 'black'},
//     {cardSuit: 'clubs', status: "8", colour: 'black'},
//     {cardSuit: 'clubs', status: "9", colour: 'black'},
//     {cardSuit: 'clubs', status: "10", colour: 'black'},
//     {cardSuit: 'clubs', status: "ace", colour: 'black'},
//     {cardSuit: 'clubs', status: "jack", colour: 'black'},
//     {cardSuit: 'clubs', status: "queen", colour: 'black'},
//     {cardSuit: 'clubs', status: "king", colour: 'black'},
//
//     {cardSuit: 'diamond', status: "6", colour: 'red'},
//     {cardSuit: 'diamond', status: "7", colour: 'red'},
//     {cardSuit: 'diamond', status: "8", colour: 'red'},
//     {cardSuit: 'diamond', status: "9", colour: 'red'},
//     {cardSuit: 'diamond', status: "10", colour: 'red'},
//     {cardSuit: 'diamond', status: "ace", colour: 'red'},
//     {cardSuit: 'diamond', status: "jack", colour: 'red'},
//     {cardSuit: 'diamond', status: "queen", colour: 'red'},
//     {cardSuit: 'diamond', status: "king", colour: 'red'},
//
//     {cardSuit: 'heart', status: "6", colour: 'red'},
//     {cardSuit: 'heart', status: "7", colour: 'red'},
//     {cardSuit: 'heart', status: "8", colour: 'red'},
//     {cardSuit: 'heart', status: "9", colour: 'red'},
//     {cardSuit: 'heart', status: "10", colour: 'red'},
//     {cardSuit: 'heart', status: "ace", colour: 'red'},
//     {cardSuit: 'heart', status: "jack", colour: 'red'},
//     {cardSuit: 'heart', status: "queen", colour: 'red'},
//     {cardSuit: 'heart', status: "king", colour: 'red'},
// ];
//--------------------------------------------------------------------------------------------------------------------//
// - знайти піковий туз
// function find(){
//     for (let i = 0; i < deckOfCards.length; i++) {
//          if (deckOfCards[i].cardSuit === 'spade' && deckOfCards[i].status === "ace" ){
//             console.log(deckOfCards[i]);
//         }
//     }
// }
// find();
//--------------------------------------------------------------------------------------------------------------------//
// - всі шістки
// function find(){
//     for (let i = 0; i < deckOfCards.length; i++) {
//          if (deckOfCards[i].status === "6" ){
//             console.log(deckOfCards[i]);
//         }
//     }
// }
// find();
//--------------------------------------------------------------------------------------------------------------------//
// - всі червоні карти
// function find(){
//     for (let i = 0; i < deckOfCards.length; i++) {
//          if (deckOfCards[i].colour === 'red' ){
//             console.log(deckOfCards[i]);
//         }
//     }
// }
// find();
//--------------------------------------------------------------------------------------------------------------------//
// - всі буби
// function find(){
//     for (let i = 0; i < deckOfCards.length; i++) {
//          if (deckOfCards[i].cardSuit === 'diamond'){
//             console.log(deckOfCards[i]);
//         }
//     }
// }
// find();
//--------------------------------------------------------------------------------------------------------------------//
// - всі трефи від 9 та більше
// function find(){
//     for (let i = 0; i < deckOfCards.length; i++) {
//          if (deckOfCards[i].cardSuit === 'clubs'){
//             if(deckOfCards[i].status > 8 || isNaN(deckOfCards[i].status))
//             console.log(deckOfCards[i]);
//         }
//     }
// }
// find();
//--------------------------------------------------------------------------------------------------------------------//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     status: // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// --------------------------------------------------------------------------------------------------------------------//
// =========================
//--------------------------------------------------------------------------------------------------------------------//
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let rrr =  deckOfCards.reduce((acc, obj) =>{
//     const key = obj["cardSuit"];
//     const curGroup = acc[key] ?? [];
//     return {...acc, [key]: [...curGroup, obj]}
//
// },{})
// console.log(rrr);
//--------------------------------------------------------------------------------------------------------------------//
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // --написати пошук всіх об'єктів, в який в modules є sass
// function fff(module) {
//     return coursesArray.filter(course => (course.modules.includes(module)) );
// }
// console.log(fff("sass"));
//--------------------------------------------------------------------------------------------------------------------//
// // --написати пошук всіх об'єктів, в який в modules є docker
// function fff(module) {
//     return coursesArray.filter(course => (course.modules.includes(module)) );
// }
// console.log(fff("docker"));
//--------------------------------------------------------------------------------------------------------------------//