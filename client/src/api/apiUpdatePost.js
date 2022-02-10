// UPDATE POST url: MAIN_URL + 'post/{id}' method: put 
// body: { title?: , likes?: Array<>, dislikes?: Array<> } 
// response: { id: , title: , username: likes: <Array> dislikes: <Array> date: , comments: <Array> }

const MAIN_URL = 'http://localhost:8080/';

async function updatePost(id, title, likes ,dislikes) {
    
    const URL = MAIN_URL + `post/${id}`;

    const data = {title, likes, dislikes}

    let response = await fetch(URL, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  
    });
    
    return response.json();
};

export default updatePost;
