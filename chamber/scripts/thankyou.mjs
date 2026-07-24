const getString = window.location.search;

console.log(getString);


const myinfo = new URLSearchParams(window.location.search);


const dateReceived = new Date().toLocaleString();


document.querySelector("#msg").innerHTML = `

    <p>Thank you for your application, 
    ${myinfo.get("fname")} ${myinfo.get("lname")}.</p>

    <p>Your organizational title is 
    ${myinfo.get("organization-title")}.</p>

    <p>Organization Name: 
    ${myinfo.get("organization")}</p>

    <p>Membership Level: 
    ${myinfo.get("membership")}</p>

    <p>Business Description: 
    ${myinfo.get("description")}</p>

    <p>Your Phone: 
    ${myinfo.get("phone")}</p>

    <p>Your email is 
    ${myinfo.get("email")}</p>

    <p>Application received on: 
    ${dateReceived}</p>

`;