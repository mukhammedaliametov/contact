document.querySelector('.btn').addEventListener('click', function{
    myText();
}); 

function myText(){
    let massage, text;
    let errElement = document.getElementById("text");
    massage = document.getElementById("err");
    text = document.getElementById("text").value;
    console.log(text);

    try{
        if(text == ""){
            errElement.classList.add('err')
            throw "is empty"
        }
    }   catch (e) {
        massage.innerHTML = "The value " + e;
    }

}
