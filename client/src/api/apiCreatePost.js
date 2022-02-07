const MAIN_URL = 'http://localhost:8080/';

// CREATE POST: url: MAIN_URL + 'post/' method: post 
// body: { title: , username: } 
// response: { id: , title: , username: likes: <Array> //usernames dislikes: <Array> //usernames imageSrc: //path date: , comments: <Array> }

async function createPost(title, username) {
    const URL = MAIN_URL + 'post/';

    const data = {title, username};

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  
    });

    const res = await response.json();
    let id = res.result.id;
    return id
};

export default createPost;