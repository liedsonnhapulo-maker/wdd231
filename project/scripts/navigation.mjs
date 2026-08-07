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