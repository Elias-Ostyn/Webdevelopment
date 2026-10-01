const setup = () => {


const buttons = document.getElementsByClassName("b")


    for(let i =0 ;i< buttons.length;i++){
        buttons[i].addEventListener("click", (e) => {
            buttons[i].classList.toggle("blauw")
        })

    }


}

window.addEventListener("load", setup);
