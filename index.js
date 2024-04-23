//provideData serves as a controller - calls the service to get data and returns it to renderData function
import { provideData } from "./controller.js";

import page from "./node_modules/page/page.mjs";

//getting form from html
const form = document.querySelector('form');
//creating variable that will hold user input and giving it initial (default) value
let cityInput = 'Plovdiv';

//rendering the default data
provideData(cityInput)

// I will leave this commented out for now and maybe implement it later if I add routing
// page('/', handleTest);
// page.start();

//attaching an event listener to the form to get the user input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    cityInput = Object.fromEntries(formData).cityInput;

    provideData(cityInput);
})








    




