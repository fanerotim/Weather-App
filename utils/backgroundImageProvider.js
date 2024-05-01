export const backgroundImageProvider = (currentWeather) => {
    const condition = currentWeather.current.condition.text;
    console.log(condition);
    let conditionName = '';

    if (condition.includes('cloudy') || condition.includes('Overcast')) {
        conditionName = 'overcast'
    } else if (condition.includes('Sunny') || condition.includes('Clear')) {
        conditionName = 'sunny'
    } else if (condition.includes('Thundery')) {
        conditionName = 'thundery'
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
        conditionName = 'rainy'
    }
    
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url('./assets/background-img/${conditionName}.jpg')`
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundSize = "cover"
}