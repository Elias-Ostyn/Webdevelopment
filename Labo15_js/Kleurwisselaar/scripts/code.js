const setup = () => {

    let button1 = document.getElementsByClassName('button1')[0];
    let button2 = document.getElementsByClassName('button2')[0];
    let button3 = document.getElementsByClassName('button3')[0];

    button1.addEventListener('click', ()  => {
        button1.classList.toggle('blauw');
    })
    button2.addEventListener('click', ()  => {
        button2.classList.toggle('blauw');
    })
    button3.addEventListener('click', ()  => {
        button3.classList.toggle('blauw');
    })



}
window.addEventListener("load", setup);
