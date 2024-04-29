import {html, render} from "../node_modules/lit-html/lit-html.js";

export function userForm(forecast, windDirection) {
    console.log('user form', forecast, windDirection)
    const formTemplate = () => html `
        <form class="user-form" action='' method="get">
            <label for="cityInput">Choose City</label><br>
            <input type="text" placeholder="Search..." value="Plovdiv" id="cityInput" name="cityInput" autocomplete="off">
            <br>
            <button class="btn">Check Weather</button>

            <section class="temp-and-wind">
                <h1 class="temperature">${forecast.current.temp_c}°C</h1>
                <h2 class="wind"><span class='wind-direction'>${windDirection}</span> ${forecast.current.wind_kph}km/h</h2>
            </section>
            

            <ul class="next-days">
                <p>The Next Days Forecast</p>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </form>
    `

    const formTemplateView = formTemplate();
    const containerUl = document.querySelector('.user-form');
    render(formTemplateView, containerUl);
}