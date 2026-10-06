import { BASE_URL, API_KEY } from "./constants.js"

export const getCurrentWeather = async (city) => {

    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`)

        if (!response.ok) {
            const parsedResponse = await response.json();
            throw new Error(parsedResponse.error.message);
        }
        return response.json()
        
    } catch (err) {
        console.log('Error logged by service fn getCurrentWeather', err);
        throw err;
    }
}

export const getForecast = async (city) => {

    try {
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`)

        if (!response.ok) {
            const parsedResponse = await response.json();
            throw new Error(parsedResponse.error.message)
        }

        return response.json()

    } catch (err) {
        console.log('Error logged by service fn getForecast', err);
        throw err
    }
}