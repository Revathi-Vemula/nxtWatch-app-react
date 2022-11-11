import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingVideoCardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`

export const GamingVideoCardContainer = styled.li`
  margin: 5px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    margin: 15px;
  }
`

export const GamingThumbnailImg = styled.img`
  height: 200px;
  width: 150px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 280px;
    width: 220px;
  }
`

export const GamingTitle = styled.p`
  font-size: 15px;
  font-family: 'Consolas';
  margin-top: 3px;
  margin-bottom: 3px;
`

export const ViewCount = styled.p`
  font-size: 12px;
  font-family: 'Consolas';
  margin-top: 3px;
  color: ${props => props.color} !important;
`
