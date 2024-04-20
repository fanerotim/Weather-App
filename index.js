import * as httpService from "./service.js"

//getting form from html
const form = document.querySelector('form');
//creating variable that will hold user input
let cityInput = 'Plovdiv';
apiCalls(cityInput)

//attaching an event listener to the form to get the user input
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    cityInput = Object.fromEntries(formData).cityInput;

    apiCalls(cityInput);
})

// making API calls once user provides input
async function apiCalls(cityInput) {
    const forecast = await httpService.forecast(cityInput);
    const current = await httpService.currentWeather(cityInput);

    let city = document.getElementById('city');
    city.textContent = current.location.name;

    //clear input after user provides data
    let input = document.querySelector('input');
    input.value = '';

    let hourlyForecast = forecast.forecast.forecastday[0].hour;
    console.log(hourlyForecast)
    let hourUl = document.querySelector('.hour');
    
    for (let i = 0; i < hourUl.children.length; i++) {
        hourUl.children[i].textContent = `${hourlyForecast[i].time} - ${hourlyForecast[i].temp_c}c`
    }
}

    




