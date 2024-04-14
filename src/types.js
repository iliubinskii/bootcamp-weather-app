/**
 * @type {{
 *   Temperature: {
 *     Imperial: { Unit: string, Value: number },
 *     Metric: { Unit: string, Value: number }
 *   },
 *   WeatherIcon: number,
 *   WeatherText: string
 * }}
 */
export const CurrentConditionsType = {
  Temperature: {
    Imperial: { Unit: "", Value: 0 },
    Metric: { Unit: "", Value: 0 }
  },
  WeatherIcon: 0,
  WeatherText: ""
};

/**
 * @type {{
 *   DailyForecasts: Array<{
 *     Date: string,
 *     Day: {
 *       Icon: number,
 *       IconPhrase: string
 *     },
 *     Night: {
 *       Icon: number,
 *       IconPhrase: string
 *     },
 *     Temperature: {
 *       Minimum: { Unit: string, Value: number },
 *       Maximum: { Unit: string, Value: number }
 *     }
 *   }>
 * }}
 */
export const DailyForecastsType = {
  DailyForecasts: [
    {
      Date: "",
      Day: { Icon: 0, IconPhrase: "" },
      Night: { Icon: 0, IconPhrase: "" },
      Temperature: {
        Minimum: { Unit: "", Value: 0 },
        Maximum: { Unit: "", Value: 0 }
      }
    }
  ]
};

/**
 * @type {{
 *   Country: { LocalizedName: string },
 *   Key: string,
 *   LocalizedName: string
 * }}
 */
export const LocationType = {
  Country: { LocalizedName: "" },
  Key: "",
  LocalizedName: ""
};

/**
 * @type {Array<LocationType>}
 */
export const LocationsType = [];

/**
 * @type {{
 *   Unit: string,
 *   Value: number
 * }}
 */
export const TemperatureType = { Unit: "", Value: 0 };

/**
 * @type {{
 *   devMode: boolean,
 *   location: LocationType,
 *   metric: boolean
 * }}
 */
export const AppStateType = {
  devMode: false,
  location: LocationType,
  metric: false
};
