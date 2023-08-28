import {iso31662} from './2'
import {iso31661} from './1'
import {Subdivision} from '../types/2'
import {Country} from '../types/1'

// Helper function for subdivisions
export function getSubdivisionByLocal(
  country: string,
  code: string
): Subdivision[] {
  const searchKey = `${country.toUpperCase()}-${code.toUpperCase()}`
  return iso31662.filter((o) => o.iso_code === searchKey)
}

// Get a subdivision by ISO code
export function getSubdivisionByISO(code: string): Subdivision[] {
  return iso31662.filter((o) => o.iso_code === code.toUpperCase())
}

// Helper function for countries
export function getCountry(country: string): Country | null {
  if (country.length == 2) {
    return iso31661.find(({alpha2}) => alpha2 === country.toUpperCase()) || null
  }

  if (country.length == 3 && country.match(/^[0-9]{3}$/)) {
    return iso31661.find(({numeric}) => numeric === country) || null
  } else {
    return iso31661.find(({alpha3}) => alpha3 === country.toUpperCase()) || null
  }
}
