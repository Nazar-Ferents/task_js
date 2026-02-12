

let usersDiv = document.querySelector('#users');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(usersArray => {

    for (let user of usersArray) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerText = `ID: ${user.id}
                             Name: ${user.name}`;


        let linkOfUsers = document.createElement('a');
        linkOfUsers.classList.add('infoUsers');
        linkOfUsers.href = `user-details.html?id=${user.id}`;
        linkOfUsers.innerText = `Full Information about this user`;

        userDiv.appendChild(linkOfUsers);

        usersDiv.appendChild(userDiv);
    }
})

