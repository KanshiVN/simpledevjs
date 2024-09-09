// document.body.innerHTML ="hello"
// document.title ='DOMM'
// console.log(document.title);
// document.body 
// document.body.innerHTML = "<button>Kya</button>"

    //gets first occurence of button


//difference between innerText and innerHTML is that innerText gives the content without spaces

// document.querySelector('.js-button').innerHTML = "WTH2";

function subscribe(){
    const buttonElem = document.querySelector('.butclass');

    if(buttonElem.innerText === 'Subscribe'){
    buttonElem.innerHTML ='Subscribed'
    buttonElem.classList.add("Subsclass");
    } else{
     buttonElem.innerHTML = 'Subscribe'
    buttonElem.classList.remove("Subsclass")}

}
