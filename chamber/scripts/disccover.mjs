import "./navigation.mjs";
import "./footer.mjs";

import { places } from "./places.mjs";


const myplace = document.querySelector("#myplace");


// =========================
// LAST VISIT MESSAGE
// =========================

const visitMessage = document.createElement("p");

visitMessage.id = "visit-message";


myplace.parentNode.insertBefore(
    visitMessage,
    myplace
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


// guardar visita atual

localStorage.setItem("lastVisit", today);




// =========================
// CREATE PLACE CARDS
// =========================


places.forEach(place => {


    const card = document.createElement("article");


    card.innerHTML = `

        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}" 
            alt="${place.name}" loading="lazy">
        </figure>

        <address>
            ${place.address}
        </address>

        <p>
            ${place.description}
        </p>

    `;


    myplace.appendChild(card);


});