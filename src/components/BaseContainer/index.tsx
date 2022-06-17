import React from 'react'
import * as Styles from './styles'


type BaseContainerProps = {
  children: React.ReactNode | React.ReactNode[];
}

const BaseContainer = ({children}: BaseContainerProps) => {
  return (
    <Styles.BaseContainer>
      {children}
    </Styles.BaseContainer>
  )
}

export default BaseContainer
