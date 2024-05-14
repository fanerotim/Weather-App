import {html, render} from "../node_modules/lit-html/lit-html.js";

export function userForm(forecast, windDirection) {
    console.log('user-form', forecast)
    const formTemplate = () => html `
            <label for="cityInput">Location</label><br>
            <input type="text" placeholder="Search..." value="Plovdiv" id="cityInput" name="cityInput" autocomplete="off">
            <br>
            <button class="btn">Check Weather</button>

            <section class="temp-and-wind">
                <h1 class="temperature">${forecast.current.temp_c}°C</h1>
                <p class='feels-like'>Feels like ${forecast.current.feelslike_c}°C</p>
                <h2 class="wind"><span class='wind-direction'>${windDirection}</span>, ${forecast.current.wind_kph} km/h</h2>
            </section>
            

            <ul class="next-days">
                <p class="heading">Next 3 Days Forecast</p>
                
                ${forecast.forecast.forecastday.map(data => html `
        
                <section class="next-days-data">
                    <img class="weather-img" src="../assets/day/${data.day.condition.text.trim()}.png">

                    <div class="date-and-condition">
                        <p>${data.date}</p>
                        <p>${data.day.condition.text}</p>
                    </div>

                    <div class="max-and-min-temp">
                        <p>${data.day.maxtemp_c}</p>
                        <p>${data.day.mintemp_c}</p>
                    </div>

                </section>`)}
                
            </ul>`

    const formTemplateView = formTemplate();
    const containerUl = document.querySelector('.user-form');
    render(formTemplateView, containerUl);
}