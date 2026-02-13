

let info_post = document.querySelector('#info_post');

let params = new URLSearchParams(window.location.search);
let post_id = params.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res => res.json())
.then(postsArray => {

    let post = postsArray.find(p => p.id == post_id);

    info_post.innerText = `
                             userId:${post.userId}
                             id:${post.id}
                             
                             title:${post.title}
                             
                             body:${post.body}
                             `

    let commentsContainer = document.createElement("div");
    commentsContainer.classList.add('commentsContainer');

    document.body.appendChild(commentsContainer);

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(res => res.json())
    .then(commentsArray => {

        for (let comment of commentsArray) {

            let infoComment = document.createElement("div");
            infoComment.classList.add('infoComment');
            infoComment.innerText = `
                                       postId:${comment.postId}
                                       id:${comment.id}
                                       name:${comment.name}
                                       email:${comment.email}
                                       body:${comment.body}
                                    `
            commentsContainer.appendChild(infoComment);


        }


    })

})
