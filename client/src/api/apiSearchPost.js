// FILTER/SEARCH POSTS BY KEYWORD url MAIN_URL + 'post/search/${keyWord}' method: get 
// response: [ { id: , title: , username: likes: <Array> //usernames dislikes: <Array> //usernames imageSrc: //path date: , comments: <Array> } ... ]

const MAIN_URL = 'http://localhost:8080/';

async function searchPost(keyWord) {

    const URL = MAIN_URL + `post/search/${keyWord}`;

    const response = await fetch(URL);

    return response.json();

}

export default searchPost;