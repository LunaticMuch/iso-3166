export type Country = {
    name: string
    fullName?: string | null 
    territory?: string | null 
    independent: boolean
    state: string
    alpha2: string
    alpha3: string
    numeric: string
    languages: CountryLanguage[] | null
  }
  
  export type CountryLanguage = {
    alpha2: string | null
    alpha3: string
    name: string
  }
  