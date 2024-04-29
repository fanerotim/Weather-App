export const windFinder = (forecast) => {
    let windDirection = forecast.current.wind_dir;
    let wind = '';

    switch(windDirection) {
        case 'N':
            return wind = 'North wind';
        case 'NNE':
            return wind = 'North-northeast wind';
        case 'NE':
            return wind = 'Northeast wind';
        case 'ENE':
            return wind = 'East-northeast wind';
        case 'E':
            return wind = 'East wind';
        case 'ESE':
            return wind = 'East-southeast wind';
        case 'SE':
            return wind = 'Southeast wind';
        case 'SSE':
            return wind = 'South-southeast wind';
        case 'S':
            return wind = 'South wind';
        case 'SSW':
            return wind = 'South-southwest wind';
        case 'SW':
            return wind = 'Southwest wind';
        case 'WSW':
            return wind = 'West-southwest wind';
        case 'W':
            return wind = 'West wind';
        case 'WNW':
            return wind = 'West-northwest wind';
        case 'NW':
            return wind = 'Northwest wind';
        case 'NNW':
            return wind = 'North-northwest wind';
    }
    
}