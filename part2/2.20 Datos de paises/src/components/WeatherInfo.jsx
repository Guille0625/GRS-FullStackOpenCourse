import React, { useEffect, useState } from 'react'

const WeatherInfo = ({ capital }) => {
    const [weather, setWeather] = useState(null)
    const apiKey = 'YOUR_API_KEY'

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
            )
            const data = await response.json()
            setWeather(data)
        }

        fetchWeather()
    }, [capital])

    if (!weather) {
        return <p>Loading weather data...</p>
    }

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Wind: {weather.wind.speed} m/s</p>
        </div>
    )
}

export default WeatherInfo