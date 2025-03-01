import React from 'react'
import CountryInfo from './CountryInfo'

const Filter = ({ countries, onSelectCountry }) => {
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length === 1) {
        return <CountryInfo country={countries[0]} />
    }

    return (
        <div>
            {countries.map((country) => (
                <div key={country.name.common}>
                    <span>{country.name.common} </span>
                    <button onClick={() => onSelectCountry(country)}>show</button>
                </div>
            ))}
        </div>
    )
}

export default Filter