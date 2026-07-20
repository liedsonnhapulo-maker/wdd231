const url = "./data/members.json";



export async function getSpotlights() {


    const response =
        await fetch(url);


    const data =
        await response.json();



    display(data.members);


}





function display(members) {


    const container =
        document.querySelector("#spotlight-container");



    const filtered =
        members.filter(member =>
            member.membership === 2 ||
            member.membership === 3
        );



    filtered.sort(() =>
        Math.random() - 0.5
    );



    const selected =
        filtered.slice(0, 3);




    selected.forEach(member => {


        const card =
            document.createElement("article");


        card.className = "spotlight-card";



        card.innerHTML =
            `

<img src="images/companies/${member.image}"
alt="${member.name}">



<h3>
${member.name}
</h3>


<p>
${member.address}
</p>


<p>
${member.phone}
</p>



<p>
Membership:
${member.membership === 3 ? "Gold" : "Silver"}
</p>



<a href="${member.url}">
Website
</a>

`;



        container.appendChild(card);



    });


}