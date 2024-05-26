import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../../styles'

export const ButtonContainer = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${colors.palePeach};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`
export const ButtonLink = styled(Link)`
  width: 304px;
  height: 24px;
  background-color: ${colors.palePeach};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`