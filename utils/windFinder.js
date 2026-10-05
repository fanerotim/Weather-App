export const windFinder = (forecast) => {
    let windDirection = forecast.current.wind_dir;

    switch(windDirection) {
        case 'N':
            return 'North wind';
        case 'NNE':
            return 'North-northeast wind';
        case 'NE':
            return 'Northeast wind';
        case 'ENE':
            return 'East-northeast wind';
        case 'E':
            return 'East wind';
        case 'ESE':
            return 'East-southeast wind';
        case 'SE':
            return 'Southeast wind';
        case 'SSE':
            return 'South-southeast wind';
        case 'S':
            return 'South wind';
        case 'SSW':
            return 'South-southwest wind';
        case 'SW':
            return 'Southwest wind';
        case 'WSW':
            return 'West-southwest wind';
        case 'W':
            return 'West wind';
        case 'WNW':
            return 'West-northwest wind';
        case 'NW':
            return 'Northwest wind';
        case 'NNW':
            return 'North-northwest wind';
    }          
}