import styled, {css} from 'styled-components'


const general = css`
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`


export const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #3E63DD;
  border: 5px solid #3E63DD;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 3px;
  width: 100%;

  > * {
    ${general}
  }
`

export const Icon = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`

export const Description = styled.div`
  grid-area: 1 / 3 / 2 / 5;
`

export const Temp = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`

export const FeelsTemp = styled.div`
  grid-area: 2 / 4 / 3 / 5;
`

export const Sunrise = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`

export const SunSet = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`

export const WindSpeed = styled.div`
  grid-area: 3 / 3 / 4 / 4;
`

export const WindDirection = styled.div`
  grid-area: 3 / 4 / 4 / 5;
`

export const Pressure = styled.div`
  grid-area: 4 / 1 / 6 / 3;
`

export const Humidity = styled.div`
  grid-area: 4 / 3 / 6 / 5;
`
