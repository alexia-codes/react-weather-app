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
        big > A Weather App < /big>  < /
        header >
        <
        section className = "App-section" >
        <
        Weather defaultLocation = "Lisbon" / >
        <
        /section> <
        footer className = "App-footer" >
        <
        small >
        <
        a href = "https://github.com/alexia-codes/react-weather-app"
        target = "_blank" > Open - source code < /a> by <a href = "https:/ / github.com / alexia - codes " target = "
        _blank ">Alexia Katrantzis</a>. Created with React. <
        /small> < /
        footer > < /
        div > < /
        div >
    );
}

export default App;