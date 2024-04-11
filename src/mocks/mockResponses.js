export const mockResponses = {
  // Autocomplete endpoint
  autocomplete: {
    // No results
    noResults: [],
    // No results END

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
    ]
    // Single result END
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

    // With details
    withDetails: [
      {
        "LocalObservationDateTime": "2024-04-11T16:57:00+03:00",
        "EpochTime": 1712843820,
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
        "RealFeelTemperature": {
          "Metric": {
            "Value": 22.9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Pleasant"
          },
          "Imperial": {
            "Value": 73.0,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Pleasant"
          }
        },
        "RealFeelTemperatureShade": {
          "Metric": {
            "Value": 20.4,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Pleasant"
          },
          "Imperial": {
            "Value": 69.0,
            "Unit": "F",
            "UnitType": 18,
            "Phrase": "Pleasant"
          }
        },
        "RelativeHumidity": 64,
        "IndoorRelativeHumidity": 64,
        "DewPoint": {
          "Metric": {
            "Value": 15.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 59.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Wind": {
          "Direction": {
            "Degrees": 293,
            "Localized": "WNW",
            "English": "WNW"
          },
          "Speed": {
            "Metric": {
              "Value": 19.9,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 12.3,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "WindGust": {
          "Speed": {
            "Metric": {
              "Value": 31.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 19.5,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "UVIndex": 4,
        "UVIndexText": "Moderate",
        "Visibility": {
          "Metric": {
            "Value": 16.1,
            "Unit": "km",
            "UnitType": 6
          },
          "Imperial": {
            "Value": 10.0,
            "Unit": "mi",
            "UnitType": 2
          }
        },
        "ObstructionsToVisibility": "",
        "CloudCover": 27,
        "Ceiling": {
          "Metric": {
            "Value": 9144.0,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 30000.0,
            "Unit": "ft",
            "UnitType": 0
          }
        },
        "Pressure": {
          "Metric": {
            "Value": 1016.6,
            "Unit": "mb",
            "UnitType": 14
          },
          "Imperial": {
            "Value": 30.02,
            "Unit": "inHg",
            "UnitType": 12
          }
        },
        "PressureTendency": {
          "LocalizedText": "Falling",
          "Code": "F"
        },
        "Past24HourTemperatureDeparture": {
          "Metric": {
            "Value": 3.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 6.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "ApparentTemperature": {
          "Metric": {
            "Value": 22.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 72.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WindChillTemperature": {
          "Metric": {
            "Value": 22.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 72.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WetBulbTemperature": {
          "Metric": {
            "Value": 17.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 64.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WetBulbGlobeTemperature": {
          "Metric": {
            "Value": 21.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 70.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Precip1hr": {
          "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PrecipitationSummary": {
          "Precipitation": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "PastHour": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past3Hours": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past6Hours": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past9Hours": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past12Hours": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past18Hours": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past24Hours": {
            "Metric": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.0,
              "Unit": "in",
              "UnitType": 1
            }
          }
        },
        "TemperatureSummary": {
          "Past6HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 18.6,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 65.0,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
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
            }
          },
          "Past12HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 16.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 62.0,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
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
            }
          },
          "Past24HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 16.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 62.0,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
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
            }
          }
        },
        "MobileLink":
          "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link":
          "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
      }
    ]
    // With details END
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

    // With details+metric
    withDetailsMetric: {
      "Headline": {
        "EffectiveDate": "2024-04-13T20:00:00+03:00",
        "EffectiveEpochDate": 1713027600,
        "Severity": 7,
        "Text": "Mild Saturday night",
        "Category": "heat",
        "EndDate": "2024-04-14T08:00:00+03:00",
        "EndEpochDate": 1713070800,
        "MobileLink":
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
        "Link":
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2024-04-11T07:00:00+03:00",
          "EpochDate": 1712808000,
          "Sun": {
            "Rise": "2024-04-11T06:16:00+03:00",
            "EpochRise": 1712805360,
            "Set": "2024-04-11T19:08:00+03:00",
            "EpochSet": 1712851680
          },
          "Moon": {
            "Rise": "2024-04-11T07:50:00+03:00",
            "EpochRise": 1712811000,
            "Set": "2024-04-11T22:29:00+03:00",
            "EpochSet": 1712863740,
            "Phase": "WaxingCrescent",
            "Age": 3
          },
          "Temperature": {
            "Minimum": {
              "Value": 14.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 22.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 14.6,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 25.3,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 14.6,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 20.6,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "HoursOfSun": 8.1,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0.0,
              "Unit": "C",
              "UnitType": 17
            },
            "Cooling": {
              "Value": 0.0,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 9,
              "Category": "Very High",
              "CategoryValue": 4
            }
          ],
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false,
            "ShortPhrase": "Partly sunny",
            "LongPhrase": "Partly sunny",
            "PrecipitationProbability": 4,
            "ThunderstormProbability": 0,
            "RainProbability": 4,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 16.7,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 262,
                "Localized": "W",
                "English": "W"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 31.5,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 252,
                "Localized": "WSW",
                "English": "WSW"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 35,
            "Evapotranspiration": {
              "Value": 3.6,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 7525.2,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 63,
              "Maximum": 79,
              "Average": 69
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 14.5,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 18.0,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 17.1,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 16.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.6,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 19.3,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false,
            "ShortPhrase": "Partly cloudy",
            "LongPhrase": "Partly cloudy",
            "PrecipitationProbability": 1,
            "ThunderstormProbability": 0,
            "RainProbability": 1,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 5.6,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 22,
                "Localized": "NNE",
                "English": "NNE"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 18.5,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 343,
                "Localized": "NNW",
                "English": "NNW"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 49,
            "Evapotranspiration": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 75.3,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 75,
              "Maximum": 94,
              "Average": 85
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 14.0,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 17.5,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 15.6,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 15.2,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 19.7,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 17.5,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-12T07:00:00+03:00",
          "EpochDate": 1712894400,
          "Sun": {
            "Rise": "2024-04-12T06:15:00+03:00",
            "EpochRise": 1712891700,
            "Set": "2024-04-12T19:09:00+03:00",
            "EpochSet": 1712938140
          },
          "Moon": {
            "Rise": "2024-04-12T08:35:00+03:00",
            "EpochRise": 1712900100,
            "Set": "2024-04-12T23:38:00+03:00",
            "EpochSet": 1712954280,
            "Phase": "WaxingCrescent",
            "Age": 4
          },
          "Temperature": {
            "Minimum": {
              "Value": 14.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 23.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 15.5,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 26.2,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 15.5,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 21.6,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "HoursOfSun": 11.0,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0.0,
              "Unit": "C",
              "UnitType": 17
            },
            "Cooling": {
              "Value": 1.0,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 9,
              "Category": "Very High",
              "CategoryValue": 4
            }
          ],
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false,
            "ShortPhrase": "Mostly sunny",
            "LongPhrase": "Mostly sunny",
            "PrecipitationProbability": 1,
            "ThunderstormProbability": 0,
            "RainProbability": 1,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 13.0,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 318,
                "Localized": "NW",
                "English": "NW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 25.9,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 328,
                "Localized": "NNW",
                "English": "NNW"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 10,
            "Evapotranspiration": {
              "Value": 4.3,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 7945.7,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 54,
              "Maximum": 82,
              "Average": 63
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 15.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 17.5,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 17.0,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 17.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 19.9,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false,
            "ShortPhrase": "Partly cloudy",
            "LongPhrase":
              "Mainly clear early, then areas of low clouds forming",
            "PrecipitationProbability": 1,
            "ThunderstormProbability": 0,
            "RainProbability": 1,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 7.4,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 30,
                "Localized": "NNE",
                "English": "NNE"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 18.5,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 359,
                "Localized": "N",
                "English": "N"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 54,
            "Evapotranspiration": {
              "Value": 0.3,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 75.0,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 70,
              "Maximum": 89,
              "Average": 80
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 14.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 17.3,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 15.9,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 15.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 19.7,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 17.7,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-13T07:00:00+03:00",
          "EpochDate": 1712980800,
          "Sun": {
            "Rise": "2024-04-13T06:14:00+03:00",
            "EpochRise": 1712978040,
            "Set": "2024-04-13T19:09:00+03:00",
            "EpochSet": 1713024540
          },
          "Moon": {
            "Rise": "2024-04-13T09:27:00+03:00",
            "EpochRise": 1712989620,
            "Set": "2024-04-14T00:39:00+03:00",
            "EpochSet": 1713044340,
            "Phase": "WaxingCrescent",
            "Age": 5
          },
          "Temperature": {
            "Minimum": {
              "Value": 16.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 23.1,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 16.1,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 25.9,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 16.1,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 21.3,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "HoursOfSun": 9.9,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0.0,
              "Unit": "C",
              "UnitType": 17
            },
            "Cooling": {
              "Value": 2.0,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 9,
              "Category": "Very High",
              "CategoryValue": 4
            }
          ],
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false,
            "ShortPhrase": "Mostly sunny",
            "LongPhrase": "Mostly sunny",
            "PrecipitationProbability": 2,
            "ThunderstormProbability": 0,
            "RainProbability": 2,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 13.0,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 267,
                "Localized": "W",
                "English": "W"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 25.9,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 311,
                "Localized": "NW",
                "English": "NW"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 19,
            "Evapotranspiration": {
              "Value": 4.1,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 7978.5,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 57,
              "Maximum": 82,
              "Average": 66
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 15.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 17.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 17.4,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 18.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 20.1,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false,
            "ShortPhrase": "Mostly cloudy and mild",
            "LongPhrase": "Mostly cloudy and mild",
            "PrecipitationProbability": 3,
            "ThunderstormProbability": 0,
            "RainProbability": 3,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 7.4,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 279,
                "Localized": "W",
                "English": "W"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 18.5,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 316,
                "Localized": "NW",
                "English": "NW"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 53,
            "Evapotranspiration": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 42.0,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 76,
              "Maximum": 91,
              "Average": 82
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 15.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 17.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 17.0,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 17.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 18.7,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-14T07:00:00+03:00",
          "EpochDate": 1713067200,
          "Sun": {
            "Rise": "2024-04-14T06:13:00+03:00",
            "EpochRise": 1713064380,
            "Set": "2024-04-14T19:10:00+03:00",
            "EpochSet": 1713111000
          },
          "Moon": {
            "Rise": "2024-04-14T10:24:00+03:00",
            "EpochRise": 1713079440,
            "Set": "2024-04-15T01:33:00+03:00",
            "EpochSet": 1713133980,
            "Phase": "WaxingCrescent",
            "Age": 6
          },
          "Temperature": {
            "Minimum": {
              "Value": 17.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 23.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 16.8,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            },
            "Maximum": {
              "Value": 26.6,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Very Warm"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 16.8,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            },
            "Maximum": {
              "Value": 21.7,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "HoursOfSun": 8.8,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0.0,
              "Unit": "C",
              "UnitType": 17
            },
            "Cooling": {
              "Value": 2.0,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 9,
              "Category": "Very High",
              "CategoryValue": 4
            }
          ],
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false,
            "ShortPhrase": "Partly sunny",
            "LongPhrase": "Partly sunny",
            "PrecipitationProbability": 2,
            "ThunderstormProbability": 0,
            "RainProbability": 2,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 14.8,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 259,
                "Localized": "W",
                "English": "W"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 31.5,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 276,
                "Localized": "W",
                "English": "W"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 32,
            "Evapotranspiration": {
              "Value": 3.8,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 7687.6,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 61,
              "Maximum": 86,
              "Average": 70
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 17.0,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 18.7,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 18.2,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 18.6,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 21.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 20.5,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false,
            "ShortPhrase": "Partly cloudy and mild",
            "LongPhrase": "Partly cloudy and mild",
            "PrecipitationProbability": 5,
            "ThunderstormProbability": 0,
            "RainProbability": 5,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 9.3,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 208,
                "Localized": "SSW",
                "English": "SSW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 18.5,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 158,
                "Localized": "SSE",
                "English": "SSE"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 47,
            "Evapotranspiration": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 79.4,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 80,
              "Maximum": 88,
              "Average": 85
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 16.3,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 17.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 17.2,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 17.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.0,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 19.1,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2024-04-15T07:00:00+03:00",
          "EpochDate": 1713153600,
          "Sun": {
            "Rise": "2024-04-15T06:12:00+03:00",
            "EpochRise": 1713150720,
            "Set": "2024-04-15T19:11:00+03:00",
            "EpochSet": 1713197460
          },
          "Moon": {
            "Rise": "2024-04-15T11:24:00+03:00",
            "EpochRise": 1713169440,
            "Set": "2024-04-16T02:18:00+03:00",
            "EpochSet": 1713223080,
            "Phase": "First",
            "Age": 7
          },
          "Temperature": {
            "Minimum": {
              "Value": 16.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 24.1,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "RealFeelTemperature": {
            "Minimum": {
              "Value": 16.2,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 27.1,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Very Warm"
            }
          },
          "RealFeelTemperatureShade": {
            "Minimum": {
              "Value": 16.2,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Cool"
            },
            "Maximum": {
              "Value": 22.5,
              "Unit": "C",
              "UnitType": 17,
              "Phrase": "Pleasant"
            }
          },
          "HoursOfSun": 9.5,
          "DegreeDaySummary": {
            "Heating": {
              "Value": 0.0,
              "Unit": "C",
              "UnitType": 17
            },
            "Cooling": {
              "Value": 2.0,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "AirAndPollen": [
            {
              "Name": "AirQuality",
              "Value": 0,
              "Category": "Good",
              "CategoryValue": 1,
              "Type": "Ozone"
            },
            {
              "Name": "Grass",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Mold",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Ragweed",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "Tree",
              "Value": 0,
              "Category": "Low",
              "CategoryValue": 1
            },
            {
              "Name": "UVIndex",
              "Value": 9,
              "Category": "Very High",
              "CategoryValue": 4
            }
          ],
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false,
            "ShortPhrase": "Sunshine and a few clouds",
            "LongPhrase": "Sunshine and a few clouds",
            "PrecipitationProbability": 25,
            "ThunderstormProbability": 0,
            "RainProbability": 25,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 14.8,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 286,
                "Localized": "WNW",
                "English": "WNW"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 31.5,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 319,
                "Localized": "NW",
                "English": "NW"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 24,
            "Evapotranspiration": {
              "Value": 3.8,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 7741.5,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 61,
              "Maximum": 83,
              "Average": 70
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 17.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 19.3,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 18.7,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 19.5,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 22.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 21.1,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false,
            "ShortPhrase": "Partly cloudy and mild",
            "LongPhrase": "Partly cloudy and mild",
            "PrecipitationProbability": 0,
            "ThunderstormProbability": 0,
            "RainProbability": 0,
            "SnowProbability": 0,
            "IceProbability": 0,
            "Wind": {
              "Speed": {
                "Value": 9.3,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 52,
                "Localized": "NE",
                "English": "NE"
              }
            },
            "WindGust": {
              "Speed": {
                "Value": 20.4,
                "Unit": "km/h",
                "UnitType": 7
              },
              "Direction": {
                "Degrees": 12,
                "Localized": "NNE",
                "English": "NNE"
              }
            },
            "TotalLiquid": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Rain": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Snow": {
              "Value": 0.0,
              "Unit": "cm",
              "UnitType": 4
            },
            "Ice": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "HoursOfPrecipitation": 0.0,
            "HoursOfRain": 0.0,
            "HoursOfSnow": 0.0,
            "HoursOfIce": 0.0,
            "CloudCover": 54,
            "Evapotranspiration": {
              "Value": 0.0,
              "Unit": "mm",
              "UnitType": 3
            },
            "SolarIrradiance": {
              "Value": 84.3,
              "Unit": "W/m²",
              "UnitType": 33
            },
            "RelativeHumidity": {
              "Minimum": 74,
              "Maximum": 88,
              "Average": 82
            },
            "WetBulbTemperature": {
              "Minimum": {
                "Value": 15.2,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 18.2,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 16.9,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "WetBulbGlobeTemperature": {
              "Minimum": {
                "Value": 16.7,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Average": {
                "Value": 18.7,
                "Unit": "C",
                "UnitType": 17
              }
            }
          },
          "Sources": ["AccuWeather"],
          "MobileLink":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
          "Link":
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
        }
      ]
    }
    // With details+metric END
  }
  // Daily5 endpoint END
};
