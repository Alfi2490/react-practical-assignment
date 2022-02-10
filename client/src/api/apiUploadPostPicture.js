// UPLOAD POST PICTURE url: MAIN_URL + 'post/{id}/picture' 
// method: post 
// body: FormData  should contain file like this formData.append("picture", file); 
// response: { id: , title: , username: likes: <Array> //usernames dislikes: <Array> //usernames imageSrc: //path date: , comments: <Array> }


const MAIN_URL = 'http://localhost:8080/';

async function uploadPostPicture(id, picture) {

    const URL = MAIN_URL + `post/${id}/picture`;

    let formData = new FormData();
    formData.append('picture', picture);

    const response = await fetch(URL, {
        method: 'post',
        body: formData,
    });

    const res = await response.json();

    return res;
};

export default uploadPostPicture;