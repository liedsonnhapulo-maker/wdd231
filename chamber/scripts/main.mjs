import { getWeather } from "./weather.mjs";

import { getSpotlights } from "./spotlight.mjs";


getWeather();

getSpotlights();
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