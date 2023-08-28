# ISO 3166 Library

This package includes the official ISO-3166 information, exactly as they are provided by the ISO organization.
The [official publication](https://www.iso.org/obp/ui/#iso:pub:PUB500001:en) is available on the [ISO website](https://iso.org).

## Information included

### ISO 3166-1 Country Codes

Country codes are defined by ISO using 3 different type of codes:

- 2-byte alphanumeric code: example is `GB`
- 3-byte alphanumeric code: example is `GBR`
- 3-byte numeric code: example is `826`

For each country, also, the standard includes the following information:

- name: the short name used to call a country like `Greece`
- full name: the long official name for a country like `The Ellenic Republic`
- territories name: the list of territories part of a country. These are provided as a descriptive information
- administrative language: the list of official administrative languages adopted by a country. These contains [ISO 639-1](https://www.iso.org/iso-639-language-codes.html) codes (This list is not public unfortunately.).

### ISO 3166-2 Subdivision Codes

Subdivisions are administrative divisions applied within a country for administrative purposes. Subdivisions are defined by countries and not by ISO. Each country can define own subdivisions, the type of subdivision and also the hierarchies between them. ISO collects all subdivision and makes them avaible as ISO 3166-2 standared. The code for each subdivision is a composite key formed by the 2-byte alphanumeric country code and the local governmental code for the subdivision.

Each subdivision contains:

- the ISO code for the subdivision as `AS-08`
- the type of the subdivision as `Parish` or `Oblast`, etc.
- the name, example: `Escaldes-Engordany`
- the language in which the subdivison name is given. This is a 2-byte alphanumeric code as per ISO 639-1
- the variant of the name, which can be in provided in English or the local subdivision language
- the romanization system used for writing the subdivision name
- the parent subdivision ISO code, `EG-SHR`

In some country, the subdivision appears twice, as the name is officially in a double language. This is an example for Spain:

```json
{
  "code": "ES-NA",
  "name": "Nafarroa",
  "language": "eu"
}
```

and

```json
{
  "code": "ES-NA",
  "name": "Navarra",
  "language": "es"
}
```

Given the official administrative language in Spain is Spanish, the Spanish definition is probably the most commonly requested.

## Usage

This package can be imported as

```js
import * as iso3166 from '@lunaticmuch/iso3166'
```

### iso3166.getCountry(country)

Return a country given a code. The code can be either 2-byte or 3-byte alphanumeric, or 3-byte numeric.


### iso3166.getSubdivisionByLocal(country,code)

Return a subdivision given a country code and subdivision code.
The country code for subdivision must be a 2-byte alphanumeric code.
The code for the subdivision must be a local code (the second part of the ISO code, after the hyphen).

Valid examples:

```js
iso3166.getSubdivisionByLocal('it', 'mi')
```

### iso3166.getSubdivisionByISO(code)

Return a subdivision given a subdivision ISO code. The subdivision ISO code is a composite code formed by the country code, in 2-byte alphanumeric format and a a subdivision local code. These two parts separated by a hyphen.

Valid example:

```js
iso3166.getSubdivisionByISO('IT-MI')
```

## Differences with other packages

This package is not conceptually different from many others available online. However, they frequently lack in consistency with ISO library as they the focus on just the code and the description.
This package mirrors exactly all the ISO library, including those additional details which are not included in other third-parties packages, e.g. languages, territories or all names for a given country.

## Limits

The package does not include:

- ISO 3166-1 Reserved Codes: these codes are reserved by ISO organization for future usages, or just reserved for avoiding confusion, example `UK` is reserved.
- ISO 3166-3: This is a part of the standard which contains the change of codes between countries. It is not commonly used.

## To Do

[X] - Automate some test
[] - Include 3166-3
