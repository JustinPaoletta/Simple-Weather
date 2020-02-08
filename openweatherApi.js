fetch('https://api.openweathermap.org/data/2.5/weather?q=Melbourne,USA&appid=8f08a4c697c5e042edf4508bb3311246')
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        $('#name').text(`${data.name}, ${data.sys.country}`);
        // Formula Kelvin => Fahrenheit (K − 273.15) × 9/5 + 32 = °F
        $('#temp').text(`${Math.round((data.main.temp - 273.15) * (9/5)+ 32)} °F`);
        $('#weather').text(`${data.weather[0].description.toUpperCase()}`);
        $('#feels_like').text(`(Feels like : ${Math.round((data.main.feels_like - 273.15) * (9/5)+ 32)})`);
        $('#temp_max').text(`H : ${Math.round((data.main.temp_max - 273.15) * (9/5)+ 32)} °F --- L : ${Math.round((data.main.temp_min - 273.15) * (9/5)+ 32)} °F`);
      
        
        let zoneNumber = (data.timezone / 60) / 60;
        switch (zoneNumber) {
            case 0:
                zoneNumber = 'Greenwich Mean Time'
                break;
            case -1:
                zoneNumber = 'East Greenland Time'
                break;
            case -2:
                zoneNumber = 'Brazilian Summer Time'
                break;
            case -3:
                zoneNumber = 'Atlantic Time'
                break;
            case -4:
                zoneNumber = 'Atlantic Time'
                break;
            case -5:
                zoneNumber = 'Eastern Time'
                break;
            case -6:
                zoneNumber = 'Central Time'
                break;
            case -7:
                zoneNumber = 'Mountain Time'
                break;
            case -8:
                zoneNumber = 'Pacific Time'
                break;
            case -9:
                zoneNumber = 'Alaska Time'
                break;
            case -10:
                zoneNumber = 'Tahiti Time'
                break;
            case -11:
                zoneNumber = 'Samoa Standard Time'
                break;
            case -12:
                zoneNumber = 'Anywhere on Earth'
                break;
            case 1:
                zoneNumber = 'Central European Time'
                break;
            case 2:
                zoneNumber = 'Eastern European Time'
                break;
            case 3:
                zoneNumber = 'Further-Eastern European Time'
                break;
            case 4:
                zoneNumber = 'Kuybyshev Time'
                break;
            case 5:
                zoneNumber = 'Pakistan Standard Time'
                break;
            case 6:
                zoneNumber = 'Bhutan Time'
                break;
            case 7:
                zoneNumber = 'Christmas Island Time'
                break;
            case 8:
                zoneNumber = 'Malaysia Time'
                break;
            case 9:
                zoneNumber = 'Eastern Indonesian Time'
                break;
            case 10:
                zoneNumber = 'Papua New Guinea Time'
                break;
            case 11:
                zoneNumber = 'Solomon Islands Time'
                break;
            case 12:
                zoneNumber = 'New Zealand Standard Time'
                break;
            case 13:
                zoneNumber = 'Tonga Time'
                break;
            case 14:
                zoneNumber = 'Line Islands Time'
                break;
            default:
                zoneNumber
        }
        $('#timezone').text(`${zoneNumber}`);
        // $('#coord').text(` longitude : ${data.coord.lon}° latitude : ${data.coord.lat}°`);
        $('#visibility').text(`Visibility : ${Math.round(data.visibility / 1609)} miles`);
        $('#pressure').text(`Pressure : ${data.main.pressure} mb`);
        $('#humidity').text(`Humidity : ${data.main.humidity} %`);
        let windDegree = data.wind.deg;
        switch (true) {
            case ((windDegree >= 348.75 && windDegree <= 360) || (windDegree >= 0 && windDegree <= 11.25)):
                windDegree = "N"
                break;
            case ((windDegree >= 11.26 && windDegree <= 33.75)):
                windDegree = "NNE"
                break;
            case ((windDegree >= 33.76 && windDegree <= 56.25)):
                windDegree = "NE"
                break;
            case ((windDegree >= 56.26 && windDegree <= 78.75)):
                windDegree = "ENE"
                break;
            case ((windDegree >= 78.76 && windDegree <= 101.25)):
                windDegree = "E"
                break;
            case ((windDegree >= 101.26 && windDegree <= 123.75)):
                windDegree = "ESE"
                break;
            case ((windDegree >= 123.76 && windDegree <= 146.25)):
                windDegree = "SE"
                break;
            case ((windDegree >= 146.26 && windDegree <= 168.75)):
                windDegree = "SSE"
                break;
            case ((windDegree >= 168.76 && windDegree <= 191.25)):
                windDegree = "S"
                break;
            case ((windDegree >= 191.26 && windDegree <= 213.75)):
                windDegree = "SSW"
                break;
            case ((windDegree >= 213.76 && windDegree <= 236.25)):
                windDegree = "SW"
                break;
            case ((windDegree >= 236.26 && windDegree <= 258.75)):
                windDegree = "WSW"
                break;
            case ((windDegree >= 258.76 && windDegree <= 281.25)):
                windDegree = "W"
                break;
            case ((windDegree >= 281.26 && windDegree <= 303.75)):
                windDegree = "WNW"
                break;
            case ((windDegree >= 303.76 && windDegree <= 326.25)):
                windDegree = "NW"
                break;
            case ((windDegree >= 326.26 && windDegree <= 348.75)):
                windDegree = "NNW"
                break;
            default:
                windDegree;
        }
        $('#wind').text(`WIND : ${Math.round(data.wind.speed * 2.237)} MPH ${windDegree}`);
        $('#cloudcover').text(`Cloud Coverage : ${data.clouds.all}%`);
        let unixSunRise = data.sys.sunrise;
        let dateRise = new Date(unixSunRise * 1000);
        $('#sunrise').text(`Sunrise : ${dateRise.toTimeString().substring(1,9)}AM`);
        let unixSunSet = data.sys.sunset;
        let dateSet = new Date(unixSunSet * 1000);
        $('#sunset').text(`Sunset : ${dateSet.toTimeString().substring(0,9)}PM`);
        
    })


    .catch((error) => console.error('Something Went Wrong Fetching Data!'))


    fetch("https://uphere-space1.p.rapidapi.com/satellite/20580/location?period=92.5&lng=-122.374199&lat=47.6484346", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "uphere-space1.p.rapidapi.com",
            "x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
        }
    })
    .then(response => {
        console.log(response.json());
    })
    .catch(err => {
        console.log(err);
    });


    fetch("https://api-basketball.p.rapidapi.com/games?date=2020-01-31", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-basketball.p.rapidapi.com",
            "x-rapidapi-key": "e76428b02cmsh7df655e1119d288p1270adjsn22cf824dc6b2"
        }
    })
    .then(response => {
        console.log(response.json());
    })
    .catch(err => {
        console.log(err);
    });





   