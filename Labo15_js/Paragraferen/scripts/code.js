const setup = () => {

    let belangrijk = document.getElementsByClassName("belangrijk");
    console.log(belangrijk);

    for(let i = 0; i < belangrijk.length; i++) {
        belangrijk[i].className += ' opvallend';
    }

}


window.addEventListener("load", setup);
