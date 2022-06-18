export interface WeatherResponse {
  coord: {
    lon: string
    lat: string
  }
  weather: [{
    description: string
    icon: string
  }]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  name: string
}
