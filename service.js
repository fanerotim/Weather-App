import { BASE_URL, API_KEY } from "./constants.js"

export const currentWeather = async (city) => {
    return fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)
        .then(res => res.json())
}

export const forecast = async (city) => {
    return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}`)
        .then(res => res.json())
}