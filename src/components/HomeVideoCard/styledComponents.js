import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.textColor} !important;
`

export const VideoCardItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 305px;
    flex-grow: 1;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`

export const VideoCoverImage = styled.img`
  @media screen and (max-width: 576px) {
    height: 22vh;
    width: 100vw;
  }
`

export const ChannelVideoDescContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
`

export const ChannelImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`

export const VideoInsightsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const VideoTitle = styled.p`
  margin: 0px;
  color: ${props => props.textColor};
  font-family: 'Consolas';
  font-size: 18px;
`

export const ChannelName = styled.p`
  margin: 2px;
  color: ${props => props.textColor};
  font-family: 'Consolas';
  font-size: 18px;
`

export const ViewsAndDate = styled.p`
  margin: 2px;
  color: ${props => props.textColor} !important;
  font-family: 'Consolas';
`

export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`
