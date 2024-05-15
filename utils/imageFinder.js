export const imageFinder = (nextHoursForecast) => {

    let condition;
    let conditions = [];

    for (let i = 0; i < nextHoursForecast.length; i++) {
        condition = nextHoursForecast[i].condition.text.trim();
        conditions.push(condition)
    }

    return conditions;
}