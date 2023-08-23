import styled from 'styled-components/macro'
import { MdFingerprint } from 'react-icons/md'

export const NewCapital = () => {
  return (
    <Marca href='https://github.com/SallesCosta' target='_blanc'>
      <span>by <strong>NewCapital.in</strong></span>
      <MdFingerprint />
    </Marca>
  )
}

export const Marca = styled.a`
  color: #CBD5E0;
  font-size: 16px;
  align-items: center;
   svg {
      width: 32px;
      height: 32px;
  }
`
