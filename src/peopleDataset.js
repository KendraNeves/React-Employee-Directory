const laureates = [
  {
    "id": "1",
    "firstname": "Wilhelm Conrad",
    "surname": "Röntgen",
    "origin": "Germany",
    "field": "physics"

  },
  {
    "id": "2",
    "firstname": "Hendrik A.",
    "surname": "Lorentz",
    "origin": "Netherlands",
    "field": "physics",

  },
  {
    "id": "3",
    "firstname": "Pieter",
    "surname": "Zeeman",
    "origin": "Netherlands",
    "field": "physics",
    "year": "1902"
  },
  {
    "_id": "4",
    "firstname": "Henri",
    "surname": "Becquerel",
    "origin": "France",
    "field": "physics",
    "year": "1903"
  },
  {
    "id": "5",
    "firstname": "Pierre",
    "surname": "Curie",
    "origin": "France",
    "field": "physics",
    "year": "1903"
  },
  {
    "id": "160",
    "firstname": "Jacobus H.",
    "surname": "van 't Hoff",
    "origin": "Germany",
    "field": "chemistry",
    "year": "1901"
  },
  {
    "id": "307",
    "firstname": "Charles",
    "surname": "Richet",
    "origin": "France",
    "field": "medicine",
    "year": "1913"
  },

];
// {
//   "id": "6",
//   "firstname": "Marie",
//   "surname": "Curie",
//   "born": "1867-11-07",
//   "died": "1934-07-04",
//   "bornCountry": "Russian Empire (now Poland)",
//   "bornCountryCode": "PL",
//   "bornCity": "Warsaw",
//   "origin": "France",
//   "originCode": "FR",
//   "diedCity": "Sallanches",
//   "gender": "female",
//   "prizes": [
//     {
//       "year": "1903",
//       "category": "physics",
//       "share": "4",
//       "motivation": "\"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel\"",
//       "affiliations": [
//         []
//       ]
//     },
//     {
//       "year": "1911",
//       "category": "chemistry",
//       "share": "1",
//       "motivation": "\"in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element\"",
//       "affiliations": [
//         {
//           "name": "Sorbonne University",
//           "city": "Paris",
//           "country": "France"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "8",
//   "firstname": "Lord",
//   "surname": "Rayleigh",
//   "born": "1842-11-12",
//   "died": "1919-06-30",
//   "bornCountry": "United Kingdom",
//   "bornCountryCode": "GB",
//   "bornCity": "Langford Grove, Maldon, Essex",
//   "origin": "United Kingdom",
//   "originCode": "GB",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1904",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his investigations of the densities of the most important gases and for his discovery of argon in connection with these studies\"",
//       "affiliations": [
//         {
//           "name": "Royal Institution of Great Britain",
//           "city": "London",
//           "country": "United Kingdom"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "9",
//   "firstname": "Philipp",
//   "surname": "Lenard",
//   "born": "1862-06-07",
//   "died": "1947-05-20",
//   "bornCountry": "Hungary (now Slovakia)",
//   "bornCountryCode": "SK",
//   "bornCity": "Pressburg (now Bratislava)",
//   "origin": "Germany",
//   "originCode": "DE",
//   "diedCity": "Messelhausen",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1905",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his work on cathode rays\"",
//       "affiliations": [
//         {
//           "name": "Kiel University",
//           "city": "Kiel",
//           "country": "Germany"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "10",
//   "firstname": "J.J.",
//   "surname": "Thomson",
//   "born": "1856-12-18",
//   "died": "1940-08-30",
//   "bornCountry": "United Kingdom",
//   "bornCountryCode": "GB",
//   "bornCity": "Cheetham Hill",
//   "origin": "United Kingdom",
//   "originCode": "GB",
//   "diedCity": "Cambridge",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1906",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"in recognition of the great merits of his theoretical and experimental investigations on the conduction of electricity by gases\"",
//       "affiliations": [
//         {
//           "name": "University of Cambridge",
//           "city": "Cambridge",
//           "country": "United Kingdom"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "11",
//   "firstname": "Albert A.",
//   "surname": "Michelson",
//   "born": "1852-12-19",
//   "died": "1931-05-09",
//   "bornCountry": "Prussia (now Poland)",
//   "bornCountryCode": "PL",
//   "bornCity": "Strelno (now Strzelno)",
//   "origin": "USA",
//   "originCode": "US",
//   "diedCity": "Pasadena, CA",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1907",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his optical precision instruments and the spectroscopic and metrological investigations carried out with their aid\"",
//       "affiliations": [
//         {
//           "name": "University of Chicago",
//           "city": "Chicago, IL",
//           "country": "USA"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "12",
//   "firstname": "Gabriel",
//   "surname": "Lippmann",
//   "born": "1845-08-16",
//   "died": "1921-07-13",
//   "bornCountry": "Luxembourg",
//   "bornCountryCode": "LU",
//   "bornCity": "Hollerich",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1908",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his method of reproducing colours photographically based on the phenomenon of interference\"",
//       "affiliations": [
//         {
//           "name": "Sorbonne University",
//           "city": "Paris",
//           "country": "France"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "13",
//   "firstname": "Guglielmo",
//   "surname": "Marconi",
//   "born": "1874-04-25",
//   "died": "1937-07-20",
//   "bornCountry": "Italy",
//   "bornCountryCode": "IT",
//   "bornCity": "Bologna",
//   "diedCountry": "Italy",
//   "diedCountryCode": "IT",
//   "diedCity": "Rome",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1909",
//       "category": "physics",
//       "share": "2",
//       "motivation": "\"in recognition of their contributions to the development of wireless telegraphy\"",
//       "affiliations": [
//         {
//           "name": "Marconi Wireless Telegraph Co. Ltd.",
//           "city": "London",
//           "country": "United Kingdom"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "14",
//   "firstname": "Ferdinand",
//   "surname": "Braun",
//   "born": "1850-06-06",
//   "died": "1918-04-20",
//   "bornCountry": "Hesse-Kassel (now Germany)",
//   "bornCountryCode": "DE",
//   "bornCity": "Fulda",
//   "diedCountry": "USA",
//   "diedCountryCode": "US",
//   "diedCity": "Brooklyn, NY",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1909",
//       "category": "physics",
//       "share": "2",
//       "motivation": "\"in recognition of their contributions to the development of wireless telegraphy\"",
//       "affiliations": [
//         {
//           "name": "Strasbourg University",
//           "city": "Strasbourg",
//           "country": "Germany (now France)"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "15",
//   "firstname": "Johannes Diderik",
//   "surname": "van der Waals",
//   "born": "1837-11-23",
//   "died": "1923-03-08",
//   "bornCountry": "the Netherlands",
//   "bornCountryCode": "NL",
//   "bornCity": "Leiden",
//   "diedCountry": "the Netherlands",
//   "diedCountryCode": "NL",
//   "diedCity": "Amsterdam",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1910",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his work on the equation of state for gases and liquids\"",
//       "affiliations": [
//         {
//           "name": "Amsterdam University",
//           "city": "Amsterdam",
//           "country": "the Netherlands"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "16",
//   "firstname": "Wilhelm",
//   "surname": "Wien",
//   "born": "1864-01-13",
//   "died": "1928-08-30",
//   "bornCountry": "Prussia (now Russia)",
//   "bornCountryCode": "RU",
//   "bornCity": "Gaffken (now Parusnoye)",
//   "diedCountry": "Germany",
//   "diedCountryCode": "DE",
//   "diedCity": "Munich",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1911",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his discoveries regarding the laws governing the radiation of heat\"",
//       "affiliations": [
//         {
//           "name": "Würzburg University",
//           "city": "Würzburg",
//           "country": "Germany"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "17",
//   "firstname": "Gustaf",
//   "surname": "Dalén",
//   "born": "1869-11-30",
//   "died": "1937-12-09",
//   "bornCountry": "Sweden",
//   "bornCountryCode": "SE",
//   "bornCity": "Stenstorp",
//   "diedCountry": "Sweden",
//   "diedCountryCode": "SE",
//   "diedCity": "Stockholm",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1912",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his invention of automatic regulators for use in conjunction with gas accumulators for illuminating lighthouses and buoys\"",
//       "affiliations": [
//         {
//           "name": "Swedish Gas-Accumulator Co.",
//           "city": "Lidingö, Stockholm",
//           "country": "Sweden"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "18",
//   "firstname": "Heike",
//   "surname": "Kamerlingh Onnes",
//   "born": "1853-09-21",
//   "died": "1926-02-21",
//   "bornCountry": "the Netherlands",
//   "bornCountryCode": "NL",
//   "bornCity": "Groningen",
//   "diedCountry": "the Netherlands",
//   "diedCountryCode": "NL",
//   "diedCity": "Leiden",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1913",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his investigations on the properties of matter at low temperatures which led, inter alia, to the production of liquid helium\"",
//       "affiliations": [
//         {
//           "name": "Leiden University",
//           "city": "Leiden",
//           "country": "the Netherlands"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "19",
//   "firstname": "Max",
//   "surname": "von Laue",
//   "born": "1879-10-09",
//   "died": "1960-04-23",
//   "bornCountry": "Germany",
//   "bornCountryCode": "DE",
//   "bornCity": "Pfaffendorf",
//   "diedCountry": "West Germany (now Germany)",
//   "diedCountryCode": "DE",
//   "diedCity": "Berlin",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1914",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his discovery of the diffraction of X-rays by crystals\"",
//       "affiliations": [
//         {
//           "name": "Frankfurt-on-the-Main University",
//           "city": "Frankfurt-on-the-Main",
//           "country": "Germany"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "20",
//   "firstname": "William",
//   "surname": "Bragg",
//   "born": "1862-07-02",
//   "died": "1942-03-12",
//   "bornCountry": "United Kingdom",
//   "bornCountryCode": "GB",
//   "bornCity": "Wigton",
//   "diedCountry": "United Kingdom",
//   "diedCountryCode": "GB",
//   "diedCity": "London",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1915",
//       "category": "physics",
//       "share": "2",
//       "motivation": "\"for their services in the analysis of crystal structure by means of X-rays\"",
//       "affiliations": [
//         {
//           "name": "University College",
//           "city": "London",
//           "country": "United Kingdom"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "21",
//   "firstname": "Lawrence",
//   "surname": "Bragg",
//   "born": "1890-03-31",
//   "died": "1971-07-01",
//   "bornCountry": "Australia",
//   "bornCountryCode": "AU",
//   "bornCity": "Adelaide",
//   "diedCountry": "United Kingdom",
//   "diedCountryCode": "GB",
//   "diedCity": "Ipswich",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1915",
//       "category": "physics",
//       "share": "2",
//       "motivation": "\"for their services in the analysis of crystal structure by means of X-rays\"",
//       "affiliations": [
//         {
//           "name": "Victoria University",
//           "city": "Manchester",
//           "country": "United Kingdom"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "22",
//   "firstname": "Charles Glover",
//   "surname": "Barkla",
//   "born": "1877-06-07",
//   "died": "1944-10-23",
//   "bornCountry": "United Kingdom",
//   "bornCountryCode": "GB",
//   "bornCity": "Widnes",
//   "diedCountry": "Scotland",
//   "diedCountryCode": "GB",
//   "diedCity": "Edinburgh",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1917",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his discovery of the characteristic R&ouml;ntgen radiation of the elements\"",
//       "affiliations": [
//         {
//           "name": "Edinburgh University",
//           "city": "Edinburgh",
//           "country": "United Kingdom"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "23",
//   "firstname": "Max",
//   "surname": "Planck",
//   "born": "1858-04-23",
//   "died": "1947-10-04",
//   "bornCountry": "Schleswig (now Germany)",
//   "bornCountryCode": "DE",
//   "bornCity": "Kiel",
//   "diedCountry": "West Germany (now Germany)",
//   "diedCountryCode": "DE",
//   "diedCity": "Göttingen",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1918",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"in recognition of the services he rendered to the advancement of Physics by his discovery of energy quanta\"",
//       "affiliations": [
//         {
//           "name": "Berlin University",
//           "city": "Berlin",
//           "country": "Germany"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "24",
//   "firstname": "Johannes",
//   "surname": "Stark",
//   "born": "1874-04-15",
//   "died": "1957-06-21",
//   "bornCountry": "Germany",
//   "bornCountryCode": "DE",
//   "bornCity": "Schickenhof",
//   "diedCountry": "West Germany (now Germany)",
//   "diedCountryCode": "DE",
//   "diedCity": "Traunstein",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1919",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his discovery of the Doppler effect in canal rays and the splitting of spectral lines in electric fields\"",
//       "affiliations": [
//         {
//           "name": "Greifswald University",
//           "city": "Greifswald",
//           "country": "Germany"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "25",
//   "firstname": "Charles Edouard",
//   "surname": "Guillaume",
//   "born": "1861-02-15",
//   "died": "1938-06-13",
//   "bornCountry": "Switzerland",
//   "bornCountryCode": "CH",
//   "bornCity": "Fleurier",
//   "diedCountry": "France",
//   "diedCountryCode": "FR",
//   "diedCity": "Sèvres",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1920",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"in recognition of the service he has rendered to precision measurements in Physics by his discovery of anomalies in nickel steel alloys\"",
//       "affiliations": [
//         {
//           "name": "Bureau International des Poids et Mesures (International Bureau of Weights and Measures)",
//           "city": "Sèvres",
//           "country": "France"
// }
//       ]
//     }
//   ]
// },
// {
//   "id": "26",
//   "firstname": "Albert",
//   "surname": "Einstein",
//   "born": "1879-03-14",
//   "died": "1955-04-18",
//   "bornCountry": "Germany",
//   "bornCountryCode": "DE",
//   "bornCity": "Ulm",
//   "diedCountry": "USA",
//   "diedCountryCode": "US",
//   "diedCity": "Princeton, NJ",
//   "gender": "male",
//   "prizes": [
//     {
//       "year": "1921",
//       "category": "physics",
//       "share": "1",
//       "motivation": "\"for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect\"",
//       "affiliations": [
//         {
//           "name": "Kaiser-Wilhelm-Institut (now Max-Planck-Institut) für Physik",
//           "city": "Berlin",
//           "country": "Germany"
// }
//       ]
//     }
//   ]
// },

export function getLaureates() {
  return laureates;
}