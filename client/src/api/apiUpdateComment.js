// UPDATE COMMENT url: MAIN_URL + 'comment/{id}' method: put body: { text: , likes: <Array>, dislikes: <Array>, } 
// response: { id: , text: , postId: , username: , likes: <Array>, dislikes: <Array>, date: }

const MAIN_URL = 'http://localhost:8080/';

async function updateComment(id, text, likes, dislikes) {

    const URL = MAIN_URL + `comment/${id}`;

    const data = {text, likes, dislikes}

    const response = await fetch(URL, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) 
    });

    return response.json();
}

export default updateComment;