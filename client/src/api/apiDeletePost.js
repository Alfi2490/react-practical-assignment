// DELETE POST url: MAIN_URL + 'post/{id}' method: delete 
// response: { id: , title: , username: likes: <Array> //usernames dislikes: <Array> //usernames imageSrc: //path date: , comments: <Array> }

const MAIN_URL = 'http://localhost:8080/';

async function deletePost(id) {
    
    const URL = MAIN_URL + `post/${id}`;
    let response = await fetch(URL, {
        method : 'delete'
    });
    return response.json();
};

export default deletePost;

