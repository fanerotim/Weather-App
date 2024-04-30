export const imageFinder = (nextHoursForecast) => {

    let condition;
    let conditions = [];

    for (let i = 0; i < nextHoursForecast.length; i++) {
        condition = nextHoursForecast[i].condition.text;
        conditions.push(condition)
    }

    return conditions;
}