import { useState, useEffect } from 'react'
import countryService from '../services/countries'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name) {
      countryService
        .getCountry(name)
        .then((countryInfo) => setCountry(countryInfo))
        .catch((error) => {
          console.error('Error fetching country:', error)
        })
    }
  }, [name])

  console.log(country)

  return country
}
