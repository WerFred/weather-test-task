import axios from 'axios'
import React, {useEffect, useState} from 'react'
import BaseContainer from './components/BaseContainer'
import Button from './components/Button'
import Header from './components/Header'
import Input from './components/Input'
import Loader from './components/Loader'
import CityTable from './components/Table'
import WeatherGrid from './components/WeatherGrid'
import {useDefaultWeatherData} from './hooks/useDefaultWeatherData'
import {WeatherResponse} from './models/WeatherResponse'
import {ITable} from './models/ITable'
import * as Styles from './styles'
import {createTableObject} from './utils/createTableObject'


function App() {
  const [coords, setCoords] = useState({lat: '', lon: ''})
  const [cities, setCities] = useState<ITable[]>(JSON.parse(localStorage.getItem('tableData')!) ?? [])

  const [weatherData, setWeatherData] = useState<WeatherResponse | null>()
  const {data, isError} = useDefaultWeatherData()

  useEffect(() => {
    setWeatherData(data)
  }, [data])

  useEffect(() => {
    if (weatherData) {
      setCities(prevCities => {
        if (weatherData.name === data?.name) {
          return [...prevCities]
        }
        let index = prevCities.findIndex(city => city.city === weatherData.name)
        if (index >= 0) {
          prevCities[index] = createTableObject(weatherData)
          return [...prevCities]
        }
        return [...prevCities, createTableObject(weatherData)]
      })
    }
  }, [data, weatherData])

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(cities))
  }, [cities])

  const clickHandler = async () => {
    const response = await axios.get<WeatherResponse>(`https://fcc-weather-api.glitch.me/api/current?lat=${coords.lat}&lon=${coords.lon}`)
    if (response.data.name) {
      setWeatherData(response.data)
    }
  }

  if (isError) {
    return <Loader />
  }

  return (
    <BaseContainer>
      <Header />
      <Styles.MainWrapper>
        <Styles.SearchWrapper>
          <Styles.Inputs>
            <Input
              id={'latitude'}
              label={'latitude'}
              placeholder={'48.54'}
              type={'number'}
              value={coords.lat}
              onChange={(e) => setCoords({...coords, lat: e.target.value})}
            />
            <Input
              id={'longitude'}
              label={'longitude'}
              placeholder={'31.35'}
              type={'number'}
              value={coords.lon}
              onChange={(e) => setCoords({...coords, lon: e.target.value})}
            />
          </Styles.Inputs>
          <Button onClick={clickHandler}>Get weather</Button>
        </Styles.SearchWrapper>
        {weatherData && <WeatherGrid info={weatherData} />}
        {cities.length > 0 && <CityTable cities={cities} setCoords={setCoords} setCities={setCities} />}
      </Styles.MainWrapper>
    </BaseContainer>
  )
}

export default App
