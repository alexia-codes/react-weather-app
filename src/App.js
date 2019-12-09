import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        div className = "container" >
        <
        header className = "App-header" >
        <
        big > React Weather App < /big>  < /
        header >
        <
        section className = "App-section" >
        <
        Weather / >
        <
        /section> <
        footer className = "App-footer" >
        <
        small >
        <
        a href = "https://github.com/alexia-codes/react-weather-app"
        target = "_blank" > Open - source code < /a> by <a href = "https:/ / github.com / alexia - codes " target = "
        _blank ">Alexia Katrantzis</a> for <a href = "
        https: //www.shecodes.io/" target = "_blank">SheCodes</a>.
        <
        /small> < /
        footer > < /
        div > < /
        div >
    );
}

export default App;