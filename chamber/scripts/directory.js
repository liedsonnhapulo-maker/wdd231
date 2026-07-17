const membersContainer = document.querySelector("#members");

const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

const url = "data/members.json";


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


function displayMembers(members) {

    membersContainer.innerHTML = "";

    const fragment = document.createDocumentFragment();


    members.forEach((member, index) => {

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


        const loading = index === 0 ? "eager" : "lazy";

        const fetchPriority = index === 0
            ? 'fetchpriority="high"'
            : "";


        card.innerHTML = `

            <img 
            src="images/companies/${member.image}"
            alt="${member.name} logo"
            width="300"
            height="180"
            loading="${loading}"
            ${fetchPriority}>


            <h2>${member.name}</h2>


            <p>${member.tagline}</p>


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


            <a href="${member.url}" target="_blank" rel="noopener">
                Visit Website
            </a>

        `;


        fragment.appendChild(card);

    });


    membersContainer.appendChild(fragment);

}



if (gridButton) {

    gridButton.addEventListener("click", () => {

        membersContainer.classList.add("grid");

        membersContainer.classList.remove("list");


        gridButton.setAttribute("aria-pressed", "true");

        listButton.setAttribute("aria-pressed", "false");

    });

}



if (listButton) {

    listButton.addEventListener("click", () => {

        membersContainer.classList.add("list");

        membersContainer.classList.remove("grid");


        listButton.setAttribute("aria-pressed", "true");

        gridButton.setAttribute("aria-pressed", "false");

    });

}



if (hamburger && navigation) {

    hamburger.addEventListener("click", () => {

        navigation.classList.toggle("open");

        hamburger.classList.toggle("show");


        const expanded = hamburger.classList.contains("show");

        hamburger.setAttribute(
            "aria-expanded",
            expanded
        );

    });

}



const currentYear = document.querySelector("#currentyear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}



const lastModified = document.querySelector("#lastModified");

if (lastModified) {

    lastModified.textContent =
        `Last Modification: ${document.lastModified}`;

}



getMembers();