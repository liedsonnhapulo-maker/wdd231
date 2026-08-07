// ===========================
// VISITOR MESSAGE
// ===========================


const visitMessage = document.createElement("p");

visitMessage.id = "visit-message";


// Inserir mensagem antes do conteúdo principal
const main = document.querySelector("main");

main.insertBefore(
    visitMessage,
    main.firstChild
);



const today = Date.now();

const lastVisit = localStorage.getItem("lastVisit");



if (!lastVisit) {


    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";


} else {


    const difference = today - Number(lastVisit);


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    if (days < 1) {


        visitMessage.textContent =
            "Back so soon! Awesome!";


    } else if (days === 1) {


        visitMessage.textContent =
            "You last visited 1 day ago.";


    } else {


        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }

}


// Guardar visita atual

localStorage.setItem(
    "lastVisit",
    today
);