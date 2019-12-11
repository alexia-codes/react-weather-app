import React, { useState } from 'react';

export default function CurrentTemperature(props) {
    const [units, setUnits] = useState("metric");

    function displayFahrenheit(event) {
        event.preventDefault();
        setUnits("fahrenheit");
    }

    function displayCelcius(event) {
        event.preventDefault();
        setUnits("celcius");
    }

    function fahrenheit() {
        return (props.celcius * 9 / 5) + 32;
    }

    if (units === 'celcius') {
        return ( <
            div className = "CurrentTemperature" >
            <
            span className = "temperature" > { Math.round(props.celcius) } < /span> <
            span className = "units" > °C | ° < a href = "/"
            onClick = { displayFahrenheit } > F < /a > < /span > < /
            div >
        );
    } else {
        return ( <
            div className = "CurrentTemperature" >
            <
            span className = "temperature" > { Math.round(fahrenheit()) } < /span> <
            span className = "units" > < a href = "/"
            onClick = { displayCelcius } > °C < /a> | °F < /span > < /
            div >
        );
    }
}