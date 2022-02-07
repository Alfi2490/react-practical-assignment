// UPDATE POST url: MAIN_URL + 'post/{id}' method: put 
// body: { title?: , likes?: Array<>, dislikes?: Array<> } 
// response: { id: , title: , username: likes: <Array> dislikes: <Array> date: , comments: <Array> }

const MAIN_URL = 'http://localhost:8080/';

async function updatePost(id, title, likes, dislikes, comments) {
    
    const URL = MAIN_URL + `post/page/${id}`;
    let response = await fetch(URL);
    return response.json();
};

export default updatePost;
