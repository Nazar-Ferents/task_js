
let info_user = document.querySelector('#info_user');

let params = new URLSearchParams(window.location.search);
let id = params.get('id');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(usersArray => {


    let user = usersArray.find(u => u.id == id);


                info_user.innerText = `    id:${user.id}
                               name: ${user.name}
                               username: ${user.username}
                               email: ${user.email}
                               
                               address:
                                       street: ${user.address.street}
                                       suite: ${user.address.suite}
                                       city: ${user.address.city}
                                       zipcode: ${user.address.zipcode}
                               geo:
                                   lat: ${user.address.geo.lat}
                                   lng: ${user.address.geo.lng}
                                   
                               phone: ${user.phone}
                               website: ${user.website}
                               
                               company:
                                       name: ${user.company.name}
                                       catchPhrase: ${user.company.catchPhrase}
                                       bs: ${user.company.bs}
                               `;

    let post_of_current_user = document.createElement('button')
    post_of_current_user.classList.add('post_of_current_user');
    post_of_current_user.innerText = `post of current user`

    info_user.appendChild(post_of_current_user);

    let postsContainer = document.createElement('div');
    postsContainer.classList.add('postsContainer');
    info_user.appendChild(postsContainer);


    post_of_current_user.onclick = (ev) => {
        ev.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(res => res.json())
        .then(postsArray => {

            postsContainer.innerHTML = '';

            for (let post of postsArray) {
                let titleOfPost = document.createElement('h2');
                titleOfPost.classList.add('title');
                titleOfPost.innerText = `${post.title}`;

                let linkOfPost = document.createElement('a');
                linkOfPost.classList.add('linkOfPost');
                linkOfPost.innerText = `Full Information about this post`;
                linkOfPost.href = `post=details.html?id=${post.id}`;

                postsContainer.append(titleOfPost,linkOfPost);
            }

        })
    }


})
