import React from 'react';
import './Weather.css';

export default function Weather() {
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
        h1 > Lisbon < /h1>  <
        ul >
        <
        li > Monday 21: 00 < /li> <
        li > Clear < /li> < /
        ul >
        <
        div className = "row mt-3" >
        <
        div className = "col-6" >
        <
        div className = "clearfix" >
        <
        img src = "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt = "Clear"
        className = "float-left" / >
        <
        div className = "float-left" >
        <
        span className = "temperature" > 12 < /span> <span className="units">°C | °F</span > < /
        div > < /
        div > <
        /div>  <
        div className = "col-6" >
        <
        ul >
        <
        li > Precipation: 70 % < /li> <
        li > Humidity: 87 % < /li> <
        li > Wind: 26 km / h < /li> < /
        ul > <
        /div> < /
        div > <
        /
        div >
    );
}