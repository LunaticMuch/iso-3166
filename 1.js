/**
 * @typedef ISO31661Entry
 *   Object that defines codes for the names of countries, dependent territories, administrative languages
 * @property {string} name
 *   Name (example: `'Greece'`)
 * @property {string} fullName
 *   The full name (example: `'the Hellenic Republic'`)
 * @property {string} territory
 *   The description of territories in a given state (example: `'Mount Athos autonomous area'`)
 * @property {boolean} independent
 *   Whether the state is independent or not
 * @property {'assigned'} state
 *   Status of code (example: `'assigned'`)
 * @property {string} alpha2
 *   ISO 3166-1 alpha-2 code (example: `'GR'`)
 * @property {string} alpha3
 *   ISO 3166-1 alpha-3 code (example: `'GRC'`)
 * @property {string} numeric
 *   ISO 3166-1 numeric (UN M49) code (example: `'300'`)
 * @property {Array<ISO31661EntryAdministrativeLanguage>} languages
 *   Administrative languages in a State
 */

/**
 * @typedef ISO31661EntryAdministrativeLanguage
 *   Object that defines administrative language in a state
 * @property {string} alpha2
 *   The ISO 639-1 2-byte code for a language, example: `'en'`
 * @property {string} alpha3
 *   The ISO 639-1 3-byte code for a language, example: `'eng'`
 * @property {string} name
 *   The ISO 639-1 language name, example `'English'`
 */

/**
 * List of assigned countries.
 *
 * @type {Array<ISO31661Entry>}
 */
