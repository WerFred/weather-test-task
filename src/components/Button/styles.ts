import styled from 'styled-components'


export const Button = styled.button<{width?: string}>`
  cursor: pointer;
  padding: 8px 12px;
  max-width: ${props => props.width};
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #3E63DD;
  background-color: #3E63DD;
  transition: all 0.15s;
  text-align: center;
  color: #fff;

  &:hover {
    border: 1px solid #6485e8;
    background-color: #6485e8;
  }

  &:active {
    border: 1px solid #3451B2;
    background-color: #3451B2;
    transform: translateY(2px);
  }
`
