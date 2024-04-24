export const imageFinder = (nextHoursForecast) => {
    console.log(nextHoursForecast);

    let condition;
    let conditions = [];

    for (let i = 0; i < nextHoursForecast.length; i++) {
        condition = nextHoursForecast[i].condition.text;
        conditions.push(condition)
    }

    return conditions;
}