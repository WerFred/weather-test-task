import React, {InputHTMLAttributes} from 'react'
import * as Styles from './styles'


export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  id: string
  label?: string
  placeholder?: string
}

const Input = ({label, id, placeholder = 'type...', ...rest}: IInput) => {
  return (
    <Styles.InputWrapper>
      {label && <Styles.Label htmlFor={id}>{label}</Styles.Label>}
      <Styles.Input id={id} name={id} placeholder={placeholder} {...rest} />
    </Styles.InputWrapper>
  )
}

export default Input
