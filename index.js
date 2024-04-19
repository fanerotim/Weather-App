function requestData() {
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY ')
        .then(data => console.log(data))
}
