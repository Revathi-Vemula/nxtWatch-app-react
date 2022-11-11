import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.textColor};
`

export const VideoCardItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 245px;
    flex-grow: 1;
    margin-right: 15px;
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
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const VideoInsightsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const VideoTitle = styled.p`
  margin: 0;
  margin-bottom: 2px;
  font-family: 'Consolas';
  font-size: 15px;
`

export const ChannelName = styled.p`
  font-family: 'Consolas';
  font-size: 13px;
`

export const ViewsAndDate = styled.p`
  color: ${props => props.textColor} !important;
  font-family: 'Consolas';
  font-size: 13px;
`

export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`
