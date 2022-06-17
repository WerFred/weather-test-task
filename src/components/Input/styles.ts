import styled from 'styled-components'


export const InputWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`

export const Label = styled.label`
  color: #3E63DD;
`

export const Input = styled.input`
  width: 100%;
  border: unset;
  background-color: #f3f5fd;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  transition: all 0.2s;
  box-shadow: 0 0 0 1px #AEC0F5;

  &::placeholder {
    color: #889096;
  }

  &:focus {
    background-color: #dde3f8;
  }
`
