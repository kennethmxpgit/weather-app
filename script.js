async function getWeather(cityName){   
    const response=await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='
        +cityName+'&appid=26c3caae75e49ab128795dab46359383'
        ,{mode:'cors'});
    data=await response.json();
    const response2=await fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat='
        +data.coord.lat+
        '&lon='
        +data.coord.lon+
        '&exclude=minutely,daily,alerts&appid=26c3caae75e49ab128795dab46359383'
        ,{mode:'cors'}
    );
    data2=await response2.json();
    console.log(data2);
    return data2;
}

getWeather('Surabaya');