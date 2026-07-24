const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
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

const getString = window.location.search;
console.log(getString)
const myinfo = new URLSearchParams(window.location.search);
const dateReceived = new Date().toLocaleString();

document.querySelector('#message').innerHTML = `
    <p>Thank you for your application, ${myinfo.get('fname')} ${myinfo.get('lname')}.</p>
    <p>Your organizational title is ${myinfo.get('organization-title')}.</p>
    <p>Organization Name: ${myinfo.get('organization')}</p>
    <p>Membership Level: ${myinfo.get('membership')}</p>
    <p>Business Description: ${myinfo.get('description')}</p>
    <p>Your Phone: ${myinfo.get('phone')}</p>
    <p>Your email is ${myinfo.get('email')}</p>
    <p>Application received on: ${dateReceived}</p>
`;

const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const openButton4 = document.querySelector("#openButton4");

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeButton");

openButton1.addEventListener("click", () => {
    dialogBoxText.textContent =
        "NP Membership: Community networking, chamber events, and nonprofit support opportunities.";

    dialogBox.showModal();
});

openButton2.addEventListener("click", () => {
    dialogBoxText.textContent =
        "Bronze Membership: Business directory listing, networking events, and basic advertising opportunities.";

    dialogBox.showModal();
});

openButton3.addEventListener("click", () => {
    dialogBoxText.textContent =
        "Silver Membership: Training sessions, promotions, and additional advertising opportunities.";

    dialogBox.showModal();
});

openButton4.addEventListener("click", () => {
    dialogBoxText.textContent =
        "Gold Membership: Premium advertising, homepage spotlight, exclusive events, and maximum visibility.";

    dialogBox.showModal();
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});