import {WeatherResponse} from '../models/WeatherResponse'


export const createTableObject = (data: WeatherResponse) => {
  return {
    dt: data.dt,
    country: data.sys.country,
    city: data.name,
    lat: data.coord.lat,
    lon: data.coord.lon
  }
}
