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