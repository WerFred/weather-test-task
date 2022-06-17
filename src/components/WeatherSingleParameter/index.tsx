import React from 'react'
import * as Styles from './styles'

type WeatherSingleParameterProps = {
  info: string
}

const WeatherSingleParameter = ({info}: WeatherSingleParameterProps) => {
  return (
    <Styles.Wrapper>
      {info}
    </Styles.Wrapper>
  )
}

export default WeatherSingleParameter
