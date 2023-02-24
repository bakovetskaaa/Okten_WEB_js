console.log("Hello!");

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let array = [];
//
// array.push(user1 = new User(1 , "Olia", "Esen", "123@gmail", "87652"));
// array.push(user2 = new User(2 , "Olha", "Ophach", "arg@gmail", "12344"));
// array.push(user3 = new User(3 , "Valia", "Plon", "ehtn@gmail", "66532"));
// array.push(user4 = new User(4 , "Semen", "Lymmyk", "bnbn@gmail", "98544"));
// array.push(user5 = new User( 10, "Stepan", "Polotno", "tyuiolkjh@gmail", "12584"));
// array.push(user6 = new User(6 , "Dmytro", "Lonko", "cvb@gmail", "37459"));
// array.push(user7 = new User(7 , "Oleh", "Green", "78ikjhg@gmail", "15043"));
// array.push(user8 = new User(8 , "Ilon", "Freenovych", "qaszxdrtgh@gmail", "55565"));
// array.push(user9 = new User(9 , "Daryna", "Sas", "mnbv@gmail", "77743"));
// array.push(user10 = new User(5, "Mykola", "Clon", "lkjhgf@gmail", "22268"));

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let ggg = array.filter(double  => double.id % 2 === 0);
// console.log(ggg);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// array.sort(function (a, b) {
//     if (a.id > b.id) {
//         return 1;
//     }
//     if (a.id < b.id) {
//         return -1;
//     }
//     return 0;
// });
// console.log(array);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let array = [];
//
// array.push(client1 = new Client(1, "Polina", "Andeeva", "eee@gmail.com", "23456", ["apple", "ace-cream"]));
// array.push(client2 = new Client(2 , "Olha", "Ophach", "arg@gmail", "12344", ["lemon", "peach"]));
// array.push(client3 = new Client(3 , "Valia", "Plon", "ehtn@gmail", "66532", ["fren"]));
// array.push(client4 = new Client(4 , "Semen", "Lymmyk", "bnbn@gmail", "98544", ["rice", "tree", "poorer"]));
// array.push(client5 = new Client( 10, "Stepan", "Polotno", "tyuiolkjh@gmail", "12584", ["lleee", "looo"]));
// array.push(client6 = new Client(6 , "Dmytro", "Lonko", "cvb@gmail", "37459", ["url"]));
// array.push(client7 = new Client(7 , "Oleh", "Green", "78ikjhg@gmail", "15043", ["juice", "apple"]));
// array.push(client8 = new Client(8 , "Ilon", "Freenovych", "qaszxdrtgh@gmail", "55565", ["kiwi"]));
// array.push(client9 = new Client(9 , "Daryna", "Sas", "mnbv@gmail", "77743", ["egg", "milk"]));
// array.push(client10 = new Client(5, "Mykola", "Clon", "lkjhgf@gmail", "22268", ["pork"]));

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// array.sort(function (a, b) {
//     if (a.order.length > b.order.length) {
//         return 1;
//     }
//     if (a.order.length < b.order.length) {
//         return -1;
//     }
//     return 0;
// });
// console.log(array);
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, yearOfRelease, maxSpeed, EngineCapacity){
//     this.model = model;
//     this.producer = producer;
//     this.yearOfRelease = yearOfRelease;
//     this.maxSpeed = maxSpeed;
//     this.EngineCapacity = EngineCapacity;

    // this.drive = function () {
    //     console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    // };
    //
    // this.info = function () {
    //     console.log(`Model - ${model} `);
    //     console.log(`Producer - ${producer} `);
    //     console.log(`Year Of Release - ${yearOfRelease} `);
    //     console.log(`Maxumum Speed - ${maxSpeed} `);
    //     console.log(`Engine Capacity - ${EngineCapacity} `);
    // };
    //
    // this.increaseMaxSpeed = function (newSpeed){
    //     let speed = newSpeed + this.maxSpeed;
    //     console.log(`New Speed is: ${speed}`);
    // };
    // this.changeYear = function (newValue){
    //     this.yearOfRelease = newValue;
    // }

// };
//
// Car.prototype.addDriver = function (driver){
//     this.driver = driver;
// }

// let car1 = new Car("xs", "tesla", 2020, 220, 2000);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed (10);
// car1.changeYear(2021);
// console.log(car1);

// car1.addDriver ({name: "Mykola", category: "Tesla-driver", yearsOfExperience: 2});
// console.log(car1);
//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor (model, producer, yearOfRelease, maxSpeed, EngineCapacity){
//         this.model = model;
//         this.producer = producer;
//         this.yearOfRelease = yearOfRelease;
//         this.maxSpeed = maxSpeed;
//         this.EngineCapacity = EngineCapacity;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//    info () {
//         console.log(`Model - ${this.model} `);
//         console.log(`Producer - ${this.producer} `);
//         console.log(`Year Of Release - ${this.yearOfRelease} `);
//         console.log(`Maxumum Speed - ${this.maxSpeed} `);
//         console.log(`Engine Capacity - ${this.EngineCapacity} `);
//     }
//     increaseMaxSpeed (newSpeed){
//         let speed = newSpeed + this.maxSpeed;
//         console.log(`New Speed is: ${speed}`);
//     }
//    changeYear  (newValue){
//         this.yearOfRelease = newValue;
//     }
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car("xs", "tesla", 2020, 220, 2000);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed (10);
// car1.changeYear(2021);
// console.log(car1);

// car1.addDriver ({name: "Mykola", category: "Tesla-driver", yearsOfExperience: 2});
// console.log(car1);
//
//
//

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrayOfCinderellas = [];
for (let i = 0; i < 10; i++) {
    arrayOfCinderellas.push(
        new Cinderella("Cinderella" + (i+1),
        (Math.floor(Math.random() * 10) + 18),
        (Math.floor(Math.random() * 10) + 34)));
}
// console.log(array);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
let prince = new Prince("Romeo", 23, 36);
console.log(prince);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let i = 0; i < arrayOfCinderellas.length; i++) {
//     if(arrayOfCinderellas[i].footSize === prince.slipper){
//         console.log(`${prince.name} finds his Cinderella by ${arrayOfCinderellas[i].name}`);
//         break;
//     } else if(i === arrayOfCinderellas.length-1 ){
//         console.log("Find more");
//     }
// }
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let winner = arrayOfCinderellas.find((cinderella) => cinderella.footSize === prince.slipper);
if(winner) {
    console.log(`${prince.name} finds his Cinderella by ${winner.name}`);
} else {
    console.log("Find more");
}
