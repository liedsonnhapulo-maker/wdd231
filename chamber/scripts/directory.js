const membersContainer = document.querySelector("#members");

const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");

const url = "data/members.json";


// Fetch members JSON
async function getMembers() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not fetch members data");
        }

        const data = await response.json();

        displayMembers(data.members);

    } catch (error) {

        console.error(error);

        membersContainer.innerHTML =
            "<p>Unable to load business directory.</p>";

    }

}


// Display members
function displayMembers(members) {

    membersContainer.innerHTML = "";


    members.forEach(member => {


        const card = document.createElement("article");

        card.classList.add("member-card");


        let membershipText;


        if (member.membership === 1) {

            membershipText = "Member";

        } else if (member.membership === 2) {

            membershipText = "Silver Member";

        } else if (member.membership === 3) {

            membershipText = "Gold Member";

        } else {

            membershipText = "Unknown";

        }


        card.innerHTML = `

            <img 
            src="images/companies/${member.image}" 
            alt="${member.name} logo"
            loading="lazy">


            <h3>${member.name}</h3>


            <p>
                ${member.tagline}
            </p>


            <p>
                <strong>Category:</strong>
                ${member.category}
            </p>


            <p>
                <strong>Address:</strong>
                ${member.address}
            </p>


            <p>
                <strong>Phone:</strong>
                ${member.phone}
            </p>


            <p>
                <strong>Founded:</strong>
                ${member.founded}
            </p>


            <p>
                <strong>Membership:</strong>
                ${membershipText}
            </p>


            <a href="${member.url}" target="_blank">
                Visit Website
            </a>

        `;


        membersContainer.appendChild(card);


    });

}



// Grid View
gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid");

    membersContainer.classList.remove("list");

});



// List View
listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");

    membersContainer.classList.remove("grid");

});



// Footer Year
const currentYear = document.querySelector("#currentyear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// Footer Last Modified
const lastModified = document.querySelector("#lastModified");

if (lastModified) {

    lastModified.textContent =
        `Last Modification: ${document.lastModified}`;

}


// Start
getMembers();