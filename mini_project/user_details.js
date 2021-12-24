// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//

const currentUser = JSON.parse(localStorage.getItem('user'));

// console.log(currentUser);

const userInfo = document.createElement('div');
const posts = document.createElement('div');

document.body.append(userInfo, posts);

userInfo.classList.add('user__info');
posts.classList.add('posts');

for (const item in currentUser) {

    const userItem = document.createElement('div');
    userInfo.append(userItem);

    userItem.classList.add('user__item');

    const infoTitle = document.createElement('h2')
    userItem.append(infoTitle)


    infoTitle.innerText = item + ':';

    if (typeof currentUser[item] !== 'object') {

        const infoTxt = document.createElement('p');

        userItem.append(infoTxt);

        infoTxt.innerText = currentUser[item];

    } else {
        const infoList = document.createElement('ul');
        userItem.append(infoList);

        for (const item2 in currentUser[item]) {

            const infoSubtitle = document.createElement('h3');

            const infoListItem = document.createElement('li');


            infoList.append(infoListItem)
            infoListItem.append(infoSubtitle)

            infoSubtitle.innerText = item2 + ':';


            if (typeof currentUser[item][item2] !== 'object') {

                const infoTxt = document.createElement('p');
                infoListItem.append(infoTxt);

                infoTxt.innerText = currentUser[item][item2];

            } else {
                const infoSublist = document.createElement('ul');
                infoListItem.append(infoSublist);

                for (const item3 in currentUser[item][item2]) {


                    const infoSublistItem = document.createElement('li');
                    const infoSublistTxt = document.createElement('p');


                    infoSublist.append(infoSublistItem);
                    infoSublistItem.append(infoSublistTxt);

                    infoSublistTxt.innerText = item3 + ': ' + currentUser[item][item2][item3]
                }
            }
        }
    }
}

const showPosts = document.createElement('button');
const hidePosts = document.createElement('button');

posts.append(showPosts, hidePosts);

showPosts.innerText = "Posts of current user";
hidePosts.innerText = 'Hide posts';
hidePosts.style.display = 'none';

showPosts.onclick = () => {

    const userPosts = document.createElement('div');
    userPosts.classList.add('user__posts');
    posts.append(userPosts);

    fetch(`https://jsonplaceholder.typicode.com/users/${currentUser.id}/posts`)
        .then(res => res.json())
        .then(posts => {
            posts.map(post => {
                const userPost = document.createElement('div');
                userPost.classList.add('post__title');
                userPosts.append(userPost);

                const postTitle = document.createElement('p');
                const postDetail = document.createElement('a');
                userPost.append(postTitle, postDetail);

                postTitle.innerText = post.title;

                postDetail.innerText = 'Post detail';
                postDetail.classList.add('post__detail');
                postDetail.setAttribute('href', '/JS/mini_project/post-details.html');

                postDetail.onclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                }
                //аналогічно як і в main.js
                postDetail.onauxclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                }
            })
        })

    showPosts.style.display = 'none';
    hidePosts.style.display = 'block';

    hidePosts.onclick = () => {
        posts.removeChild(userPosts);
        showPosts.style.display = 'block';
        hidePosts.style.display = 'none'
    }
}




