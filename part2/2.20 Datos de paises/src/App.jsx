import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import CountryInfo from './components/CountryInfo'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const data = await response.json()
            setCountries(data)
        }

        fetchCountries()
    }, [])

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        setSelectedCountry(null) // Reset selected country when filter changes
    }

    const handleCountrySelect = (country) => {
        setSelectedCountry(country)
    }

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            <label>
                find countries{' '}
                <input
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </label>
            {selectedCountry ? (
                <CountryInfo country={selectedCountry} />
            ) : (
                <Filter countries={filteredCountries} onSelectCountry={handleCountrySelect} />
            )}
        </div>
    )
}

export default App