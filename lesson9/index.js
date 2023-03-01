console.log("Hello!");

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.S
// let div1 = document.createElement("div");
// div1.classList.add("wrap", "collapse", "alpha", "beta");
// div1.style.color = "white";
// div1.style.background = "lightpink";
// div1.style.fontSize = "24px";
// div1.innerText = "Hello!";
// document.body.append(div1);
// let div1Clone = div1.cloneNode(true);
// document.body.appendChild(div1Clone);

//
// - Є масив:
// let  arr =   ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let ul1 = document.createElement('ul');
// for (let i = 0; i < arr.length; i++) {
//     let li1 =  document.createElement("li");
//         li1.innerText = arr[i];
//     ul1.appendChild(li1);
// }
// document.body.appendChild(ul1);
// let div2 = document.createElement('div');
// document.body.appendChild(div2);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let div1 = document.createElement("div");
//     div1.innerText = `Title: "${coursesAndDurationArray[i].title}"`;
//     div1.innerText += `  Month Duration: ${coursesAndDurationArray[i].monthDuration}`;
//     document.body.appendChild(div1);
// }

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let div1  = document.createElement("div");
//     div1.classList.add("item");
//     let h11 = document.createElement("h1");
//     h11.classList.add("heading");
//     h11.innerText = coursesAndDurationArray[i].title;
//     div1.appendChild(h11);
//     let p1 = document.createElement("p");
//     p1.innerText  = coursesAndDurationArray[i].monthDuration;
//     p1.classList.add("description");
//     div1.appendChild(p1);
//     document.body.appendChild(div1);
// }

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// for (let i = 0; i < simpsons.length; i++) {
//     let div1 = document.createElement("div");
//     div1.classList.add("member");
//     div1.innerText = `Name - ${simpsons[i].name}`;
//     div1.innerText += ` Surname - ${simpsons[i].surname}`;
//     div1.innerText += ` Age - ${simpsons[i].age}`;
//     div1.innerText += ` Information - ${simpsons[i].info}`;
//     let img = document.createElement("img");
//     img.src = simpsons[i].photo;
//     div1.appendChild(img);
//     document.body.appendChild(div1);
// }

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фaйлом
// function createEl(tag, style, text) {
//     let elm = document.createElement(tag);
//     elm.classList.add(...style);
//     elm.innerHTML = text || '';
//
//     return elm;
// }
//
// for (let i = 0; i < coursesArray.length; i++) {
//     let block = createEl("div", ["block"]);
//     let div1 = createEl("div", ["block__top"]);
//     let h1 = createEl("h1", ["block__title"], coursesArray[i].title);
//     div1.append(h1);
//     let div2 = createEl("div", ["block__month"], coursesArray[i].monthDuration);
//     let div3 = createEl("div", ["block__hour"], coursesArray[i].hourDuration);
//     let div4 = createEl("div", ["block__modules"])
//
//     for (let j = 0; j < coursesArray[i].modules.length; j++) {
//         let module = createEl("div", ["block__elem"],coursesArray[i].modules[j] );
//         div4.append(module);
//     }
//
//     block.append(div1, div2, div3, div4);
//     document.body.append(block);
// }

// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let element = document.createElement("div");
// element.id = "text";
// let button = document.createElement("button");
// button.addEventListener("click", function () {
//     document.body.removeChild(document.querySelector("#text"));
// });
//
// element.innerText = "Hello!";
// button.innerText = "Bye!";
//
// document.body.append(element, button);

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// let button = document.createElement("button");
// let input = document.createElement("input");
// button.addEventListener("click", function () {
//     document.querySelector("input");
//     console.log(input.value);
//
//     if(input.value < 18){
//         alert("he is too young!")
//     }
// });
//
// button.innerText = "Bye!";
//
// document.body.append(button, input);

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// function createEl(tag, text) {
//     let elm = document.createElement(tag);
//     elm.innerHTML = text || '';
//
//     return elm;
// }
//
// function createTable(row, column, text){
//     let table = createEl("table");
//     for (let i = 0; i < row; i++) {
//         let tr = createEl("tr");
//
//         for (let j = 0; j < column; j++) {
//             let td = createEl("td", text);
//             tr.append(td);
//         }
//         table.append(tr);
//     }
//     document.body.append(table);
// }
//
// let inputRow = document.createElement("input");
// let inputColumn = document.createElement("input");
// let inputText = document.createElement("input");
//
// let button = createEl("button", "Create");
// button.addEventListener("click", function () {
//     let row =  inputRow.value;
//     let column = inputColumn.value;
//     let text = inputText.value;
//
//     createTable(row, column, text);
// });
//
// document.body.append(inputRow, inputColumn, inputText, button);
//


