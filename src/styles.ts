import styled from 'styled-components'


export const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 20px 0;
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
  max-width: 600px;
`

export const Inputs = styled.div`
  display: flex;
  gap: 15px;
`

export const WeatherWrapper = styled.div`
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`
