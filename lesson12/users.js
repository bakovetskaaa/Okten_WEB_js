// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let url = new URL(location.href);
let json = url.searchParams.get('id');
let id = JSON.parse(json);
// console.log(id);

fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);
        let div = document.createElement('div');
        div.innerHTML = JSON.stringify(user)
            .replaceAll(',', "</br>")
            .replaceAll('"', "");
        document.body.append(div);

    });
