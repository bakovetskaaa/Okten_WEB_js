// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let ul = document.createElement('ul');
        for (const user of users) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = `ID: ${user.id}, User's name: ${user.name}
                
            `;
            a.href = 'users.html?id=' + user.id;
            li.append(a);
            ul.append(li);
        }
        document.body.appendChild(ul);
    });





