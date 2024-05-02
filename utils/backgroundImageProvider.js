export const backgroundImageProvider = (currentWeather) => {
    const condition = currentWeather.current.condition.text.toLowerCase();
    console.log(condition);
    let conditionName = '';

    if (condition.includes('cloudy') || condition.includes('overcast')) {
        conditionName = 'overcast'
    } else if (condition.includes('sunny') || condition.includes('clear')) {
        conditionName = 'sunny'
    } else if (condition.includes('thundery')) {
        conditionName = 'thundery'
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
        conditionName = 'rainy'
    } else if (condition.includes('mist')) {
        conditionName = 'mist';
    }
    
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url('./assets/background-img/${conditionName}.jpg')`
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundSize = "cover"
}