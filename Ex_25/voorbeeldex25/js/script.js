let selectedUser = "";
let berichten = [];
let timer = null;

const vervangEmoji = (text) => {
    text = text.replaceAll(":)", "\u{1F604}");
    text = text.replaceAll(":p", "\u{1F608}");
    return text;
}

const setup = () => {
    if (!sessionStorage.getItem("selectedUser")) {
        const senders = ["Jeroen", "Leila", "Alex", "Aisha"];
        const randomSender = senders[Math.floor(Math.random() * senders.length)];
        sessionStorage.setItem("selectedUser", randomSender);
    }
    selectedUser = sessionStorage.getItem("selectedUser");
    document.getElementById("message-sender").value = selectedUser;

    laadBerichten();

    timer = setInterval(laadBerichten, 1000);

    document.getElementById("send-button").addEventListener("click", stuurBericht);

    document.getElementById("clear-all").addEventListener("click", () => {
        localStorage.removeItem("chatMessages");
        berichten = [];
        document.getElementById("chat-box").textContent = "";
    });

    document.getElementById("message-sender").addEventListener("change", (e) => {
        selectedUser = e.target.value;
        sessionStorage.setItem("selectedUser", selectedUser);
    });
}

const maakBerichtDiv = (sender, text, time) => {
    const div = document.createElement("div");
    div.className = "message";

    const spanTime = document.createElement("span");
    spanTime.className = "timestamp";
    spanTime.textContent = time;

    const spanSender = document.createElement("span");
    spanSender.className = "sender";

    const deleteBtn = document.createElement("button");
    deleteBtn.title = "Verwijder bericht";
    deleteBtn.addEventListener("click", () => {
        if (confirm("Ben je zeker dat je dit wilt verwijderen?")) {
            const chatbox = document.getElementById("chat-box");
            const divs = Array.from(chatbox.children);
            const i = divs.indexOf(div);
            const echteIndex = berichten.length - 1 - i;
            verwijderBericht(echteIndex);
        }
    });

    if (sender === selectedUser) {
        div.classList.add("same-user");
        spanSender.append(sender);
        spanSender.appendChild(deleteBtn);
    } else {
        spanSender.append(sender);
    }

    div.appendChild(spanTime);
    div.appendChild(spanSender);
    div.append(" " + text);

    return div;
}

const verwijderBericht = (index) => {
    berichten.splice(index, 1);
    localStorage.setItem("chatMessages", JSON.stringify(berichten));

    const chatbox = document.getElementById("chat-box");
    chatbox.textContent = "";
    for (let i = berichten.length - 1; i >= 0; i--) {
        chatbox.appendChild(maakBerichtDiv(berichten[i].sender, berichten[i].text, berichten[i].time));
    }
}

const stuurBericht = () => {
    const input = document.getElementById("message-input");
    let text = input.value.trim();
    if (!text) return;

    text = vervangEmoji(text);

    const nu = new Date();
    const datum = nu.toLocaleDateString("nl-BE", { day: "2-digit", month: "long", year: "numeric" });
    const tijd = nu.toLocaleTimeString("nl-BE", { hour: "2-digit", minute: "2-digit" });

    const bericht = { sender: selectedUser, text, time: datum + " " + tijd };

    berichten.push(bericht);
    localStorage.setItem("chatMessages", JSON.stringify(berichten));

    const chatbox = document.getElementById("chat-box");
    chatbox.textContent = "";
    for (let i = berichten.length - 1; i >= 0; i--) {
        chatbox.appendChild(maakBerichtDiv(berichten[i].sender, berichten[i].text, berichten[i].time));
    }

    input.value = "";
}

const laadBerichten = () => {
    const opgeslagen = JSON.parse(localStorage.getItem("chatMessages") || "[]");
    if (opgeslagen.length === berichten.length) return;

    berichten = opgeslagen;
    const chatbox = document.getElementById("chat-box");
    chatbox.textContent = "";
    for (let i = berichten.length - 1; i >= 0; i--) {
        chatbox.appendChild(maakBerichtDiv(berichten[i].sender, berichten[i].text, berichten[i].time));
    }
}

window.addEventListener("load", setup);