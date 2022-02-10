// CREATE COMMENT url: MAIN_URL + 'comment' method: post body: { text: , postId: , username: , } 
// response: { id: , text: , postId: , username: , likes: <Array>, dislikes: <Array>, date: }

const MAIN_URL = 'http://localhost:8080/';

async function createComment(text, postId, username) {
    
    const URL = MAIN_URL + 'comment/';

    const data = {text, postId, username};

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)  
    });

    const res = await response.json();
    return res;
};

export default createComment;