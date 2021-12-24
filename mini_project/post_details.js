// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


const postInfo = document.createElement('div');
const commentsBlock = document.createElement('div');

document.body.append(postInfo, commentsBlock);

postInfo.classList.add('post__info');
commentsBlock.classList.add('comments__block');

const post = JSON.parse(localStorage.getItem('post'));

for (const item in post) {
    const postItem = document.createElement('div');
    const postItemTitle = document.createElement('h3');
    const postItemBody = document.createElement('p');

    postInfo.append(postItem);
    postItem.append(postItemTitle, postItemBody);

    postItem.classList.add('post__item');

    postItemTitle.innerText = item + ':';
    postItemBody.innerText = post[item];
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(res => res.json())
    .then(comments => {
        comments.map(comment => {
            const commentBlock = document.createElement('div');
            commentsBlock.append(commentBlock)

            commentBlock.classList.add('comment');

            const commentEmail = document.createElement('h5');
            const commentName = document.createElement('h4');
            const commentBody = document.createElement('p');
            commentBlock.append(commentEmail, commentName, commentBody);

            commentEmail.innerText = comment.email;
            commentName.innerText = comment.name;
            commentBody.innerText = comment.body;

        })
    })
