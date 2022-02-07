// GET POSTS BY PAGES (9 posts per page) url MAIN_URL + 'post/page/${pageNumber}' 
// pageNumber > 0 
// response: [ { id: , title: , username: likes: <Array> //usernames dislikes: <Array> //usernames imageSrc: //path date: , comments: <Array> } ... ]

const MAIN_URL = 'http://localhost:8080/';

async function getPostByPages(page) {
    
    const URL = MAIN_URL + `post/page/${page}`;
    let response = await fetch(URL);
    return response.json();
};

export default getPostByPages;

