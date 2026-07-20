const apiKey = "2553f197f1b54821a2a8e56723606b99";

const url =
    `https://api.openweathermap.org/data/2.5/forecast?lat=-25.9622&lon=32.4589&units=metric&appid=${apiKey}`;


export async function getWeather() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();

        showCurrent(data);
        showForecast(data);

    } catch (error) {

        console.error(error);

    }

}



function showCurrent(data) {

    document.querySelector("#temperature").textContent =
        `${Math.round(data.list[0].main.temp)}°C`;


    document.querySelector("#description").textContent =
        data.list[0].weather[0].description;

}



function showForecast(data) {

    const box = document.querySelector("#forecast");

    box.innerHTML = "";


    const days = [8, 16, 24];


    days.forEach(day => {

        const item = data.list[day];


        const date = new Date(item.dt_txt);


        const p = document.createElement("p");


        p.innerHTML = `
            <strong>
            ${date.toLocaleDateString("en-US", {
            weekday: "long"
        })}
            </strong>
            :
            ${Math.round(item.main.temp)}°C
        `;


        box.appendChild(p);

    });

}