import "./navigation.mjs";
import "./footer.mjs";
import { solutions } from "../data/solutions.mjs";


const container = document.querySelector("#solutionsContainer");


solutions.forEach(solution => {


    const card = document.createElement("article");


    card.classList.add("solution-card");


    card.innerHTML = `

     <img src="${solution.image}" alt="${solution.name}" width="300" height="300" loading="lazy">


        <h3>${solution.name}</h3>


        <p class="description">
            ${solution.description}
        </p>


        <p class="details">
            ${solution.details}
        </p>


        <h4>Benefits</h4>


        <ul>

            ${solution.benefits
            .map(item => `<li>${item}</li>`)
            .join("")}

        </ul>

    `;


    container.appendChild(card);


});
import "./process.mjs"