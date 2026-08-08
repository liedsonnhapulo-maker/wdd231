import "./navigation.mjs";
import "./footer.mjs";
import "./visits.mjs"
import { solutions } from "../data/solutions.mjs";


const showHere = document.querySelector("#showHere");

const mydialog = document.querySelector("#mydialog");

const mytitle = document.querySelector("#mydialog h2");

const myinfo = document.querySelector("#mydialog p");

const myclose = document.querySelector("#mydialog button");


myclose.addEventListener("click", () => mydialog.close());



function displayItems(data) {

    data.forEach(x => {


        const card = document.createElement("article");


        card.innerHTML = `

            <img src="${x.image}" alt="${x.name}" loading="lazy">

            <h4>${x.name}</h4>

            <p>${x.description}</p>

        `;


        card.addEventListener("click", () => showStuff(x));


        showHere.appendChild(card);


    });

}


// Home Page mostra apenas 4 soluções

displayItems(solutions.slice(0, 4));



function showStuff(x) {


    mytitle.innerHTML = x.name;


    myinfo.innerHTML = `

        ${x.details}

        <br><br>

        <strong>Benefits:</strong>

        <ul>
            ${x.benefits.map(item => `<li>${item}</li>`).join("")}
        </ul>

    `;


    mydialog.showModal();

}
import { benefits } from "../data/benefits.mjs";
import { work } from "../data/work.mjs";


const benefit = document.querySelector("#benefit");

const workHere = document.querySelector("#work");



benefits.forEach(x => {

    const card = document.createElement("article");

    card.innerHTML = `

<img src="${x.image}" alt="${x.title}" width="400" height="300" loading="lazy">

<h4>${x.title}</h4>

<p>${x.description}</p>

`;

    benefit.appendChild(card);

});





work.forEach(x => {

    const card = document.createElement("article");

    card.innerHTML = `

<img src="${x.image}" alt="${x.title}">

<h4>${x.number}. ${x.title}</h4>

<p>${x.description}</p>

`;

    workHere.appendChild(card);
    async function loadData() {
        try {
            // operação assíncrona
        } catch (error) {
            console.error(error);
        }
    }

});