import React, { useState } from 'react';
import WeatherDetails from './WeatherDetails';
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultLocation);

    function handleResponse(response) {
        setWeatherData({
            loaded: true,
            location: response.data.name,
            date: new Date(response.data.dt * 1000),
            condition: response.data.weather[0].description,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        });
    }

    function search() {
        const apiKey = "cf96ae07a91844c140556e9c95593114";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleLocationChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.loaded) {
        return ( <
            div className = "Weather" >
            <
            form onSubmit = { handleSubmit } >
            <
            div className = "row" >
            <
            div className = "col-9" >
            <
            input type = "search"
            placeholder = "Enter city..."
            className = "form-control"
            autoFocus = "on"
            onChange = { handleLocationChange }
            / > < /
            div > <
            div className = "col-3" >
            <
            input type = "submit"
            value = "Search"
            className = "btn btn-outline-light w-100" / >
            <
            /div> < /
            div > <
            /form>  <
            WeatherDetails details = { weatherData }
            / > < /
            div >
        );
    } else {
        search();
        return "Loading...";
    }
}