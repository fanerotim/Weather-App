import { BASE_URL, API_KEY } from "./constants.js"

export const getCurrentWeather = async (city) => {
    return fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
        .then(res => res.json())
        .catch(err => {throw err})
}

export const getForecast = async (city) => {
    return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`)
        .then(res => res.json())
        .catch(err => {throw err})
}