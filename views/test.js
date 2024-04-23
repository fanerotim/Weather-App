import { html, render } from "../node_modules/lit-html/lit-html.js";


export function handleTest(forecast) {
    const testTemplate = () => html`
    ${forecast.forecast.forecastday[0].hour.map((temp) => html`
    <li>
        ${temp.temp_c}
    </li><span> : </span>`)}`;

    let templateView = testTemplate();
    let ulEl = document.querySelector('.hourly-forecast');
    render(templateView, ulEl);
}

