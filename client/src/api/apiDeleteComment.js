// DELETE COMMENT url: MAIN_URL + 'comment/{id}' method: delete 
// response: { id: , text: , postId: , username: , likes: <Array>, dislikes: <Array>, date: }

const MAIN_URL = 'http://localhost:8080/';

async function deleteComment(id) {

    const URL = MAIN_URL + `comment/${id}`;

    const response = await fetch(URL,{
        method: 'delete'
    });

    const res = await response.json();
    console.log(res);
}

export default deleteComment;