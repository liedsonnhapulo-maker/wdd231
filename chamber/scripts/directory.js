// directory.js

const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");

const membersURL = "data/members.json";


// Load members from JSON
async function getMembers() {

    try {

        const response = await fetch(membersURL);

        if (!response.ok) {
            throw new Error("Could not load member data");
        }

        const data = await response.json();

        displayMembers(data.companies);

    } catch (error) {

        console.error(error);

        membersContainer.innerHTML = `
            <p>Unable to load business directory.</p>
        `;

    }

}


// Create business cards
function displayMembers(companies) {


    membersContainer.innerHTML = "";


    companies.forEach(company => {


        const card = document.createElement("article");

        card.classList.add("member-card");


        let membershipLevel;


        switch (company.membership) {

            case 1:
                membershipLevel = "Member";
                break;

            case 2:
                membershipLevel = "Silver Member";
                break;

            case 3:
                membershipLevel = "Gold Member";
                break;

            default:
                membershipLevel = "Unknown";

        }


        card.innerHTML = `

            <img 
            src="images/companies/${company.image}" 
            alt="${company.name} logo"
            loading="lazy">


            <h3>${company.name}</h3>


            <p>
                ${company.description}
            </p>


            <p>
                <strong>Address:</strong>
                ${company.address}
            </p>


            <p>
                <strong>Phone:</strong>
                ${company.phone}
            </p>


            <p>
                <strong>Membership:</strong>
                ${membershipLevel}
            </p>


            <a href="${company.website}" target="_blank">
                Visit Website
            </a>

        `;


        membersContainer.appendChild(card);


    });


}



// Change to Grid View
gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid");

    membersContainer.classList.remove("list");

});




// Change to List View
listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");

    membersContainer.classList.remove("grid");

});




// Footer current year
const currentYear = document.querySelector("#currentyear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}



// Footer last modification
const modified = document.querySelector("#lastModified");

if (modified) {

    modified.textContent =
        `Last Modification: ${document.lastModified}`;

}



// Start
getMembers();