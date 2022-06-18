import React from 'react'
import {WeatherResponse} from '../../models/WeatherResponse'
import * as Styles from './styles'

type WeatherGridProps = {
  info: WeatherResponse
}

const WeatherGrid = ({info}: WeatherGridProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Icon><img src={info.weather[0].icon} alt={info.weather[0].description} /></Styles.Icon>
      <Styles.Description>{info.name} - {info.weather[0].description}</Styles.Description>
      <Styles.Temp>temperature {info.main.temp}℃</Styles.Temp>
      <Styles.FeelsTemp>feels like {info.main.feels_like}℃</Styles.FeelsTemp>
      <Styles.Sunrise>sunrise {info.sys.sunrise}</Styles.Sunrise>
      <Styles.SunSet>sunset {info.sys.sunset}</Styles.SunSet>
      <Styles.WindSpeed>wind speed {info.wind.speed}m/s</Styles.WindSpeed>
      <Styles.WindDirection>wind direction {info.wind.deg}</Styles.WindDirection>
      <Styles.Pressure>pressure {info.main.pressure}hPa</Styles.Pressure>
      <Styles.Humidity>humidity {info.main.humidity}%</Styles.Humidity>
    </Styles.Wrapper>
  )
}

export default WeatherGrid
