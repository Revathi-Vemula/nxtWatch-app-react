import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TrendingVideoCardLink = styled(Link)`
  text-decoration: none;
`

export const TrendingVideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 30px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const VideoDescContainer = styled.div`
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const VideoTitle = styled.h1`
  color: ${props => props.color};
  font-family: 'Consolas';
  font-size: 16px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Consolas';
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const ViewsAndDate = styled.p`
  font-family: 'Consolas';
  font-size: 15px;
  margin-top: 0;
  color: ${props => props.color};
`

export const Dot = styled.span``

export const ChannelProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
