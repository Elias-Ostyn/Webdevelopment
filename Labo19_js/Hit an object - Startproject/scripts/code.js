const setup = () => {

    const global = {
        IMAGE_COUNT: 5,
        IMAGE_SIZE: 48,
        IMAGE_PATH_PREFIX: "images/",
        IMAGE_PATH_SUFFIX: ".png",
        MOVE_DELAY: 3000,
        score: 0,
        timeoutId: 0
    };

    const playField = document.getElementById("playField");

    // foto
    const img = document.createElement("img");
    img.id = "target";
    playField.appendChild(img);

    const changeImage = () => {
        const index = Math.floor(Math.random() * global.IMAGE_COUNT);
        img.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;
    };

    const moveTarget = () => {
        const maxX = playField.clientWidth - global.IMAGE_SIZE;
        const maxY = playField.clientHeight - global.IMAGE_SIZE;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        img.style.left = x + "px";
        img.style.top = y + "px";
    };

    img.addEventListener("click", () => {
        global.score++;
        console.log("Score:", global.score);

        moveTarget();
        changeImage();
    });


    const startGame = () => {
        global.timeoutId = setInterval(() => {
            moveTarget();
            changeImage();
        }, 1000);
    };


    document.getElementById("startBtn").addEventListener("click", startGame);

    // initialiseren zonderr starten
    changeImage();
    moveTarget();
};

window.addEventListener("load", setup);