import React from 'react'
import * as Styles from './styles'


type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
  width?: string
}

const Button = ({children, onClick, width}: ButtonProps) => {
  return (
    <Styles.Button
      onClick={onClick}
      width={width}
    >
      {children}
    </Styles.Button>
  )
}

export default Button
