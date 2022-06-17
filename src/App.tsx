import React from 'react'
import BaseContainer from './components/BaseContainer'
import Button from './components/Button'
import Header from './components/Header'
import Input from './components/Input'
import * as Styles from './styles'


function App() {
  return (
    <BaseContainer>
      <Header />
      <Styles.MainWrapper>
        <Styles.SearchWrapper>
          <Styles.Inputs>
            <Input id={'latitude'} label={'latitude'} placeholder={'48.54'} type={'number'} />
            <Input id={'longitude'} label={'longitude'} placeholder={'31.35'} type={'number'} />
          </Styles.Inputs>
          <Button>Get weather</Button>
        </Styles.SearchWrapper>
        <Styles.WeatherWrapper>

        </Styles.WeatherWrapper>
      </Styles.MainWrapper>
    </BaseContainer>
  )
}

export default App
