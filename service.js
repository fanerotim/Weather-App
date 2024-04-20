import { BASE_URL, API_KEY } from "./constants.js"

export const currentWeather = (city) => {

    fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
        .then(res => res.json())
        .then(result => console.log(result));
}