export const iso31661 = [
  {
    name: 'Andorra',
    fullName: 'the Principality of Andorra',
    territory: null,
    state: 'assigned',
    alpha2: 'AD',
    alpha3: 'AND',
    numeric: '020',
    languages: [
      {
        alpha2: 'ca',
        alpha3: 'cat',
        name: 'Andorrae'
      }
    ]
  },
  {
    name: 'United Arab Emirates (the)',
    fullName: 'the United Arab Emirates',
    territory: null,
    state: 'assigned',
    alpha2: 'AE',
    alpha3: 'ARE',
    numeric: '784',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Imārāt'
      }
    ]
  },
  {
    name: 'Afghanistan',
    fullName: 'the Islamic Republic of Afghanistan',
    territory: null,
    state: 'assigned',
    alpha2: 'AF',
    alpha3: 'AFG',
    numeric: '004',
    languages: [
      {
        alpha2: 'fa',
        alpha3: 'fas',
        name: 'Afghānistān'
      },
      {
        alpha2: 'ps',
        alpha3: 'pus',
        name: 'Afghānistān'
      }
    ]
  },
  {
    name: 'Antigua and Barbuda',
    fullName: null,
    territory: 'Redonda Island',
    state: 'assigned',
    alpha2: 'AG',
    alpha3: 'ATG',
    numeric: '028',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'English'
      }
    ]
  },
  {
    name: 'Anguilla',
    fullName: null,
    territory: null,
    state: 'assigned',
    alpha2: 'AI',
    alpha3: 'AIA',
    numeric: '660',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Anguilla'
      }
    ]
  },
  {
    name: 'Albania',
    fullName: 'the Republic of Albania',
    territory: null,
    state: 'assigned',
    alpha2: 'AL',
    alpha3: 'ALB',
    numeric: '008',
    languages: [
      {
        alpha2: 'sq',
        alpha3: 'sql',
        name: 'Shqipëria; Shqipëri'
      }
    ]
  },
  {
    name: 'Armenia',
    fullName: 'the Repulic of Armenia',
    territory: null,
    state: 'assigned',
    alpha2: 'AM',
    alpha3: 'ARM',
    numeric: '051',
    languages: [
      {
        alpha2: 'hy',
        alpha3: 'hye',
        name: 'Hayastan'
      }
    ]
  },
  {
    name: 'Angola',
    fullName: 'the Republic of Angola',
    territory: 'Cabinda',
    state: 'assigned',
    alpha2: 'AO',
    alpha3: 'AGO',
    numeric: '024',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Angola'
      }
    ]
  },
  {
    name: 'Antarctica',
    fullName: null,
    territory: null,
    state: 'assigned',
    alpha2: 'AQ',
    alpha3: 'ATA',
    numeric: '010',
    languages: null
  },
  {
    name: 'Argentina',
    fullName: 'he Argentine Republic',
    territory: null,
    state: 'assigned',
    alpha2: 'AR',
    alpha3: 'ARG',
    numeric: '032',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Argentina (la)'
      }
    ]
  },
  {
    name: 'American Samoa',
    fullName: null,
    territory: "Swain's Island, Tutuila",
    state: 'assigned',
    independent: false,
    alpha2: 'AS',
    alpha3: 'ASM',
    numeric: '016',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'American Samoa'
      }
    ]
  },
  {
    name: 'Austria',
    fullName: 'the Republic of Austria',
    territory: null,
    state: 'assigned',
    alpha2: 'AT',
    alpha3: 'AUT',
    numeric: '040',
    languages: [
      {
        alpha2: 'de',
        alpha3: 'deu',
        name: 'Österreich'
      }
    ]
  },
  {
    name: 'Australia',
    fullName: null,
    territory: null,
    state: 'assigned',
    alpha2: 'AU',
    alpha3: 'AUS',
    numeric: '036',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Australia'
      }
    ]
  },
  {
    name: 'Aruba',
    state: 'assigned',
    alpha2: 'AW',
    alpha3: 'ABW',
    independent: false,
    numeric: '533',
    languages: [
      {
        alpha2: 'nl',
        alpha3: 'nld',
        name: 'Aruba'
      },
      {
        alpha2: null,
        alpha3: 'pap',
        name: 'Aruba'
      }
    ]
  },
  {
    name: 'Åland Islands',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'AX',
    alpha3: 'ALA',
    numeric: '248',
    languages: [
      {
        alpha2: 'sv',
        alpha3: 'swe',
        name: 'Åland'
      }
    ]
  },
  {
    name: 'Azerbaijan',
    fullName: 'the Republic of Azerbaijan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'AZ',
    alpha3: 'AZE',
    numeric: '031',
    languages: [
      {
        alpha2: 'az',
        alpha3: 'aze',
        name: 'Azərbaycan'
      }
    ]
  },
  {
    name: 'Bosnia and Herzegovina',
    fullName: null,
    territory: 'Herzegovina',
    independent: true,
    state: 'assigned',
    alpha2: 'BA',
    alpha3: 'BIH',
    numeric: '070',
    languages: [
      {
        alpha2: 'bs',
        alpha3: 'bos',
        name: 'Bosna i Hercegovina'
      },
      {
        alpha2: 'hr',
        alpha3: 'hrv',
        name: 'Bosna i Hercegovina'
      },
      {
        alpha2: 'sr',
        alpha3: 'srp',
        name: 'Bosna i Hercegovina'
      }
    ]
  },
  {
    name: 'Barbados',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BB',
    alpha3: 'BRB',
    numeric: '052',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Barbados'
      }
    ]
  },
  {
    name: 'Bangladesh',
    fullName: "the People's Republic of Banglades",
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BD',
    alpha3: 'BGD',
    numeric: '050',
    languages: [
      {
        alpha2: 'bn',
        alpha3: 'ben',
        name: 'Bāṁlādesh'
      }
    ]
  },
  {
    name: 'Belgium',
    fullName: 'the Kingdom of Belgium',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BE',
    alpha3: 'BEL',
    numeric: '056',
    languages: [
      {
        alpha2: 'de',
        alpha3: 'deu',
        name: 'Belgien'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Belgique (la)'
      },
      {
        alpha2: 'nl',
        alpha3: 'nld',
        name: 'België'
      }
    ]
  },
  {
    name: 'Burkina Faso',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BF',
    alpha3: 'BFA',
    numeric: '854',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Burkina Faso (le)'
      }
    ]
  },
  {
    name: 'Bulgaria',
    fullName: 'the Republic of Bulgaria',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BG',
    alpha3: 'BGR',
    numeric: '100',
    languages: [
      {
        alpha2: 'bg',
        alpha3: 'bul',
        name: 'Bulgaria'
      }
    ]
  },
  {
    name: 'Bahrain',
    fullName: 'the Kingdom of Bahrain',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BH',
    alpha3: 'BHR',
    numeric: '048',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Baḩrayn'
      }
    ]
  },
  {
    name: 'Burundi',
    fullName: 'the Republic of Burundi',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BI',
    alpha3: 'BDI',
    numeric: '108',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Burundi (le)'
      },
      {
        alpha2: 'rn',
        alpha3: 'run',
        name: 'Burundi'
      }
    ]
  },
  {
    name: 'Benin',
    fullName: 'the Republic of Benin',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BJ',
    alpha3: 'BEN',
    numeric: '204',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Bénin (le)'
      }
    ]
  },
  {
    name: 'Saint Barthélemy',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'BL',
    alpha3: 'BLM',
    numeric: '652',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Saint-Barthélemy'
      }
    ]
  },
  {
    name: 'Bermuda',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'BM',
    alpha3: 'BMU',
    numeric: '060',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Bermuda'
      }
    ]
  },
  {
    name: 'Brunei Darussalam',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BN',
    alpha3: 'BRN',
    numeric: '096',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Brunei Darussalam'
      },
      {
        alpha2: 'ms',
        alpha3: 'msa',
        name: 'Negara Brunei Darussalam'
      }
    ]
  },
  {
    name: 'Bolivia (Plurinational State of)',
    fullName: 'the Plurinational State of Bolivia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BO',
    alpha3: 'BOL',
    numeric: '068',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Bolivia, Estado Plurinacional de'
      }
    ]
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    fullName: null,
    territory: 'Bonaire, Saba, Sint Eustatius',
    independent: false,
    state: 'assigned',
    alpha2: 'BQ',
    alpha3: 'BES',
    numeric: '535',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Bonaire, Sint Eustatius and Saba'
      },
      {
        alpha2: 'nl',
        alpha3: 'nld',
        name: 'Bonaire, Sint Eustatius en Saba'
      },
      {
        alpha2: null,
        alpha3: 'pap',
        name: 'Boneiru, Sint Eustatius y Saba'
      }
    ]
  },
  {
    name: 'Brazil',
    fullName: 'the Federative Republic of Brazil',
    territory:
      'Fernando de Noronha Island, Martim Vaz Islands, Trindade Island',
    state: 'assigned',
    alpha2: 'BR',
    alpha3: 'BRA',
    numeric: '076',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Brasil (o)'
      }
    ]
  },
  {
    name: 'Bahamas',
    fullName: 'the Commonwealth of the Bahamas',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BS',
    alpha3: 'BHS',
    numeric: '044',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Bahamas (the)'
      }
    ]
  },
  {
    name: 'Bhutan',
    fullName: 'the Kingdom of Bhutan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BT',
    alpha3: 'BTN',
    numeric: '064',
    languages: [
      {
        alpha2: 'dz',
        alpha3: 'dzo',
        name: 'Druk-Yul'
      }
    ]
  },
  {
    name: 'Bouvet Island',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'BV',
    alpha3: 'BVT',
    numeric: '074',
    languages: [
      {
        alpha2: 'nn',
        alpha3: 'nno',
        name: 'Bouvetøya'
      },
      {
        alpha2: 'nb',
        alpha3: 'nbo',
        name: 'Bouvetøya'
      }
    ]
  },
  {
    name: 'Botswana',
    fullName: 'the Republic of Botswana',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BW',
    alpha3: 'BWA',
    numeric: '072',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Botswana'
      }
    ]
  },
  {
    name: 'Belarus',
    fullName: 'the Republic of Belarus',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BY',
    alpha3: 'BLR',
    numeric: '112',
    languages: [
      {
        alpha2: 'be',
        alpha3: 'bel',
        name: 'Bielaruś'
      },
      {
        alpha2: 'ru',
        alpha3: 'rus',
        name: "Belarus'"
      }
    ]
  },
  {
    name: 'Belize',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'BZ',
    alpha3: 'BLZ',
    numeric: '084',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Belize'
      }
    ]
  },
  {
    name: 'Canada',
    fullName: null,
    territory: null,
    independent: null,
    state: 'assigned',
    alpha2: 'CA',
    alpha3: 'CAN',
    numeric: '124',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Canada'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Canada (le)'
      }
    ]
  },
  {
    name: 'Cocos (Keeling) Islands',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'CC',
    alpha3: 'CCK',
    numeric: '166',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Cocos (Keeling) Islands (the)'
      }
    ]
  },
  {
    name: 'Congo, Democratic Republic of the',
    fullName: 'the Democratic Republic of the Congo',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CD',
    alpha3: 'COD',
    numeric: '180',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Congo (la République démocratique du)'
      }
    ]
  },
  {
    name: 'Central African Republic',
    fullName: 'the Central African Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CF',
    alpha3: 'CAF',
    numeric: '140',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'République centrafricaine (la)'
      },
      {
        alpha2: 'sg',
        alpha3: 'sag',
        name: 'Ködörösêse tî Bêafrîka)'
      }
    ]
  },
  {
    name: 'Congo',
    fullName: 'the Republic of the Congo',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CG',
    alpha3: 'COG',
    numeric: '178',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Congo (le)'
      }
    ]
  },
  {
    name: 'Switzerland',
    fullName: 'the Swiss Confederation',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CH',
    alpha3: 'CHE',
    numeric: '756',
    languages: [
      {
        alpha2: 'de',
        alpha3: 'deu',
        name: 'Schweiz (die)'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Suisse (la)'
      },
      {
        alpha2: 'it',
        alpha3: 'ita',
        name: 'Svizzera (la)'
      },
      {
        alpha2: 'rm',
        alpha3: 'roh',
        name: 'Svizra (la)'
      }
    ]
  },
  {
    name: "Côte d'Ivoire",
    fullName: "the Republic of Côte d'Ivoire",
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CI',
    alpha3: 'CIV',
    numeric: '384',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: "Côte d'Ivoire (la)"
      }
    ]
  },
  {
    name: 'Cook Islands',
    fullName: null,
    territory: 'Rarotonga',
    independent: false,
    state: 'assigned',
    alpha2: 'CK',
    alpha3: 'COK',
    numeric: '184',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Cook Islands (the)'
      }
    ]
  },
  {
    name: 'Chile',
    fullName: 'the Republic of Chile',
    territory:
      'Easter Island, Juan Fernández Islands, Sala y Gómez Island, San Ambrosio Island, San Félix Island',
    independent: true,
    state: 'assigned',
    alpha2: 'CL',
    alpha3: 'CHL',
    numeric: '152',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Chile'
      }
    ]
  },
  {
    name: 'Cameroon',
    fullName: 'the Republic of Cameroon',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CM',
    alpha3: 'CMR',
    numeric: '120',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Cameroon'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Cameroun (le)'
      }
    ]
  },
  {
    name: 'China',
    fullName: "the People's Republic of China",
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CN',
    alpha3: 'CHN',
    numeric: '156',
    languages: [
      {
        alpha2: 'zh',
        alpha3: 'zho',
        name: 'Zhongguo'
      }
    ]
  },
  {
    name: 'Colombia',
    fullName: 'the Republic of Colombia',
    territory: 'Malpelo Island, San Andrés y Providencia Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'CO',
    alpha3: 'COL',
    numeric: '170',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Colombia'
      }
    ]
  },
  {
    name: 'Costa Rica',
    fullName: 'the Republic of Costa Rica',
    territory: 'Coco Island',
    independent: true,
    state: 'assigned',
    alpha2: 'CR',
    alpha3: 'CRI',
    numeric: '188',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Costa Rica'
      }
    ]
  },
  {
    name: 'Cuba',
    fullName: 'the Republic of Cuba',
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'CU',
    alpha3: 'CUB',
    numeric: '192',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Cuba'
      }
    ]
  },
  {
    name: 'Cabo Verde',
    fullName: 'the Republic of Cabo Verde',
    territory: 'São Tiago, São Vicente',
    independent: true,
    state: 'assigned',
    alpha2: 'CV',
    alpha3: 'CPV',
    numeric: '132',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Cabo Verde'
      }
    ]
  },
  {
    name: 'Curaçao',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'CW',
    alpha3: 'CUW',
    numeric: '531',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Curaçao'
      },
      {
        alpha2: 'nl',
        alpha3: 'nld',
        name: 'Curaçao'
      },
      {
        alpha2: null,
        alpha3: 'pap',
        name: 'Kòrsou'
      }
    ]
  },
  {
    name: 'Christmas Island',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'CX',
    alpha3: 'CXR',
    numeric: '162',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Christmas Island'
      }
    ]
  },
  {
    name: 'Cyprus',
    fullName: 'the Republic of Cyprus',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CY',
    alpha3: 'CYP',
    numeric: '196',
    languages: [
      {
        alpha2: 'el',
        alpha3: 'ell',
        name: 'Kýpros'
      },
      {
        alpha2: 'tr',
        alpha3: 'tur',
        name: 'Kıbrıs'
      }
    ]
  },
  {
    name: 'Czechia',
    fullName: 'the Czech Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'CZ',
    alpha3: 'CZE',
    numeric: '203',
    languages: [
      {
        alpha2: 'cs',
        alpha3: 'ces',
        name: 'Česko'
      }
    ]
  },
  {
    name: 'Germany',
    fullName: 'the Federal Republic of Germany',
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'DE',
    alpha3: 'DEU',
    numeric: '276',
    languages: [
      {
        alpha2: 'de',
        alpha3: 'deu',
        name: 'Deutschland'
      }
    ]
  },
  {
    name: 'Djibouti',
    fullName: 'the Republic of Djibouti',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'DJ',
    alpha3: 'DJI',
    numeric: '262',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Jībūtī'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Djibouti'
      }
    ]
  },
  {
    name: 'Denmark',
    fullName: 'the Kingdom of Denmark',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'DK',
    alpha3: 'DNK',
    numeric: '208',
    languages: [
      {
        alpha2: 'da',
        alpha3: 'dan',
        name: 'Danmark'
      }
    ]
  },
  {
    name: 'Dominica',
    fullName: 'the Commonwealth of Dominica',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'DM',
    alpha3: 'DMA',
    numeric: '212',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Dominica'
      }
    ]
  },
  {
    name: 'Dominican Republic',
    fullName: 'the Dominican Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'DO',
    alpha3: 'DOM',
    numeric: '214',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'República Dominicana (la)'
      }
    ]
  },
  {
    name: 'Algeria',
    fullName: "the People's Democratic Republic of Algeria",
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'DZ',
    alpha3: 'DZA',
    numeric: '012',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: "Al Jazā'ir"
      }
    ]
  },
  {
    name: 'Ecuador',
    fullName: 'the Republic of Ecuador',
    territory: 'Galápagos Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'EC',
    alpha3: 'ECU',
    numeric: '218',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Ecuador (el)'
      }
    ]
  },
  {
    name: 'Estonia',
    fullName: 'the Republic of Estonia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'EE',
    alpha3: 'EST',
    numeric: '233',
    languages: [
      {
        alpha2: 'et',
        alpha3: 'est',
        name: 'Eesti'
      }
    ]
  },
  {
    name: 'Egypt',
    fullName: 'the Arab Republic of Egypt',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'EG',
    alpha3: 'EGY',
    numeric: '818',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Mişr'
      }
    ]
  },
  {
    name: 'Western Sahara',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'EH',
    alpha3: 'ESH',
    numeric: '732',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: "Aş Şaḩrā' al Gharbīyah"
      }
    ]
  },
  {
    name: 'Eritrea',
    fullName: 'the State of Eritrea',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ER',
    alpha3: 'ERI',
    numeric: '232',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Irītrīyā'
      },
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Eritrea'
      },
      {
        alpha2: 'ti',
        alpha3: 'tir',
        name: 'Iertra'
      }
    ]
  },
  {
    name: 'Spain',
    fullName: 'the Kingdom of Spain',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ES',
    alpha3: 'ESP',
    numeric: '724',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'España'
      }
    ]
  },
  {
    name: 'Ethiopia',
    fullName: 'the Federal Democratic Republic of Ethiopia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ET',
    alpha3: 'ETH',
    numeric: '231',
    languages: [
      {
        alpha2: 'am',
        alpha3: 'amh',
        name: "Ītyop'iya"
      }
    ]
  },
  {
    name: 'Finland',
    fullName: 'the Republic of Finland',
    territory: 'Åland Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'FI',
    alpha3: 'FIN',
    numeric: '246',
    languages: [
      {
        alpha2: 'fi',
        alpha3: 'fin',
        name: 'Suomi'
      },
      {
        alpha2: 'sv',
        alpha3: 'swe',
        name: 'Finland'
      }
    ]
  },
  {
    name: 'Fiji',
    fullName: 'the Republic of Fiji',
    territory: 'Rotuma Island, Vanua Levu, Viti Levu',
    independent: true,
    state: 'assigned',
    alpha2: 'FJ',
    alpha3: 'FJI',
    numeric: '242',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Fiji'
      },
      {
        alpha2: 'fj',
        alpha3: 'fij',
        name: 'Viti'
      }
    ]
  },
  {
    name: 'Falkland Islands (Malvinas)',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'FK',
    alpha3: 'FLK',
    numeric: '238',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Falkland Islands (the) [Malvinas]'
      }
    ]
  },
  {
    name: 'Micronesia (Federated States of)',
    fullName: 'the Federated States of Micronesia',
    territory: 'Caroline Islands , Chuuk, Kosrae, Pohnpei, Yap',
    independent: true,
    state: 'assigned',
    alpha2: 'FM',
    alpha3: 'FSM',
    numeric: '583',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Micronesia (Federated States of)'
      }
    ]
  },
  {
    name: 'Faroe Islands',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'FO',
    alpha3: 'FRO',
    numeric: '234',
    languages: [
      {
        alpha2: 'da',
        alpha3: 'dan',
        name: 'Færøerne'
      },
      {
        alpha2: 'fo',
        alpha3: 'fao',
        name: 'Føroyar'
      }
    ]
  },
  {
    name: 'France',
    fullName: 'the French Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'FR',
    alpha3: 'FRA',
    numeric: '250',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'France (la)'
      }
    ]
  },
  {
    name: 'Gabon',
    fullName: 'the Gabonese Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GA',
    alpha3: 'GAB',
    numeric: '266',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Gabon (le)'
      }
    ]
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    fullName: 'the United Kingdom of Great Britain and Northern Ireland',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GB',
    alpha3: 'GBR',
    numeric: '826',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'United Kingdom of Great Britain and Northern Ireland (the)'
      }
    ]
  },
  {
    name: 'Grenada',
    fullName: null,
    territory: 'Carriacou, Southern Grenadine Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'GD',
    alpha3: 'GRD',
    numeric: '308',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Grenada'
      }
    ]
  },
  {
    name: 'Georgia',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GE',
    alpha3: 'GEO',
    numeric: '268',
    languages: [
      {
        alpha2: 'ka',
        alpha3: 'kat',
        name: 'Sakartvelo'
      }
    ]
  },
  {
    name: 'French Guiana',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'GF',
    alpha3: 'GUF',
    numeric: '254',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Guyane française (la )'
      }
    ]
  },
  {
    name: 'Guernsey',
    fullName: null,
    territory:
      'Alderney Island  , Brecqhou Island , Burhou Island, Sark Island , Herm Island, Jethou Island, Lihou Island, Little Sark Island',
    independent: false,
    state: 'assigned',
    alpha2: 'GG',
    alpha3: 'GGY',
    numeric: '831',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Guernesey'
      },
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Guernsey'
      }
    ]
  },
  {
    name: 'Ghana',
    fullName: 'the Republic of Ghana',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GH',
    alpha3: 'GHA',
    numeric: '288',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'enh',
        name: 'Ghana'
      }
    ]
  },
  {
    name: 'Gibraltar',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'GI',
    alpha3: 'GIB',
    numeric: '292',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Gibraltar'
      }
    ]
  },
  {
    name: 'Greenland',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GL',
    alpha3: 'GRL',
    numeric: '304',
    languages: [
      {
        alpha2: 'da',
        alpha3: 'dan',
        name: 'Grønland'
      },
      {
        alpha2: 'kl',
        alpha3: 'kal',
        name: 'Kalaallit Nunaat'
      }
    ]
  },
  {
    name: 'Gambia',
    fullName: 'the Republic of the Gambia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GM',
    alpha3: 'GMB',
    numeric: '270',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Gambia (the)'
      }
    ]
  },
  {
    name: 'Guinea',
    fullName: 'the Republic of Guinea',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GN',
    alpha3: 'GIN',
    numeric: '324',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Guinée (la)'
      }
    ]
  },
  {
    name: 'Guadeloupe',
    fullName: null,
    territory: 'la Désirade, Marie-Galante, les Saintes',
    independent: true,
    state: 'assigned',
    alpha2: 'GP',
    alpha3: 'GLP',
    numeric: '312',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Guadeloupe (la)'
      }
    ]
  },
  {
    name: 'Equatorial Guinea',
    fullName: 'the Republic of Equatorial Guinea',
    territory:
      'Annobón Island, Bioko Island, Continental Region (Rio Muni) , Rio Muni',
    independent: true,
    state: 'assigned',
    alpha2: 'GQ',
    alpha3: 'GNQ',
    numeric: '226',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Guinée équatoriale (la)'
      },
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Guiné Equatorial (a)'
      },
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Guinea Ecuatorial'
      }
    ]
  },
  {
    name: 'Greece',
    fullName: 'the Hellenic Republic',
    territory: 'Mount Athos autonomous area',
    independent: true,
    state: 'assigned',
    alpha2: 'GR',
    alpha3: 'GRC',
    numeric: '300',
    languages: [
      {
        alpha2: 'el',
        alpha3: 'ell',
        name: 'Elláda'
      }
    ]
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    fullName: null,
    territory: 'South Sandwich Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'GS',
    alpha3: 'SGS',
    numeric: '239',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'South Georgia and the South Sandwich Islands'
      }
    ]
  },
  {
    name: 'Guatemala',
    fullName: 'the Republic of Guatemala',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GT',
    alpha3: 'GTM',
    numeric: '320',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Guatemala'
      }
    ]
  },
  {
    name: 'Guam',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'GU',
    alpha3: 'GUM',
    numeric: '316',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Guam'
      }
    ]
  },
  {
    name: 'Guinea-Bissau',
    fullName: 'the Republic of Guinea-Bissau',
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'GW',
    alpha3: 'GNB',
    numeric: '624',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Guiné-Bissau (a)'
      }
    ]
  },
  {
    name: 'Guyana',
    fullName: 'the Co-operative Republic of Guyana',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'GY',
    alpha3: 'GUY',
    numeric: '328',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Guyana'
      }
    ]
  },
  {
    name: 'Hong Kong',
    fullName: 'the Hong Kong Special Administrative Region of China',
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'HK',
    alpha3: 'HKG',
    numeric: '344',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Hong Kong'
      },
      {
        alpha2: 'zh',
        alpha3: 'zho',
        name: 'Xianggang'
      }
    ]
  },
  {
    name: 'Heard Island and McDonald Islands',
    fullName: null,
    territory: 'McDonald Islands',
    independent: false,
    state: 'assigned',
    alpha2: 'HM',
    alpha3: 'HMD',
    numeric: '334',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Heard Island and McDonald Islands'
      }
    ]
  },
  {
    name: 'Honduras',
    fullName: 'the Republic of Honduras',
    territory: 'Swan Islands',
    independent: false,
    state: 'assigned',
    alpha2: 'HN',
    alpha3: 'HND',
    numeric: '340',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'the Republic of Honduras'
      }
    ]
  },
  {
    name: 'Croatia',
    fullName: 'the Republic of Croatia',
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'HR',
    alpha3: 'HRV',
    numeric: '191',
    languages: [
      {
        alpha2: 'hr',
        alpha3: 'hrv',
        name: 'Hrvatska'
      }
    ]
  },
  {
    name: 'Haiti',
    fullName: 'the Republic of Haiti',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'HT',
    alpha3: 'HTI',
    numeric: '332',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Haïti'
      },
      {
        alpha2: 'ht',
        alpha3: 'hat',
        name: 'Ayiti'
      }
    ]
  },
  {
    name: 'Hungary',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'HU',
    alpha3: 'HUN',
    numeric: '348',
    languages: [
      {
        alpha2: 'hu',
        alpha3: 'hug',
        name: 'Magyarország'
      }
    ]
  },
  {
    name: 'Indonesia',
    fullName: 'the Republic of Indonesia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ID',
    alpha3: 'IDN',
    numeric: '360',
    languages: [
      {
        alpha2: 'id',
        alpha3: 'ind',
        name: 'Indonesia'
      }
    ]
  },
  {
    name: 'Ireland',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'IE',
    alpha3: 'IRL',
    numeric: '372',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Ireland'
      },
      {
        alpha2: 'ga',
        alpha3: 'gle',
        name: 'Éire'
      }
    ]
  },
  {
    name: 'Israel',
    fullName: 'the State of Israel',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'IL',
    alpha3: 'ISR',
    numeric: '376',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: "Isrā'īl"
      },
      {
        alpha2: 'he',
        alpha3: 'heb',
        name: "Yisra'el"
      }
    ]
  },
  {
    name: 'Isle of Man',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'IM',
    alpha3: 'IMN',
    numeric: '833',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Isle of Man'
      }
    ]
  },
  {
    name: 'India',
    fullName: 'the Republic of India',
    territory:
      'Andaman Islands, Laccadive Islands , Minicoy Island, Nicobar Islands, Amindivi Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'India'
      },
      {
        alpha2: 'hi',
        alpha3: 'hin',
        name: 'Bhārat'
      }
    ]
  },
  {
    name: 'British Indian Ocean Territory',
    fullName: null,
    territory: 'Chagos Archipelago, Diego Garcia',
    independent: false,
    state: 'assigned',
    alpha2: 'IO',
    alpha3: 'IOT',
    numeric: '086',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'British Indian Ocean Territory (the)'
      }
    ]
  },
  {
    name: 'Iraq',
    fullName: 'the Republic of Iraq',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'IQ',
    alpha3: 'IRQ',
    numeric: '368',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al ‘Irāq'
      },
      {
        alpha2: 'ku',
        alpha3: 'kur',
        name: '‘Êraq'
      }
    ]
  },
  {
    name: 'Iran (Islamic Republic of)',
    fullName: 'the Islamic Republic of Iran',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'IR',
    alpha3: 'IRN',
    numeric: '364',
    languages: [
      {
        alpha2: 'fa',
        alpha3: 'fas',
        name: 'Jomhūrī-ye Eslāmī-ye Īrān'
      }
    ]
  },
  {
    name: 'Iceland',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'IS',
    alpha3: 'ISL',
    numeric: '352',
    languages: [
      {
        alpha2: 'is',
        alpha3: 'isl',
        name: 'Ísland'
      }
    ]
  },
  {
    name: 'Italy',
    fullName: 'the Republic of Italy',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'IT',
    alpha3: 'ITA',
    numeric: '380',
    languages: [
      {
        alpha2: 'it',
        alpha3: 'ita',
        name: "Italia (l')"
      }
    ]
  },
  {
    name: 'Jersey',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'JE',
    alpha3: 'JEY',
    numeric: '832',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Jersey'
      },
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Jersey'
      }
    ]
  },
  {
    name: 'Jamaica',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'JM',
    alpha3: 'JAM',
    numeric: '388',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Jamaica'
      }
    ]
  },
  {
    name: 'Jordan',
    fullName: 'the Hashemite Kingdom of Jordan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'JO',
    alpha3: 'JOR',
    numeric: '400',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Urdun'
      }
    ]
  },
  {
    name: 'Japan',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'JP',
    alpha3: 'JPN',
    numeric: '392',
    languages: [
      {
        alpha2: 'ja',
        alpha3: 'jpn',
        name: 'Nihon/Nippon'
      }
    ]
  },
  {
    name: 'Kenya',
    fullName: 'the Republic of Kenya',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'KE',
    alpha3: 'KEN',
    numeric: '404',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Kenya'
      },
      {
        alpha2: 'sw',
        alpha3: 'swa',
        name: 'Kenya'
      }
    ]
  },
  {
    name: 'Kyrgyzstan',
    fullName: 'the Kyrgyz Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'KG',
    alpha3: 'KGZ',
    numeric: '417',
    languages: [
      {
        alpha2: 'ky',
        alpha3: 'kyr',
        name: 'Kyrgyzstan'
      },
      {
        alpha2: 'ru',
        alpha3: 'rus',
        name: 'Kyrgyzstan'
      }
    ]
  },
  {
    name: 'Cambodia',
    fullName: 'the Kingdom of Cambodia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'KH',
    alpha3: 'KHM',
    numeric: '116',
    languages: [
      {
        alpha2: 'km',
        alpha3: 'khm',
        name: 'Kâmpŭchéa'
      }
    ]
  },
  {
    name: 'Kiribati',
    fullName: 'the Republic of Kiribati',
    territory:
      'Abariringa, Banaba, Enderbury Island, Gilbert Islands, Kiritimati, part of Line Islands, Phoenix Islands, Tarawa',
    independent: true,
    state: 'assigned',
    alpha2: 'KI',
    alpha3: 'KIR',
    numeric: '296',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Kiribati'
      },
      {
        alpha2: null,
        alpha3: 'gil',
        name: 'Kiribati'
      }
    ]
  },
  {
    name: 'Comoros',
    fullName: 'the Union of the Comoros',
    territory: 'Anjouan, Grande Comore, Mohéli',
    independent: true,
    state: 'assigned',
    alpha2: 'KM',
    alpha3: 'COM',
    numeric: '174',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Comores (les)'
      },
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Qamar'
      },
      {
        alpha2: null,
        alpha3: '002',
        name: 'Komori'
      }
    ]
  },
  {
    name: 'Saint Kitts and Nevis',
    state: 'assigned',
    alpha2: 'KN',
    alpha3: 'KNA',
    numeric: '659',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Saint Kitts and Nevis'
      }
    ]
  },
  {
    name: "Korea (Democratic People's Republic of)",
    fullName: "the Democratic People's Republic of Korea",
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'KP',
    alpha3: 'PRK',
    numeric: '408',
    languages: [
      {
        alpha2: 'ko',
        alpha3: 'kor',
        name: 'Chosŏn'
      }
    ]
  },
  {
    name: 'Korea, Republic of',
    fullName: 'the Republic of Korea',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'KR',
    alpha3: 'KOR',
    numeric: '410',
    languages: [
      {
        alpha2: 'ko',
        alpha3: 'kor',
        name: 'Hanguk'
      }
    ]
  },
  {
    name: 'Kuwait',
    fullName: 'the State of Kuwait',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'KW',
    alpha3: 'KWT',
    numeric: '414',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Kuwayt'
      }
    ]
  },
  {
    name: 'Cayman Islands',
    fullName: null,
    territory: 'Grand Cayman',
    independent: true,
    state: 'assigned',
    alpha2: 'KY',
    alpha3: 'CYM',
    numeric: '136',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Cayman Islands (the)'
      }
    ]
  },
  {
    name: 'Kazakhstan',
    fullName: 'the Republic of Kazakhstan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'KZ',
    alpha3: 'KAZ',
    numeric: '398',
    languages: [
      {
        alpha2: 'kk',
        alpha3: 'kaz',
        name: 'Qazaqstan'
      },
      {
        alpha2: 'ru',
        alpha3: 'rus',
        name: 'Kazahstan'
      }
    ]
  },
  {
    name: "Lao People's Democratic Republic",
    fullName: "the Lao People's Democratic Republic",
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LA',
    alpha3: 'LAO',
    numeric: '418',
    languages: [
      {
        alpha2: 'lo',
        alpha3: 'lao',
        name: 'Sathalanalat Paxathipatai Paxaxôn Lao'
      }
    ]
  },
  {
    name: 'Lebanon',
    fullName: 'the Lebanese Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LB',
    alpha3: 'LBN',
    numeric: '422',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Lubnān'
      }
    ]
  },
  {
    name: 'Saint Lucia',
    fullName: null,
    territory: null,
    independent: null,
    state: 'assigned',
    alpha2: 'LC',
    alpha3: 'LCA',
    numeric: '662',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Saint Lucia'
      }
    ]
  },
  {
    name: 'Liechtenstein',
    fullName: 'the Principality of Liechtenstein',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LI',
    alpha3: 'LIE',
    numeric: '438',
    languages: [
      {
        alpha2: 'de',
        alpha3: 'deu',
        name: 'Liechtenstein'
      }
    ]
  },
  {
    name: 'Sri Lanka',
    fullName: 'the Democratic Socialist Republic of Sri Lanka',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LK',
    alpha3: 'LKA',
    numeric: '144',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Sri Lanka'
      },
      {
        alpha2: 'si',
        alpha3: 'sin',
        name: 'Shrī Laṁkā'
      },
      {
        alpha2: 'ta',
        alpha3: 'tam',
        name: 'Ilaṅkai'
      }
    ]
  },
  {
    name: 'Liberia',
    fullName: 'the Republic of Liberia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LR',
    alpha3: 'LBR',
    numeric: '430',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Liberia'
      }
    ]
  },
  {
    name: 'Lesotho',
    fullName: 'the Kingdom of Lesotho',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LS',
    alpha3: 'LSO',
    numeric: '426',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Lesotho'
      },
      {
        alpha2: 'st',
        alpha3: 'sot',
        name: 'Lesotho'
      }
    ]
  },
  {
    name: 'Lithuania',
    fullName: 'the Republic of Lithuania',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LT',
    alpha3: 'LTU',
    numeric: '440',
    languages: [
      {
        alpha2: 'lt',
        alpha3: 'lit',
        name: 'Lietuva'
      }
    ]
  },
  {
    name: 'Luxembourg',
    fullName: 'the Grand Duchy of Luxembourg',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LU',
    alpha3: 'LUX',
    numeric: '442',
    languages: [
      {
        alpha2: 'de',
        alpha3: 'deu',
        name: 'Luxemburg'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Luxembourg (le)'
      },
      {
        alpha2: 'lb',
        alpha3: 'ltz',
        name: 'Lëtzebuerg'
      }
    ]
  },
  {
    name: 'Latvia',
    fullName: 'the Republic of Latvia',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'LV',
    alpha3: 'LVA',
    numeric: '428',
    languages: [
      {
        alpha2: 'lv',
        alpha3: 'lav',
        name: 'Latvija'
      }
    ]
  },
  {
    name: 'Libya',
    fullName: 'the State of Libya',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'LY',
    alpha3: 'LBY',
    numeric: '434',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Lībiyā'
      }
    ]
  },
  {
    name: 'Morocco',
    fullName: 'the Kingdom of Morocco',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MA',
    alpha3: 'MAR',
    numeric: '504',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Maghrib'
      }
    ]
  },
  {
    name: 'Monaco',
    fullName: 'the Principality of Monaco',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MC',
    alpha3: 'MCO',
    numeric: '492',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Monaco'
      }
    ]
  },
  {
    name: 'Moldova, Republic of',
    fullName: 'the Republic of Moldova',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MD',
    alpha3: 'MDA',
    numeric: '498',
    languages: [
      {
        alpha2: 'ro',
        alpha3: 'ron',
        name: 'Republica Moldova'
      }
    ]
  },
  {
    name: 'Montenegro',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ME',
    alpha3: 'MNE',
    numeric: '499',
    languages: [
      {
        alpha2: null,
        alpha3: 'cnr',
        name: 'Crna Gora'
      }
    ]
  },
  {
    name: 'Saint Martin (French part)',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MF',
    alpha3: 'MAF',
    numeric: '663',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Saint-Martin (partie française)'
      }
    ]
  },
  {
    name: 'Madagascar',
    fullName: 'the Republic of Madagascar',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'MG',
    alpha3: 'MDG',
    numeric: '450',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Madagascar'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Madagascar'
      },
      {
        alpha2: 'mg',
        alpha3: 'mlg',
        name: 'Madagasikara'
      }
    ]
  },
  {
    name: 'Marshall Islands',
    fullName: 'the Republic of the Marshall Islands',
    territory: 'Jaluit, Kwajalein, Majuro',
    independent: true,
    state: 'assigned',
    alpha2: 'MH',
    alpha3: 'MHL',
    numeric: '584',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Marshall Islands (the)'
      },
      {
        alpha2: 'mh',
        alpha3: 'mah',
        name: 'Aelōn̄ in M̧ajeļ'
      }
    ]
  },
  {
    name: 'North Macedonia',
    fullName: 'the Republic of North Macedonia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MK',
    alpha3: 'MKD',
    numeric: '807',
    languages: [
      {
        alpha2: 'mk',
        alpha3: 'mkd',
        name: 'Severna Makedonija'
      }
    ]
  },
  {
    name: 'Mali',
    fullName: 'the Republic of Mali',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ML',
    alpha3: 'MLI',
    numeric: '466',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Mali (le)'
      }
    ]
  },
  {
    name: 'Myanmar',
    fullName: 'the Republic of the Union of Myanmar',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MM',
    alpha3: 'MMR',
    numeric: '104',
    languages: [
      {
        alpha2: 'my',
        alpha3: 'mya',
        name: 'Myanma'
      }
    ]
  },
  {
    name: 'Mongolia',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MN',
    alpha3: 'MNG',
    numeric: '496',
    languages: [
      {
        alpha2: 'mn',
        alpha3: 'mon',
        name: 'Mongol'
      }
    ]
  },
  {
    name: 'Macao',
    fullName: 'Macao Special Administrative Region of China',
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'MO',
    alpha3: 'MAC',
    numeric: '446',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Macau'
      },
      {
        alpha2: 'zh',
        alpha3: 'zho',
        name: 'Aomen'
      }
    ]
  },
  {
    name: 'Northern Mariana Islands',
    fullName: 'the Commonwealth of the Northern Mariana Islands',
    territory: 'Mariana Islands (except GUAM), Saipan (principal island)',
    independent: false,
    state: 'assigned',
    alpha2: 'MP',
    alpha3: 'MNP',
    numeric: '580',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Northern Mariana Islands (the)'
      }
    ]
  },
  {
    name: 'Martinique',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'MQ',
    alpha3: 'MTQ',
    numeric: '474',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Martinique (la)'
      }
    ]
  },
  {
    name: 'Mauritania',
    fullName: 'the Islamic Republic of Mauritania',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MR',
    alpha3: 'MRT',
    numeric: '478',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Mūrītāniyā'
      }
    ]
  },
  {
    name: 'Montserrat',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'MS',
    alpha3: 'MSR',
    numeric: '500',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Montserrat'
      }
    ]
  },
  {
    name: 'Malta',
    fullName: 'the Republic of Malta',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MT',
    alpha3: 'MLT',
    numeric: '470',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Malta'
      },
      {
        alpha2: 'mt',
        alpha3: 'mlt',
        name: 'Malta'
      }
    ]
  },
  {
    name: 'Mauritius',
    fullName: 'the Republic of Mauritius',
    territory: 'Agalega Islands, Cargados Carajos Shoals, Rodrigues Island',
    independent: true,
    state: 'assigned',
    alpha2: 'MU',
    alpha3: 'MUS',
    numeric: '480',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Mauritius'
      }
    ]
  },
  {
    name: 'Maldives',
    fullName: 'the Republic of Maldives',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MV',
    alpha3: 'MDV',
    numeric: '462',
    languages: [
      {
        alpha2: 'dv',
        alpha3: 'div',
        name: 'Dhivehi Raajje'
      }
    ]
  },
  {
    name: 'Malawi',
    fullName: 'the Republic of Malawi',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MW',
    alpha3: 'MWI',
    numeric: '454',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Malawi'
      },
      {
        alpha2: 'ny',
        alpha3: 'nya',
        name: 'Malaŵi'
      }
    ]
  },
  {
    name: 'Mexico',
    fullName: 'the United Mexican States',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'MX',
    alpha3: 'MEX',
    numeric: '484',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'México'
      }
    ]
  },
  {
    name: 'Malaysia',
    fullName: null,
    independent: true,
    territory: 'Peninsular Malaysia, Sabah, Sarawak',
    state: 'assigned',
    alpha2: 'MY',
    alpha3: 'MYS',
    numeric: '458',
    languages: [
      {
        alpha2: 'ms',
        alpha3: 'msa',
        name: 'Malaysia'
      }
    ]
  },
  {
    name: 'Mozambique',
    fullName: 'the Republic of Mozambique',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'MZ',
    alpha3: 'MOZ',
    numeric: '508',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Moçambique'
      }
    ]
  },
  {
    name: 'Namibia',
    fullName: 'the Republic of Namibia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'NA',
    alpha3: 'NAM',
    numeric: '516',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Namibia'
      }
    ]
  },
  {
    name: 'New Caledonia',
    fullName: null,
    territory: 'Loyalty Islands',
    independent: false,
    state: 'assigned',
    alpha2: 'NC',
    alpha3: 'NCL',
    numeric: '540',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Nouvelle-Calédonie (la)'
      }
    ]
  },
  {
    name: 'Niger',
    fullName: 'the Republic of the Niger',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'NE',
    alpha3: 'NER',
    numeric: '562',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Niger (le)'
      }
    ]
  },
  {
    name: 'Norfolk Island',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'NF',
    alpha3: 'NFK',
    numeric: '574',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Norfolk Island'
      }
    ]
  },
  {
    name: 'Nigeria',
    fullName: 'the Federal Republic of Nigeria',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'NG',
    alpha3: 'NGA',
    numeric: '566',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Nigeria'
      }
    ]
  },
  {
    name: 'Nicaragua',
    fullName: 'the Republic of Nicaragua',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'NI',
    alpha3: 'NIC',
    numeric: '558',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Nicaragua'
      }
    ]
  },
  {
    name: 'Netherlands',
    fullName: 'the Kingdom of the Netherlands',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'NL',
    alpha3: 'NLD',
    numeric: '528',
    languages: [
      {
        alpha2: 'nl',
        alpha3: 'nld',
        name: 'Nederland'
      }
    ]
  },
  {
    name: 'Norway',
    fullName: 'the Kingdom of Norway',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'NO',
    alpha3: 'NOR',
    numeric: '578',
    languages: [
      {
        alpha2: 'nn',
        alpha3: 'nno',
        name: 'Noreg'
      },
      {
        alpha2: 'nb',
        alpha3: 'nob',
        name: 'Norge'
      }
    ]
  },
  {
    name: 'Nepal',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'NP',
    alpha3: 'NPL',
    numeric: '524',
    languages: [
      {
        alpha2: 'ne',
        alpha3: 'nep',
        name: 'Nepāl'
      }
    ]
  },
  {
    name: 'Nauru',
    fullName: 'the Republic of Nauru',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'NR',
    alpha3: 'NRU',
    numeric: '520',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Nauru'
      },
      {
        alpha2: 'na',
        alpha3: 'nau',
        name: 'Naoero'
      }
    ]
  },
  {
    name: 'Niue',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'NU',
    alpha3: 'NIU',
    numeric: '570',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Niue'
      },
      {
        alpha2: null,
        alpha3: 'niu',
        name: 'Niue'
      }
    ]
  },
  {
    name: 'New Zealand',
    fullName: null,
    territory:
      'Antipodes Islands, Auckland Islands, Campbell Island, Chatham Islands, Kermadec Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'NZ',
    alpha3: 'NZL',
    numeric: '554',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'New Zealand'
      },
      {
        alpha2: 'mi',
        alpha3: 'mri',
        name: 'Aotearoa'
      }
    ]
  },
  {
    name: 'Oman',
    fullName: 'the Sultanate of Oman',
    territory: 'part of the Musandam Peninsula',
    independent: true,
    state: 'assigned',
    alpha2: 'OM',
    alpha3: 'OMN',
    numeric: '512',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: '‘Umān'
      }
    ]
  },
  {
    name: 'Panama',
    fullName: 'the Republic of Panama',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'PA',
    alpha3: 'PAN',
    numeric: '591',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Panamá'
      }
    ]
  },
  {
    name: 'Peru',
    fullName: 'the Republic of Peru',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'PE',
    alpha3: 'PER',
    numeric: '604',
    languages: [
      {
        alpha2: 'ay',
        alpha3: 'aym',
        name: 'Perú'
      },
      {
        alpha2: 'qu',
        alpha3: 'que',
        name: 'Perú'
      },
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Perú (el)'
      }
    ]
  },
  {
    name: 'French Polynesia',
    fullName: null,
    territory:
      'Austral Islands , Gambier Islands, Marquesas Islands , Society Archipelago , Tahiti, Tuamotu Islands',
    independent: false,
    state: 'assigned',
    alpha2: 'PF',
    alpha3: 'PYF',
    numeric: '258',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Polynésie française (la)'
      }
    ]
  },
  {
    name: 'Papua New Guinea',
    fullName: 'the Independent State of Papua New Guinea',
    territory:
      'Bismarck Archipelago, Bougainville (principal island), Solomon Islands, Northern',
    independent: true,
    state: 'assigned',
    alpha2: 'PG',
    alpha3: 'PNG',
    numeric: '598',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Papua New Guinea'
      },
      {
        alpha2: 'ho',
        alpha3: 'hmo',
        name: 'Papuaniugini'
      },
      {
        alpha2: null,
        alpha3: 'tpi',
        name: 'Papuaniugini'
      }
    ]
  },
  {
    name: 'Philippines',
    fullName: 'the Republic of the Philippines',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'PH',
    alpha3: 'PHL',
    numeric: '608',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Philippines (the)'
      },
      {
        alpha2: 'tl',
        alpha3: 'tgl',
        name: 'Pilipinas'
      }
    ]
  },
  {
    name: 'Pakistan',
    fullName: 'the Islamic Republic of Pakistan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'PK',
    alpha3: 'PAK',
    numeric: '586',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Pakistan'
      },
      {
        alpha2: 'ur',
        alpha3: 'erd',
        name: 'Pākistān'
      }
    ]
  },
  {
    name: 'Poland',
    fullName: 'the Republic of Poland',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'PL',
    alpha3: 'POL',
    numeric: '616',
    languages: [
      {
        alpha2: 'pl',
        alpha3: 'pol',
        name: 'Polska'
      }
    ]
  },
  {
    name: 'Saint Pierre and Miquelon',
    fullName: null,
    territory: 'Miquelon',
    independent: false,
    state: 'assigned',
    alpha2: 'PM',
    alpha3: 'SPM',
    numeric: '666',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Saint-Pierre-et-Miquelon'
      }
    ]
  },
  {
    name: 'Pitcairn',
    fullName: null,
    territory: 'Ducie Island, Henderson Island, Oeno Island',
    independent: false,
    state: 'assigned',
    alpha2: 'PN',
    alpha3: 'PCN',
    numeric: '612',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Pitcairn'
      }
    ]
  },
  {
    name: 'Puerto Rico',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'PR',
    alpha3: 'PRI',
    numeric: '630',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Puerto Rico'
      },
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Puerto Rico'
      }
    ]
  },
  {
    name: 'Palestine, State of',
    fullName: 'the State of Palestine',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'PS',
    alpha3: 'PSE',
    numeric: '275',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Dawlat Filasţīn'
      }
    ]
  },
  {
    name: 'Portugal',
    fullName: 'the Portuguese Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'PT',
    alpha3: 'PRT',
    numeric: '620',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Portugal'
      }
    ]
  },
  {
    name: 'Palau',
    fullName: 'the Republic of Palau',
    territory:
      'Babelthuap (principal island), the west part of the Caroline Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'PW',
    alpha3: 'PLW',
    numeric: '585',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Palau'
      },
      {
        alpha2: null,
        alpha3: 'pau',
        name: 'Belau'
      }
    ]
  },
  {
    name: 'Paraguay',
    fullName: 'the Republic of Paraguay',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'PY',
    alpha3: 'PRY',
    numeric: '600',
    languages: [
      {
        alpha2: 'gn',
        alpha3: 'grn',
        name: 'Paraguay'
      },
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Paraguay (el)'
      }
    ]
  },
  {
    name: 'Qatar',
    fullName: 'the State of Qatar',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'QA',
    alpha3: 'QAT',
    numeric: '634',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Qaţar'
      }
    ]
  },
  {
    name: 'Réunion',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'RE',
    alpha3: 'REU',
    numeric: '638',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Réunion (La)'
      }
    ]
  },
  {
    name: 'Romania',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'RO',
    alpha3: 'ROU',
    numeric: '642',
    languages: [
      {
        alpha2: 'ro',
        alpha3: 'ron',
        name: 'România'
      }
    ]
  },
  {
    name: 'Serbia',
    fullName: 'the Republic of Serbia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'RS',
    alpha3: 'SRB',
    numeric: '688',
    languages: [
      {
        alpha2: 'sr',
        alpha3: 'srp',
        name: 'Srbija'
      }
    ]
  },
  {
    name: 'Russian Federation',
    fullName: 'the Russian Federation',
    territory: 'Kaliningrad Region',
    independent: true,
    state: 'assigned',
    alpha2: 'RU',
    alpha3: 'RUS',
    numeric: '643',
    languages: [
      {
        alpha2: 'ru',
        alpha3: 'rus',
        name: 'Rossijskaja Federacija'
      }
    ]
  },
  {
    name: 'Rwanda',
    fullName: 'the Republic of Rwanda',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'RW',
    alpha3: 'RWA',
    numeric: '646',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Rwanda'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Rwanda (le)'
      },
      {
        alpha2: 'rw',
        alpha3: 'kin',
        name: 'Rwanda'
      }
    ]
  },
  {
    name: 'Saudi Arabia',
    fullName: 'the Kingdom of Saudi Arabia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SA',
    alpha3: 'SAU',
    numeric: '682',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'As Su‘ūdīyah'
      }
    ]
  },
  {
    name: 'Solomon Islands',
    fullName: null,
    territory:
      'Guadalcanal (principal island), Southern Solomon Islands, Santa Cruz Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'SB',
    alpha3: 'SLB',
    numeric: '090',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Solomon Islands'
      }
    ]
  },
  {
    name: 'Seychelles',
    fullName: 'the Republic of Seychelles',
    territory:
      'Cosmoledo Islands, Farquhar Islands, Mahé (principal island), Aldabra Islands, Amirante Islands',
    independent: true,
    state: 'assigned',
    alpha2: 'SC',
    alpha3: 'SYC',
    numeric: '690',
    languages: [
      {
        alpha2: null,
        alpha3: 'crs',
        name: 'Sesel'
      },
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Seychelles'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Seychelles (les)'
      }
    ]
  },
  {
    name: 'Sudan',
    fullName: 'the Republic of the Sudan',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'SD',
    alpha3: 'SDN',
    numeric: '729',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'As Sūdān'
      }
    ]
  },
  {
    name: 'Sweden',
    fullName: 'the Kingdom of Sweden',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SE',
    alpha3: 'SWE',
    numeric: '752',
    languages: [
      {
        alpha2: 'sv',
        alpha3: 'swe',
        name: 'Sverige'
      }
    ]
  },
  {
    name: 'Singapore',
    fullName: 'the Republic of Singapore',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SG',
    alpha3: 'SGP',
    numeric: '702',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Singapore'
      },
      {
        alpha2: 'ms',
        alpha3: 'msa',
        name: 'Singapura'
      },
      {
        alpha2: 'ta',
        alpha3: 'tam',
        name: 'Chiṅkappūr'
      },
      {
        alpha2: 'zh',
        alpha3: 'zho',
        name: 'Xinjiapo'
      }
    ]
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    fullName: null,
    territory:
      'Ascension Island, Gough Island, Inaccessible Island, Nightingale Island, Saint Helena Island , Stoltenhoff Island, Tristan da Cunha Archipelago',
    independent: false,
    state: 'assigned',
    alpha2: 'SH',
    alpha3: 'SHN',
    numeric: '654',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Saint Helena, Ascension and Tristan da Cunha'
      }
    ]
  },
  {
    name: 'Slovenia',
    fullName: 'the Republic of Slovenia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SI',
    alpha3: 'SVN',
    numeric: '705',
    languages: [
      {
        alpha2: 'sl',
        alpha3: 'slv',
        name: 'Slovenija'
      }
    ]
  },
  {
    name: 'Svalbard and Jan Mayen',
    fullName: null,
    territory: 'Bear Island , Jan Mayen',
    independent: false,
    state: 'assigned',
    alpha2: 'SJ',
    alpha3: 'SJM',
    numeric: '744',
    languages: [
      {
        alpha2: 'nn',
        alpha3: 'nno',
        name: 'Svalbard og Jan Mayen'
      },
      {
        alpha2: 'nb',
        alpha3: 'nob',
        name: 'Svalbard og Jan Mayen'
      }
    ]
  },
  {
    name: 'Slovakia',
    fullName: 'the Slovak Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SK',
    alpha3: 'SVK',
    numeric: '703',
    languages: [
      {
        alpha2: 'sk',
        alpha3: 'slk',
        name: 'Slovensko'
      }
    ]
  },
  {
    name: 'Sierra Leone',
    fullName: 'the Republic of Sierra Leone',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SL',
    alpha3: 'SLE',
    numeric: '694',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Sierra Leone'
      }
    ]
  },
  {
    name: 'San Marino',
    fullName: 'the Republic of San Marino',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SM',
    alpha3: 'SMR',
    numeric: '674',
    languages: [
      {
        alpha2: 'it',
        alpha3: 'ita',
        name: 'San Marino'
      }
    ]
  },
  {
    name: 'Senegal',
    fullName: 'the Republic of Senegal',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SN',
    alpha3: 'SEN',
    numeric: '686',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Sénégal (le)'
      }
    ]
  },
  {
    name: 'Somalia',
    fullName: 'the Federal Republic of Somalia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SO',
    alpha3: 'SOM',
    numeric: '706',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Aş Şūmāl'
      },
      {
        alpha2: 'so',
        alpha3: 'som',
        name: 'Soomaaliya'
      }
    ]
  },
  {
    name: 'Suriname',
    fullName: 'the Republic of Suriname',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SR',
    alpha3: 'SUR',
    numeric: '740',
    languages: [
      {
        alpha2: 'nl',
        alpha3: 'nld',
        name: 'Suriname'
      }
    ]
  },
  {
    name: 'South Sudan',
    fullName: 'the Republic of South Sudan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SS',
    alpha3: 'SSD',
    numeric: '728',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'South Sudan'
      }
    ]
  },
  {
    name: 'Sao Tome and Principe',
    fullName: 'the Democratic Republic of Sao Tome and Principe',
    territory: 'Principe',
    independent: true,
    state: 'assigned',
    alpha2: 'ST',
    alpha3: 'STP',
    numeric: '678',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'São Tomé e Príncipe'
      }
    ]
  },
  {
    name: 'El Salvador',
    fullName: 'the Republic of El Salvador',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SV',
    alpha3: 'SLV',
    numeric: '222',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'El Salvador'
      }
    ]
  },
  {
    name: 'Sint Maarten (Dutch part)',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'SX',
    alpha3: 'SXM',
    numeric: '534',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Sint Maarten (Dutch part)'
      },
      {
        alpha2: 'nl',
        alpha3: 'nld',
        name: 'Sint Maarten'
      }
    ]
  },
  {
    name: 'Syrian Arab Republic',
    fullName: 'the Syrian Arab Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SY',
    alpha3: 'SYR',
    numeric: '760',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Jumhūrīyah al ‘Arabīyah as Sūrīyah'
      }
    ]
  },
  {
    name: 'Eswatini',
    fullName: 'the Kingdom of Eswatini',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'SZ',
    alpha3: 'SWZ',
    numeric: '748',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Eswatini'
      },
      {
        alpha2: 'ss',
        alpha3: 'ssw',
        name: 'eSwatini'
      }
    ]
  },
  {
    name: 'Turks and Caicos Islands',
    fullName: '',
    independent: false,
    territory: null,
    state: 'assigned',
    alpha2: 'TC',
    alpha3: 'TCA',
    numeric: '796',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Turks and Caicos Islands (the)'
      }
    ]
  },
  {
    name: 'Chad',
    fullName: 'the Republic of Chad',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'TD',
    alpha3: 'TCD',
    numeric: '148',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Tshād'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Tchad (le)'
      }
    ]
  },
  {
    name: 'French Southern Territories',
    fullName: null,
    territory:
      'Bassas da India, Crozet Archipelago, French scattered Indian Ocean Islands, Europa Island, Glorioso Islands , Juan de Nova Island, Kerguelen Islands, Saint-Paul Island, Tromelin Island, Amsterdam Island',
    independent: false,
    state: 'assigned',
    alpha2: 'TF',
    alpha3: 'ATF',
    numeric: '260',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Terres australes françaises (les)'
      }
    ]
  },
  {
    name: 'Togo',
    fullName: 'the Togolese Republic',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'TG',
    alpha3: 'TGO',
    numeric: '768',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Togo (le)'
      }
    ]
  },
  {
    name: 'Thailand',
    fullName: 'the Kingdom of Thailand',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'TH',
    alpha3: 'THA',
    numeric: '764',
    languages: [
      {
        alpha2: 'th',
        alpha3: 'tha',
        name: 'Prathet Thai'
      }
    ]
  },
  {
    name: 'Tajikistan',
    fullName: 'the Republic of Tajikistan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'TJ',
    alpha3: 'TJK',
    numeric: '762',
    languages: [
      {
        alpha2: 'tg',
        alpha3: 'tgk',
        name: 'Tojikiston'
      }
    ]
  },
  {
    name: 'Tokelau',
    fullName: null,
    territory: null,
    independent: false,
    state: 'assigned',
    alpha2: 'TK',
    alpha3: 'TKL',
    numeric: '772',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Tokelau'
      },
      {alpha2: null, alpha3: 'tkl', name: 'Tokelau'}
    ]
  },
  {
    name: 'Timor-Leste',
    fullName: 'the Democratic Republic of Timor-Leste',
    territory: 'the exclave of Oecussi',
    independent: true,
    state: 'assigned',
    alpha2: 'TL',
    alpha3: 'TLS',
    numeric: '626',
    languages: [
      {
        alpha2: 'pt',
        alpha3: 'por',
        name: 'Timor-Leste'
      },
      {
        alpha2: null,
        alpha3: 'tet',
        name: "Timor Lorosa'e"
      }
    ]
  },
  {
    name: 'Turkmenistan',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'TM',
    alpha3: 'TKM',
    numeric: '795',
    languages: [
      {
        alpha2: 'tk',
        alpha3: 'tuk',
        name: 'Türkmenistan'
      }
    ]
  },
  {
    name: 'Tunisia',
    fullName: 'the Republic of Tunisia',
    territory: null,
    state: 'assigned',
    alpha2: 'TN',
    alpha3: 'TUN',
    numeric: '788',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Tūnis'
      }
    ]
  },
  {
    name: 'Tonga',
    fullName: 'the Kingdom of Tonga',
    territory: 'Tongatapu (principal island)',
    independent: true,
    state: 'assigned',
    alpha2: 'TO',
    alpha3: 'TON',
    numeric: '776',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Tonga'
      },
      {
        alpha2: 'to',
        alpha3: 'ton',
        name: 'Tonga'
      }
    ]
  },
  {
    name: 'Türkiye',
    fullName: 'the Republic of Türkiye',
    independent: true,
    territory: null,
    state: 'assigned',
    alpha2: 'TR',
    alpha3: 'TUR',
    numeric: '792',
    languages: [
      {
        alpha2: 'tr',
        alpha3: 'tur',
        name: 'Türkiye'
      }
    ]
  },
  {
    name: 'Trinidad and Tobago',
    fullName: 'the Republic of Trinidad and Tobago',
    territory: 'Tobago',
    independent: true,
    state: 'assigned',
    alpha2: 'TT',
    alpha3: 'TTO',
    numeric: '780',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Trinidad and Tobago'
      }
    ]
  },
  {
    name: 'Tuvalu',
    fullName: null,
    territory: 'Funafuti (principal atoll)',
    independent: true,
    state: 'assigned',
    alpha2: 'TV',
    alpha3: 'TUV',
    numeric: '798',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Tuvalu'
      },
      {
        alpha2: null,
        alpha3: 'tvl',
        name: 'Tuvalu'
      }
    ]
  },
  {
    name: 'Taiwan, Province of China',
    fullName: null,
    territory: 'Penghu (Pescadores) Islands',
    independent: false,
    state: 'assigned',
    alpha2: 'TW',
    alpha3: 'TWN',
    numeric: '158',
    languages: [
      {
        alpha2: 'zh',
        alpha3: 'zho',
        name: 'Taiwan'
      }
    ]
  },
  {
    name: 'Tanzania, United Republic of',
    fullName: 'the United Republic of Tanzania',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'TZ',
    alpha3: 'TZA',
    numeric: '834',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Tanzania, the United Republic of'
      },
      {
        alpha2: 'sw',
        alpha3: 'swa',
        name: 'Jamhuri ya Muungano wa Tanzania'
      }
    ]
  },
  {
    name: 'Ukraine',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'UA',
    alpha3: 'UKR',
    numeric: '804',
    languages: [
      {
        alpha2: 'uk',
        alpha3: 'ukr',
        name: 'Ukraina'
      }
    ]
  },
  {
    name: 'Uganda',
    fullName: 'the Republic of Uganda',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'UG',
    alpha3: 'UGA',
    numeric: '800',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Uganda'
      }
    ]
  },
  {
    name: 'United States Minor Outlying Islands',
    fullName: null,
    territory:
      'Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Islands, Navassa Island , Palmyra Atoll, Wake Island',
    independent: false,
    state: 'assigned',
    alpha2: 'UM',
    alpha3: 'UMI',
    numeric: '581',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'United States Minor Outlying Islands (the)'
      }
    ]
  },
  {
    name: 'United States of America',
    fullName: 'the United States of America',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'US',
    alpha3: 'USA',
    numeric: '840',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'United States of America (the)'
      }
    ]
  },
  {
    name: 'Uruguay',
    fullName: 'the Eastern Republic of Uruguay',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'UY',
    alpha3: 'URY',
    numeric: '858',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Uruguay (el)'
      }
    ]
  },
  {
    name: 'Uzbekistan',
    fullName: 'the Republic of Uzbekistan',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'UZ',
    alpha3: 'UZB',
    numeric: '860',
    languages: [
      {
        alpha2: 'uz',
        alpha3: 'uzb',
        name: 'O‘zbekiston'
      }
    ]
  },
  {
    name: 'Holy See',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'VA',
    alpha3: 'VAT',
    numeric: '336',
    languages: [
      {
        alpha2: 'it',
        alpha3: 'ita',
        name: 'Santa Sede (la)'
      },
      {
        alpha2: 'la',
        alpha3: 'lat',
        name: 'Sancta Sedes'
      }
    ]
  },
  {
    name: 'Saint Vincent and the Grenadines',
    territory:
      'Bequia (principal island), Northern Grenadine Islands, Saint Vincent Island',
    fullName: null,
    independent: true,
    state: 'assigned',
    alpha2: 'VC',
    alpha3: 'VCT',
    numeric: '670',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Saint Vincent and the Grenadines'
      }
    ]
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    fullName: 'the Bolivarian Republic of Venezuela',
    territory: 'Bird Island',
    independent: true,
    state: 'assigned',
    alpha2: 'VE',
    alpha3: 'VEN',
    numeric: '862',
    languages: [
      {
        alpha2: 'es',
        alpha3: 'spa',
        name: 'Venezuela, República Bolivariana de'
      }
    ]
  },
  {
    name: 'Virgin Islands (British)',
    fullName: 'British Virgin Islands (the)',
    territory: 'Anegada, Jost Van Dyke, Tortola, Virgin Gorda',
    independent: false,
    state: 'assigned',
    alpha2: 'VG',
    alpha3: 'VGB',
    numeric: '092',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Virgin Islands (British)'
      }
    ]
  },
  {
    name: 'Virgin Islands (U.S.)',
    fullName: 'the Virgin Islands of the United States',
    territory: 'Saint Croix, Saint John, Saint Thomas',
    independent: false,
    state: 'assigned',
    alpha2: 'VI',
    alpha3: 'VIR',
    numeric: '850',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Virgin Islands (U.S.)'
      }
    ]
  },
  {
    name: 'Viet Nam',
    fullName: 'the Socialist Republic of Viet Nam',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'VN',
    alpha3: 'VNM',
    numeric: '704',
    languages: [
      {
        alpha2: 'vi',
        alpha3: 'vie',
        name: 'Việt Nam'
      }
    ]
  },
  {
    name: 'Vanuatu',
    fullName: 'the Republic of Vanuatu',
    territory: 'Efate, Santo',
    independent: true,
    state: 'assigned',
    alpha2: 'VU',
    alpha3: 'VUT',
    numeric: '548',
    languages: [
      {
        alpha2: 'bi',
        alpha3: 'bis',
        name: 'Vanuatu'
      },
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Vanuatu'
      },
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Vanuatu (le)'
      }
    ]
  },
  {
    name: 'Wallis and Futuna',
    fullName: 'Wallis and Futuna Islands',
    territory: 'Futuna, Hoorn Islands, Uvea, Wallis Islands',
    independent: false,
    state: 'assigned',
    alpha2: 'WF',
    alpha3: 'WLF',
    numeric: '876',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Wallis-et-Futuna'
      }
    ]
  },
  {
    name: 'Samoa',
    fullName: 'the Independent State of Samoa',
    territory: "Savai'i, Upolu",
    independent: true,
    state: 'assigned',
    alpha2: 'WS',
    alpha3: 'WSM',
    numeric: '882',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Samoa'
      },
      {
        alpha2: 'sm',
        alpha3: 'smo',
        name: 'Samoa'
      }
    ]
  },
  {
    name: 'Yemen',
    fullName: 'the Republic of Yemen',
    territory: 'Socotra Island',
    independent: true,
    state: 'assigned',
    alpha2: 'YE',
    alpha3: 'YEM',
    numeric: '887',
    languages: [
      {
        alpha2: 'ar',
        alpha3: 'ara',
        name: 'Al Yaman'
      }
    ]
  },
  {
    name: 'Mayotte',
    fullName: null,
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'YT',
    alpha3: 'MYT',
    numeric: '175',
    languages: [
      {
        alpha2: 'fr',
        alpha3: 'fra',
        name: 'Mayotte'
      }
    ]
  },
  {
    name: 'South Africa',
    fullName: 'the Republic of South Africa',
    territory: 'Marion Island, Prince Edward Island',
    independent: true,
    state: 'assigned',
    alpha2: 'ZA',
    alpha3: 'ZAF',
    numeric: '710',
    languages: [
      {
        alpha2: 'af',
        alpha3: 'afr',
        name: 'Suid-Afrika'
      },
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'South Africa'
      },
      {
        alpha2: 'nr',
        alpha3: 'nbl',
        name: 'Sewula Afrika'
      },
      {
        alpha2: null,
        alpha3: 'nso',
        name: 'Afrika-Borwa'
      },
      {
        alpha2: 'st',
        alpha3: 'sot',
        name: 'Afrika-Borwa'
      },
      {
        alpha2: 'ss',
        alpha3: 'ssw',
        name: 'Ningizimu Afrika'
      },
      {
        alpha2: 'tn',
        alpha3: 'tsn',
        name: 'Afrika-Borwa'
      },
      {
        alpha2: 'ts',
        alpha3: 'tso',
        name: 'Afrika-Dzonga'
      },
      {
        alpha2: 've',
        alpha3: 'ven',
        name: 'Afrika Tshipembe'
      },
      {
        alpha2: 'xh',
        alpha3: 'xho',
        name: 'Mzantsi Afrika'
      },
      {
        alpha2: 'zu',
        alpha3: 'zul',
        name: 'Ningizimu Afrika'
      }
    ]
  },
  {
    name: 'Zambia',
    fullName: 'the Republic of Zambia',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ZM',
    alpha3: 'ZMB',
    numeric: '894',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Zambia'
      }
    ]
  },
  {
    name: 'Zimbabwe',
    fullName: 'the Republic of Zimbabwe',
    territory: null,
    independent: true,
    state: 'assigned',
    alpha2: 'ZW',
    alpha3: 'ZWE',
    numeric: '716',
    languages: [
      {
        alpha2: 'en',
        alpha3: 'eng',
        name: 'Zimbabwe'
      }
    ]
  }
]
