import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ loaded: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            loaded: true,
            location: response.data.name,
            date: "Tuesday 14:00",
            condition: response.data.weather[0].description,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        });
    }

    if (weatherData.loaded) {
        return ( <
            div className = "Weather" >
            <
            form >
            <
            div className = "row" >
            <
            div className = "col-9" >
            <
            input type = "search"
            placeholder = "Enter city..."
            className = "form-control"
            autoFocus = "on" / >
            <
            /div> <
            div className = "col-3" >
            <
            input type = "submit"
            value = "Search"
            className = "btn btn-outline-light w-100" / >
            <
            /div> < /
            div > <
            /form> <
            h1 > { weatherData.location } < /h1>  <
            ul >
            <
            li > { weatherData.date } < /li> <
            li className = "text-capitalize" > { weatherData.condition } < /li> < /
            ul >
            <
            div className = "row mt-3" >
            <
            div className = "col-6" >
            <
            div className = "clearfix" >
            <
            img src = { weatherData.iconUrl }
            alt = { weatherData.description }
            className = "float-left" / >
            <
            div className = "float-left" >
            <
            span className = "temperature" > { Math.round(weatherData.temperature) } < /span> <span className="units">°C | °F</span > < /
            div > < /
            div > <
            /div>  <
            div className = "col-6" >
            <
            ul >
            <
            li > Humidity: { weatherData.humidity } % < /li> <
            li > Wind: { weatherData.wind }
            km / h < /li> < /
            ul > <
            /div> < /
            div > <
            /
            div >
        );
    } else {
        const apiKey = "cf96ae07a91844c140556e9c95593114";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultLocation}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}