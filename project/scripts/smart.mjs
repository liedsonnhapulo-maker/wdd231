import "./navigation.mjs";
import "./footer.mjs";
import { smartTechnologies } from "../data/technologies.mjs";


const container = document.querySelector("#smartContainer");


smartTechnologies.forEach(technology => {


    const card = document.createElement("article");


    card.classList.add("smart-card");


    card.innerHTML = `

        <img 
            src="${technology.image}"   alt="${technology.name}" width="400" height="300" loading="lazy">


        <h3>
            ${technology.name}
        </h3>


        <p>
            ${technology.description}
        </p>


        <p>
            ${technology.details}
        </p>


        <h4>
            Benefits
        </h4>


        <ul>

            ${technology.benefits
            .map(benefit => `
                    <li>${benefit}</li>
                `)
            .join("")}

        </ul>

    `;


    container.appendChild(card);


});
import "./benefits.mjs"