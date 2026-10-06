import { html, render } from "../node_modules/lit-html/lit-html.js";

export function errorView(message) {
    const errorTemplate = () => html`
        ${message
            ? html`<p class="error-text">${message}</p>`
            : html``}
    `;

    const errorContainer = document.querySelector('.error-view');
    render(errorTemplate(), errorContainer);
}
