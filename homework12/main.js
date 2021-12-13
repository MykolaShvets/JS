// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let postsBlock = document.createElement('div');
postsBlock.classList.add('posts');
document.body.append(postsBlock);

fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {
    for (const post of posts) {
        let postBox = document.createElement('div')
        postBox.classList.add('post__item');
        postsBlock.append(postBox);

        let id = document.createElement('h3');
        let title = document.createElement('h2');
        let body = document.createElement('p');

        postBox.append(id, title, body);

        id.innerText = post.userId + ' - ' + post.id;
        title.innerText = post.title;
        body.innerText = post.body;

    }
})


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsBlock = document.createElement('div');
commentsBlock.classList.add('comments');
document.body.append(commentsBlock);

fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(comments => {
    for (const comment of comments) {

        let commentBox = document.createElement('div')
        commentBox.classList.add('comment__item');
        commentsBlock.append(commentBox);

        let id = document.createElement('h3');
        let name = document.createElement('h2');
        let email = document.createElement('h3');
        let body = document.createElement('p');

        commentBox.append(id, name, email, body);

        id.innerText = comment.postId + ' - ' + comment.id;
        name.innerText = comment.name;
        email.innerText = comment.email;
        body.innerText = comment.body;

    }

})