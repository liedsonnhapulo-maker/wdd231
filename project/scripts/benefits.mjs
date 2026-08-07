import { benefits } from "../data/sbenefits.mjs";


const container = document.querySelector("#benefitsContainer");


benefits.forEach(item => {


    const card = document.createElement("article");


    card.classList.add("benefit-card");


    card.innerHTML = `

        <img 
            src="${item.image}" 
            alt="${item.name}" 
            loading="lazy"
        >


        <h3>
            ${item.name}
        </h3>


        <p>
            ${item.description}
        </p>


        <p>
            ${item.details}
        </p>


        <ul>

            ${item.benefits
                .map(benefit => `
                    <li>${benefit}</li>
                `)
                .join("")}

        </ul>

    `;


    container.appendChild(card);


});