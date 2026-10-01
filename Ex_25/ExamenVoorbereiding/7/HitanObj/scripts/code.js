let global =   {
    IMAGE_COUNT: 5,       // aantal figuren (0.png t.e.m. 4.png)
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    BOMB_INDEX: 0,
    score: 0,
    timeoutId: 0
};

const moveSprite = () =>  {
    const playfield = document.getElementById("playfield");
    const sprite = document.getElementById("sprite");

    // random pos
    const maxX = playfield.clientWidth - global.IMAGE_SIZE;
    const maxY = playfield.clientHeight - global.IMAGE_SIZE;
    sprite.style.left = Math.floor(Math.random() * maxX ) + "px";
    sprite.style.top = Math.floor(Math.random() * maxY) + "px";

    // random foto
    const index = Math.floor(Math.random() * global.IMAGE_COUNT);
    sprite.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;
    sprite.dataset.index = index;

    global.timeoutId = setTimeout(moveSprite , global.MOVE_DELAY)
}

const klikOpSprite = (event) =>{
    const index = parseInt(event.target.dataset.index);

    if(index === global.BOMB_INDEX){
        clearTimeout(global.timeoutId);
        event.target.style.display = "none";
        alert("boom game over" + global.score)
    }else{
        global.score++;
        document.getElementById("score").textContent = global.score;
        clearTimeout(global.timeoutId);
        moveSprite();
    }
}

const setup = () => {

    document.getElementById("sprite").addEventListener("click", klikOpSprite);
    document.getElementById("startBtn").addEventListener("click", () => {
        global.score = 0;
        global.score = 0;
        document.getElementById("score").textContent = 0;
        document.getElementById("sprite").style.display = "block";
        document.getElementById("startBtn").disabled = true;
        moveSprite();
    });
};




window.addEventListener("load", setup);


