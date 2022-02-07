// UPLOAD POST PICTURE url: MAIN_URL + 'post/{id}/picture' 
// method: post 
// body: FormData  should contain file like this formData.append("picture", file); 
// response: { id: , title: , username: likes: <Array> //usernames dislikes: <Array> //usernames imageSrc: //path date: , comments: <Array> }


const MAIN_URL = 'http://localhost:8080/';

async function uploadPostPicture(id, picture) {

    const URL = MAIN_URL + `post/${id}/picture`;

    const data = new FormData();
    data.append("picture", picture);

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: data,  
    });

    const res = await response.json();

    console.log(res);

};

export default uploadPostPicture;