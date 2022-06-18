import useSWR from "swr"
import axios from 'axios'
import {useCurrentLocation} from './useCurrentLocation'


const $weatherFetcher = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export function useDefaultWeatherData() {
  const {lon, lat} = useCurrentLocation()
  const {data, error} = useSWR(`https://fcc-weather-api.glitch.me/api/current?lat=${lat?.toFixed(1)}&lon=${lon?.toFixed(1)}`, $weatherFetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
