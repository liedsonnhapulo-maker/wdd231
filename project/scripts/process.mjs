import { processes } from "../data/process.mjs";


const container = document.querySelector("#processContainer");


processes.forEach(process => {


    const card = document.createElement("article");


    card.classList.add("process-card");


    card.innerHTML = `

        <img 
            src="${process.image}" 
            alt="${process.title}"
            loading="lazy"
        >


        <h3>
            ${process.title}
        </h3>


        <p>
            ${process.description}
        </p>

    `;


    container.appendChild(card);


});