let historyArray = [];

const setup = () => {
    document.getElementById("button").addEventListener("click", handleCommand);
    loadHistory();
};

const handleCommand = () => {
    const input = document.getElementById("command");
    const command = input.value.trim();

    if (!command.match(/^\/(g|x|y|i) [a-zA-Z0-9 ]+$/)) {
        alert("invalid command");
        return;
    }

    // Sla het commando op
    const commandoObject = {
        commando: command,
        timestamp: new Date().toISOString()
    };

    historyArray.push(commandoObject);
    localStorage.setItem("commandoHistory", JSON.stringify(historyArray));

    createCard(command);
    input.value = ""; // inputveld leegmaken
};

const loadHistory = () => {
    const stored = localStorage.getItem("commandoHistory");
    if (stored) {
        historyArray = JSON.parse(stored);
        historyArray.forEach(entry => createCard(entry.commando));
    }
};

const createCard = (command) => {
    const container = document.getElementById("rijen");

    const colDiv = createElementWithClassName("div", "col-4");
    const card = createElementWithClassName("div", "card h-100");
    const cardBody = createElementWithClassName("div", "card-body d-flex flex-column");

    let title, text, link, linkHref;

    if (command === "/g webdesign") {
        title = "Google";
        text = "webdesign";
        linkHref = "https://www.google.com/search?q=webdesign";
        cardBody.classList.add("google");

    } else if (command === "/y arctic monkeys") {
        title = "YouTube";
        text = "arctic monkeys";
        linkHref = "https://www.youtube.com/results?search_query=arctic+monkeys";
        cardBody.classList.add("youtube");

    } else if (command === "/x COVID19") {
        title = "Twitter";
        text = "COVID19";
        linkHref = "https://twitter.com/search?q=COVID19";
        cardBody.classList.add("twitter");

    } else if (command === "/i viveshwbkortrijk") {
        title = "Instagram";
        text = "viveshwbkortrijk";
        linkHref = "https://www.instagram.com/viveshwbkortrijk";
        cardBody.classList.add("instagram");
    }

    const h5 = createElementWithClassNameAndText("h5", "card-title", title);
    const p = createElementWithClassNameAndText("p", "", text);
    const a = document.createElement("a");
    a.textContent = "Go!";
    a.href = linkHref;
    a.target = "_blank";
    a.classList.add("go-button");

    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);
    card.appendChild(cardBody);
    colDiv.appendChild(card);
    container.appendChild(colDiv);
};

const createElementWithClassName = (element, className) => {
    const el = document.createElement(element);
    el.setAttribute("class", className);
    return el;
};

const createElementWithClassNameAndText = (element, className, text) => {
    const el = createElementWithClassName(element, className);
    el.appendChild(document.createTextNode(text));
    return el;
};

window.addEventListener("load", setup);
