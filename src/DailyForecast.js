import React, { useState } from 'react';
import WeatherIcons from './WeatherIcons';
import axios from 'axios';
import './DailyForecast.css';

export default function DailyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    function formatHours(date) {
        let hours = date.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hours}:${minutes}`;
    }

    if (loaded && forecast.city.name === props.city) {
        return ( <
            div className = "DailyForecast row" > {
                forecast.list.slice(0, 5).map(function(weather) {
                    return ( <
                        div className = "col" > { formatHours(new Date(weather.dt * 1000)) } <
                        WeatherIcons code = { weather.weather[0].icon }
                        /> { Math.round(weather.main.temp) }°
                        C <
                        /div>
                    );
                })
            } <
            /div>
        );
    } else {
        const apiKey = "cf96ae07a91844c140556e9c95593114";
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}