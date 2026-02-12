
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

})

// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }