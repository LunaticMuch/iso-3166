import {iso31662} from './2.js'
import {iso31661} from './1.js'

// Helper function for subdivisions
export function subdivision(country, code) {
  if (typeof country === 'undefined') {
    return iso31662
  }

  if (typeof code === 'undefined') {
    // our iso-3166-2 data is in uppercase.
    code = country.trim().toUpperCase()
    var parts = code.split('-')

    // A full subdivision code must have exactly two parts.
    if (parts.length == 2) {
      country = parts[0]
      code = parts[1]
      return iso31662.find(
        ({country, code}) => country === country && code === code
      )
    }

    // If there's just one part, it's assume just the country name was passed.
    if (parts.length == 1) {
      country = parts[0]
      return iso31662.filter((sub) => sub.country === country)
    }
  }
}

// Helper function for countries
export function country(country) {
  if (typeof country === 'undefined') {
    return iso31661
  }

  if (country.length == 2) {
    return iso31661.find(({alpha2}) => alpha2 === country.toUpperCase())
  }

  if (country.length == 3 && country.match(/^[0-9]{3}$/)) {
    return iso31661.find(({numeric}) => numeric === country)
  } else {
    return iso31661.find(({alpha3}) => alpha3 === country.toUpperCase())
  }
}
