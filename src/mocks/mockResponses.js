/* eslint-disable spellcheck/spell-checker -- Ok */

export const mockResponses = {
  // Autocomplete endpoint
  autocomplete: {
    // Multiple results
    multipleResults: [
      {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
          "ID": "IL",
          "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
          "ID": "TA",
          "LocalizedName": "Tel Aviv"
        }
      },
      {
        "Version": 1,
        "Key": "3431644",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Telanaipura",
        "Country": {
          "ID": "ID",
          "LocalizedName": "Indonesia"
        },
        "AdministrativeArea": {
          "ID": "JA",
          "LocalizedName": "Jambi"
        }
      },
      {
        "Version": 1,
        "Key": "300558",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Telok Blangah New Town",
        "Country": {
          "ID": "SG",
          "LocalizedName": "Singapore"
        },
        "AdministrativeArea": {
          "ID": "05",
          "LocalizedName": "South West"
        }
      },
      {
        "Version": 1,
        "Key": "325876",
        "Type": "City",
        "Rank": 51,
        "LocalizedName": "Telford",
        "Country": {
          "ID": "GB",
          "LocalizedName": "United Kingdom"
        },
        "AdministrativeArea": {
          "ID": "TFW",
          "LocalizedName": "Telford and Wrekin"
        }
      },
      {
        "Version": 1,
        "Key": "169072",
        "Type": "City",
        "Rank": 51,
        "LocalizedName": "Telavi",
        "Country": {
          "ID": "GE",
          "LocalizedName": "Georgia"
        },
        "AdministrativeArea": {
          "ID": "KA",
          "LocalizedName": "Kakheti"
        }
      },
      {
        "Version": 1,
        "Key": "230611",
        "Type": "City",
        "Rank": 51,
        "LocalizedName": "Telsiai",
        "Country": {
          "ID": "LT",
          "LocalizedName": "Lithuania"
        },
        "AdministrativeArea": {
          "ID": "TE",
          "LocalizedName": "Telšiai"
        }
      },
      {
        "Version": 1,
        "Key": "2723742",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Telégrafo",
        "Country": {
          "ID": "BR",
          "LocalizedName": "Brazil"
        },
        "AdministrativeArea": {
          "ID": "PA",
          "LocalizedName": "Pará"
        }
      },
      {
        "Version": 1,
        "Key": "186933",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Tela",
        "Country": {
          "ID": "HN",
          "LocalizedName": "Honduras"
        },
        "AdministrativeArea": {
          "ID": "AT",
          "LocalizedName": "Atlántida"
        }
      },
      {
        "Version": 1,
        "Key": "3453754",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Telaga Asih",
        "Country": {
          "ID": "ID",
          "LocalizedName": "Indonesia"
        },
        "AdministrativeArea": {
          "ID": "JB",
          "LocalizedName": "West Java"
        }
      },
      {
        "Version": 1,
        "Key": "3453755",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Telagamurni",
        "Country": {
          "ID": "ID",
          "LocalizedName": "Indonesia"
        },
        "AdministrativeArea": {
          "ID": "JB",
          "LocalizedName": "West Java"
        }
      }
    ],
    // Multiple results END

    // Single result
    singleResult: [
      {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
          "ID": "IL",
          "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
          "ID": "TA",
          "LocalizedName": "Tel Aviv"
        }
      }
    ],
    // Single result END

    // Single result alt
    singleResultAlt: [
      {
        "Version": 1,
        "Key": "236186",
        "Type": "City",
        "Rank": 51,
        "LocalizedName": "Timbuktu",
        "Country": {
          "ID": "ML",
          "LocalizedName": "Mali"
        },
        "AdministrativeArea": {
          "ID": "6",
          "LocalizedName": "Tombouctou"
        }
      }
    ]
    // Single result alt END
  },
  // Autocomplete endpoint END

  // Current conditions endpoint
  currentConditions: {
    // Minimal
    minimal: [
      {
        "LocalObservationDateTime": "2024-04-11T16:47:00+03:00",
        "EpochTime": 1712843220,
        "WeatherText": "Mostly sunny",
        "WeatherIcon": 2,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
          "Metric": {
            "Value": 22.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 72.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "MobileLink":
          "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link":
          "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
      }
    ],
    // Minimal END

    // Minimal alt
    minimalAlt: [
      {
        "LocalObservationDateTime": "2024-04-11T19:21:00+00:00",
        "EpochTime": 1712863260,
        "WeatherText": "Some clouds",
        "WeatherIcon": 36,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
          "Metric": {
            "Value": 37.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 99.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "MobileLink":
          "http://www.accuweather.com/en/ml/timbuktu/236186/current-weather/236186?lang=en-us",
        "Link":
          "http://www.accuweather.com/en/ml/timbuktu/236186/current-weather/236186?lang=en-us"
      }
    ]
    // Minimal alt END
  },
  // Current conditions endpoint END

  // Daily5 endpoint
  daily5: {
    // Minimal
    minimal: {
      "Headline": {
        "EffectiveDate": "2024-04-13T20:00:00+03:00",
        "EffectiveEpochDate": 1713027600,
        "Severity": 7,
        "Text": "Mild Saturday night",
        "Category": "heat",
        "EndDate": "2024-04-14T08:00:00+03:00",
        "EndEpochDate": 1713070800,
        "MobileLink":
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
        "Link":
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2024-04-11T07:00:00+03:00",
          "EpochDate": 1712808000,
          "Temperature": {
            "Minimum": {
              "Value": 58.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 72.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
        },
        {
          "Date": "2024-04-12T07:00:00+03:00",
          "EpochDate": 1712894400,
          "Temperature": {
            "Minimum": {
              "Value": 59.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 74.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
        },
        {
          "Date": "2024-04-13T07:00:00+03:00",
          "EpochDate": 1712980800,
          "Temperature": {
            "Minimum": {
              "Value": 61.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 74.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
        },
        {
          "Date": "2024-04-14T07:00:00+03:00",
          "EpochDate": 1713067200,
          "Temperature": {
            "Minimum": {
              "Value": 63.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 74.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
        },
        {
          "Date": "2024-04-15T07:00:00+03:00",
          "EpochDate": 1713153600,
          "Temperature": {
            "Minimum": {
              "Value": 61.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 75.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
        }
      ]
    },
    // Minimal END

    // Minimal alt
    minimalAlt: {
      "Headline": {
        "EffectiveDate": "2024-04-11T19:00:00+00:00",
        "EffectiveEpochDate": 1712862000,
        "Severity": 7,
        "Text": "Warm Thursday night",
        "Category": "heat",
        "EndDate": "2024-04-12T07:00:00+00:00",
        "EndEpochDate": 1712905200,
        "MobileLink":
          "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?lang=en-us",
        "Link":
          "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2024-04-11T07:00:00+00:00",
          "EpochDate": 1712818800,
          "Temperature": {
            "Minimum": {
              "Value": 79.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 110.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 30,
            "IconPhrase": "Hot",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=1&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=1&lang=en-us"
        },
        {
          "Date": "2024-04-12T07:00:00+00:00",
          "EpochDate": 1712905200,
          "Temperature": {
            "Minimum": {
              "Value": 75.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 107.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 5,
            "IconPhrase": "Hazy sunshine",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=2&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=2&lang=en-us"
        },
        {
          "Date": "2024-04-13T07:00:00+00:00",
          "EpochDate": 1712991600,
          "Temperature": {
            "Minimum": {
              "Value": 65.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 100.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=3&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=3&lang=en-us"
        },
        {
          "Date": "2024-04-14T07:00:00+00:00",
          "EpochDate": 1713078000,
          "Temperature": {
            "Minimum": {
              "Value": 65.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 95.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 5,
            "IconPhrase": "Hazy sunshine",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=4&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=4&lang=en-us"
        },
        {
          "Date": "2024-04-15T07:00:00+00:00",
          "EpochDate": 1713164400,
          "Temperature": {
            "Minimum": {
              "Value": 67.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 96.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=5&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=5&lang=en-us"
        }
      ]
    },
    // Minimal alt END

    // Minimal metric
    minimalMetric: {
      "Headline": {
        "EffectiveDate": "2024-04-17T08:00:00+03:00",
        "EffectiveEpochDate": 1713330000,
        "Severity": 7,
        "Text": "Becoming noticeably warmer Wednesday",
        "Category": "warmer",
        "EndDate": "2024-04-17T20:00:00+03:00",
        "EndEpochDate": 1713373200,
        "MobileLink":
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
        "Link":
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2024-04-13T07:00:00+03:00",
          "EpochDate": 1712980800,
          "Temperature": {
            "Minimum": {
              "Value": 16.6,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 23.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-14T07:00:00+03:00",
          "EpochDate": 1713067200,
          "Temperature": {
            "Minimum": {
              "Value": 18.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 23.5,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-15T07:00:00+03:00",
          "EpochDate": 1713153600,
          "Temperature": {
            "Minimum": {
              "Value": 17.0,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 23.6,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-16T07:00:00+03:00",
          "EpochDate": 1713240000,
          "Temperature": {
            "Minimum": {
              "Value": 19.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 26.5,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-17T07:00:00+03:00",
          "EpochDate": 1713326400,
          "Temperature": {
            "Minimum": {
              "Value": 22.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 29.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
        }
      ]
    },
    // MinimalMetric END

    // Minimal metric alt
    minimalMetricAlt: {
      "Headline": {
        "EffectiveDate": "2024-04-14T07:00:00+00:00",
        "EffectiveEpochDate": 1713078000,
        "Severity": 7,
        "Text": "Breezy Sunday morning",
        "Category": "wind",
        "EndDate": "2024-04-14T13:00:00+00:00",
        "EndEpochDate": 1713099600,
        "MobileLink":
          "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?unit=c&lang=en-us",
        "Link":
          "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2024-04-13T07:00:00+00:00",
          "EpochDate": 1712991600,
          "Temperature": {
            "Minimum": {
              "Value": 17.7,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 38.0,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 5,
            "IconPhrase": "Hazy sunshine",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=1&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-14T07:00:00+00:00",
          "EpochDate": 1713078000,
          "Temperature": {
            "Minimum": {
              "Value": 18.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 35.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 5,
            "IconPhrase": "Hazy sunshine",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=2&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-15T07:00:00+00:00",
          "EpochDate": 1713164400,
          "Temperature": {
            "Minimum": {
              "Value": 19.7,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 35.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=3&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-16T07:00:00+00:00",
          "EpochDate": 1713250800,
          "Temperature": {
            "Minimum": {
              "Value": 19.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 36.6,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 5,
            "IconPhrase": "Hazy sunshine",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=4&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-17T07:00:00+00:00",
          "EpochDate": 1713337200,
          "Temperature": {
            "Minimum": {
              "Value": 21.6,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 38.5,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 5,
            "IconPhrase": "Hazy sunshine",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=5&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/ml/timbuktu/236186/daily-weather-forecast/236186?day=5&unit=c&lang=en-us"
        }
      ]
    }
    // Minimal metric alt END
  }
  // Daily5 endpoint END
};
