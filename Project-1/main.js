window.onreset = screen;
window.onload = screen;

function screen (){
    myWidth = window.innerWidth;

    // The main purpose of inner html is to insert text inside our div with the id name of size
    document.getElementById('size').innerHTML = "Width : " + myWidth + "px";
}

screen();