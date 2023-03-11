console.log("Hello!");

setTimeout(function () {
    console.log("Olia");
}, 1000)

console.log("Hello!");


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = user.username;
            document.body.appendChild(div);
        }
    });