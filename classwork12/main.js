// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


let postsBlock = document.createElement('div');
document.body.append(postsBlock);

fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {
    for (const post of posts) {
        let postBox = document.createElement('div');
        postsBlock.append(postBox);
        postsBlock.style.display = 'grid';
        postsBlock.style.gridTemplateColumns = 'repeat(5, 1fr)';

        let id = document.createElement('h3');
        let title = document.createElement('h2');
        let body = document.createElement('p');
        let commentsBtn = document.createElement('button');

        postBox.append(id, title, body, commentsBtn);

        id.innerText = post.userId + ' - ' + post.id;
        title.innerText = post.title;
        body.innerText = post.body;
        commentsBtn.innerText = 'Show comments';


        commentsBtn.onclick = () => {
            commentsBtn.disabled = true;
            fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(comments => {
                for (const comment of comments){
                    if(post.id === comment.postId){
                        let commentBox = document.createElement('div');
                        postBox.append(commentBox);

                        let commentBody = document.createElement('p');
                        let email = document.createElement('h3');


                        commentBox.append(email, commentBody);


                        commentBody.innerText = comment.body;
                        email.innerText = comment.email;
                    }

                }
            })
        }

    }
})