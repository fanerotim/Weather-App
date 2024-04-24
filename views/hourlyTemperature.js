import { html, render } from "../node_modules/lit-html/lit-html.js"


export function hourlyTemp(nextHoursForecast) {
    const hourlyTemplate = () => html`
    ${nextHoursForecast.map((data) => html`
        <section class="hourly-card">
            <p class="hourly-time">
                ${data.time.split(' ')[1]}
            </p>

            <img src="./assets/day/116.png" alt="">

            <p class="hourly-temp">
                ${data.temp_c}°C
             </p>
        </section>`)}`;

    let hourlyTemplateView = hourlyTemplate();
    let hourlyUl = document.querySelector('.hourly-forecast');
    render(hourlyTemplateView, hourlyUl);
}

