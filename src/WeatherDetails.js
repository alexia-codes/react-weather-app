import React from 'react';
import CurrentDate from './CurrentDate';
import WeatherIcons from './WeatherIcons';
import CurrentTemperature from './CurrentTemperature';

import './WeatherDetails.css';

export default function WeatherDetails(props) {
    return ( <
        div className = "WeatherDetails" >
        <
        h1 > { props.details.location } < /h1> <
        ul >
        <
        li > < CurrentDate date = { props.details.date }
        /></li >
        <
        li className = "text-capitalize" > { props.details.condition } < /li> < /
        ul > <
        div className = "row mt-3" >
        <
        div className = "col-6" >
        <
        div className = "clearfix" >
        <
        div className = "float-left" >
        <
        WeatherIcons code = { props.details.icon }
        /> < /
        div > <
        div className = "float-left" >
        <
        CurrentTemperature celcius = { props.details.temperature }
        /> <
        /
        div >
        <
        /div> < /
        div > <
        div className = "col-6" >
        <
        ul >
        <
        li > Humidity: { props.details.humidity } % < /li> <
        li > Wind: { props.details.wind }
        km / h < /li> < /
        ul > <
        /div> < /
        div > <
        /div>

    );
}